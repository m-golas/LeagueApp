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
  selector: 'app-pending-challanges-list',
  templateUrl: './pending-challanges-list.component.html',
  styleUrls: ['./pending-challanges-list.component.scss'],
})
export class PendingChallangesListComponent {
  @Input() pendingChallanges: Array<Challange> | null = [];

  @Output() acceptChallange = new EventEmitter<Challange['id']>();
  @Output() declineChallange = new EventEmitter<Challange['id']>();
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
      .getChallanges('REQUESTED', request['page'], request['size'])
      .pipe(first())
      .subscribe(
        (data) => {
          if (data) {
            this.totalElements = data['totalElements'];
            this.dataSource = new MatTableDataSource(data['content']);
          } else {
            this.totalElements = 0;
            this.dataSource = new MatTableDataSource([] as ChallangeFull[]);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getPage(event: PageEvent) {
    this.getActiveMatches({
      page: event.pageIndex,
      size: event.pageSize,
    });
  }

  accept(id: Challange['id']) {
    this.acceptChallange.emit(id);
  }

  decline(id: Challange['id']) {
    this.declineChallange.emit(id);
  }

  show(challange: Challange) {
    this.showChallange.emit(challange);
  }
}
