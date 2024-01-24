import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription, debounceTime, first, from, tap } from 'rxjs';
import { SportType } from 'src/app/core/_models/sport-type';
import { Team as TeamBase } from 'src/app/core/_models/team';
import { SportContextService } from 'src/app/core/_services/sport-context.service';
import { TeamsService } from 'src/app/core/_services/team.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss'],
})
export class TeamsListComponent {
  @Input() playerTeam: TeamBase | null = null;
  @Input() isOwner: boolean | null = null;
  @Output() challangeTeam = new EventEmitter<TeamBase>();
  @Output() showTeam = new EventEmitter<TeamBase>();

  filteredValue = '';
  totalElements: number = 0;
  displayedColumns: Array<String> = ['id', 'name', 'points', 'action'];

  subs: Subscription;
  dataSource: MatTableDataSource<TeamBase>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private teamService: TeamsService,
    private context: SportContextService
  ) {
    this.dataSource = new MatTableDataSource([] as TeamBase[]);
    this.subs = this.context
      .getSportContextObservable()
      .pipe(
        tap((_) => {
          this.getTeams({ page: 0, size: 10 });
          if(this.paginator) this.paginator.pageIndex = 0;
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  private getTeams(request: any) {
    this.teamService
      .getTeams(request)
      .pipe(first())
      .subscribe(
        (data) => {
          this.totalElements = data['totalElements'];
          this.dataSource = new MatTableDataSource(data['content']);
        },
        (error) => {
          console.log(error.error.message);
        }
      );
  }

  challangeTeamAction(team: TeamBase): void {
    this.challangeTeam.emit(team);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.getTeams({
      size: this.paginator.pageSize,
      name: filterValue,
    });
    this.paginator.pageIndex = 0;

    this.filteredValue = filterValue;
  }

  getPage(event: PageEvent) {
    this.getTeams({
      page: event.pageIndex,
      size: event.pageSize,
      name: this.filteredValue,
    });
  }

  show(team: TeamBase) {
    this.showTeam.emit(team);
  }
}
