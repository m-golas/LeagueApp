import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription, first, tap } from 'rxjs';
import { Player } from 'src/app/core/_models/player';
import { PlayerService } from 'src/app/core/_services/player.service';
import { SportContextService } from 'src/app/core/_services/sport-context.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss'],
})
export class PlayersListComponent {
  filteredValue = '';
  totalElements: number = 0;
  displayedColumns: Array<String> = ['id', 'name'];

  subs: Subscription;
  dataSource: MatTableDataSource<Player>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private context: SportContextService,
    private player: PlayerService
  ) {
    this.dataSource = new MatTableDataSource([] as Player[]);
    this.subs = this.context
      .getSportContextObservable()
      .pipe(
        tap((_) => {
          this.getPlayers({ page: 0, size: 10 });
          if(this.paginator) this.paginator.pageIndex = 0;
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  private getPlayers(request: any) {
    this.player
      .getPlayers(request)
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.getPlayers({
      size: this.paginator.pageSize,
      name: filterValue,
    });
    this.paginator.pageIndex = 0;

    this.filteredValue = filterValue;
  }

  getPage(event: PageEvent) {
    this.getPlayers({
      page: event.pageIndex,
      size: event.pageSize,
      name: this.filteredValue,
    });
  }
}
