import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription, first, tap } from 'rxjs';
import { Challange, ChallangeFull } from 'src/app/core/_models/challange';
import { ChallangeService } from 'src/app/core/_services/challange.service';
import { SportContextService } from 'src/app/core/_services/sport-context.service';
@Component({
  selector: 'app-matches-history-list',
  templateUrl: './matches-history-list.component.html',
  styleUrls: ['./matches-history-list.component.scss']
})
export class MatchesHistoryListComponent {
  @Output() showChallange = new EventEmitter<Challange>();
  totalElements: number = 0;
  displayedColumns: Array<String> = ['name', 'date', 'action'];

  subs: Subscription;
  dataSource: MatTableDataSource<ChallangeFull>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private context: SportContextService,
    private challange: ChallangeService
  ) {
    this.dataSource = new MatTableDataSource([] as ChallangeFull[]);
    this.subs = this.context
      .getSportContextObservable()
      .pipe(
        tap((_) => {
          this.getActiveMatches({ page: 0, size: 10 });
          if (this.paginator) this.paginator.pageIndex = 0;
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  private getActiveMatches(request: any) {
    this.challange
      .getChallanges('FINISHED', request['page'], request['size'])
      .pipe(first())
      .subscribe(
        (data) => {
          if (data) {
            this.totalElements = data['totalElements'];
            this.dataSource = new MatTableDataSource(data['content']);
          console.log('Data', data['content'])

          }
        },
        (error) => {
          console.log(error.error.message);
        }
      );
  }

  getPage(event: PageEvent) {
    this.getActiveMatches({
      page: event.pageIndex,
      size: event.pageSize,
    });
  }


  show(challange: Challange) {
    this.showChallange.emit(challange);
  }
}
