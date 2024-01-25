import { Injectable } from '@angular/core';
import { first, forkJoin, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { Challange, ChallangeFull, ChallangeTypes } from '../_models/challange';
import { ChallangeRequest } from '../_models/challange-request';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TeamsService } from './team.service';
import { Paginable } from '../_models/paginable';

@Injectable({
  providedIn: 'root',
})
export class ChallangeService {
  constructor(private http: HttpClient, private team: TeamsService) {}

  getChallanges(status: ChallangeTypes, page = 0, size = 10) {
    return this.team.getPlayerTeam().pipe(
      first(),
      switchMap((team) => {
        return team
          ? this.http
              .get<Paginable<Challange>>(`${environment.baseUrl}/match`, {
                params: {
                  teamId: team.id,
                  status,
                  page,
                  size,
                },
              })
              .pipe(
                map((matches) => {
                  const challangedTeams = matches.content.map((challange) =>
                    this.getChallange(challange.id)
                  );

                  if (challangedTeams.length === 0) {
                    return of({ ...matches, content: [] });
                  }

                  return forkJoin(challangedTeams).pipe(
                    map((team) => {
                      const content = matches.content.map((_, index) => {
                        return team[index];
                      });

                      return {
                        ...matches,
                        content,
                      } as Paginable<ChallangeFull>;
                    })
                  );
                }),
                mergeMap((map) => map)
              )
          : of(undefined);
      })
    );
  }

  getChallange(id: number) {
    return this.http.get<ChallangeFull>(`${environment.baseUrl}/match/${id}`);
  }

  challangeTeam(challange: ChallangeRequest) {
    return this.team.getPlayerTeam().pipe(
      first(),
      switchMap((team) => {
        return team
          ? this.http.post<Paginable<ChallangeFull>>(
              `${environment.baseUrl}/match`,
              {
                ...challange,
                challengerId: team.id,
              }
            )
          : of(undefined);
      })
    );
  }

  acceptChallange(id: Challange['id']) {
    return this.http.put<ChallangeFull>(`${environment.baseUrl}/match/${id}`, {
      status: 'ACCEPT',
    });
  }

  declineChallange(id: Challange['id']) {
    return this.http.put<ChallangeFull>(`${environment.baseUrl}/match/${id}`, {
      status: 'REJECT',
    });
  }

  resolveChallange(
    id: Challange['id'],
    challengerScore: number,
    challengedScore: number
  ) {
    return this.http.put<ChallangeFull>(`${environment.baseUrl}/match/${id}`, {
      status: 'FINISH',
      result: {
        challengerScore,
        challengedScore,
      },
    });
  }
}
