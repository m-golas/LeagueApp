import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Challange } from 'src/app/core/_models/challange';

@Component({
  selector: 'app-pending-challanges-list',
  templateUrl: './pending-challanges-list.component.html',
  styleUrls: ['./pending-challanges-list.component.scss']
})
export class PendingChallangesListComponent {
  @Input() pendingChallanges: Array<Challange> | null = [];

  @Output() acceptChallange = new EventEmitter<Challange["id"]>();
  @Output() declineChallange = new EventEmitter<Challange["id"]>();
  @Output() showChallange = new EventEmitter<Challange>();

  dataSource: MatTableDataSource<Challange>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    this.dataSource = new MatTableDataSource(this.pendingChallanges || undefined);
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.pendingChallanges || undefined);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: Array<String> = ['name', 'date', 'action'];

  accept(id: Challange["id"]) {
    this.acceptChallange.emit(id);
  }

  decline(id: Challange["id"]) {
    this.declineChallange.emit(id);
  }

  show(challange: Challange) {
    this.showChallange.emit(challange)
  }
}
