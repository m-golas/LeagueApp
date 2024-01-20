import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Challange } from 'src/app/core/_models/challange';
@Component({
  selector: 'app-matches-history-list',
  templateUrl: './matches-history-list.component.html',
  styleUrls: ['./matches-history-list.component.scss']
})
export class MatchesHistoryListComponent {
  @Input() matches: Array<Challange> | null = [];
  @Output() showChallange = new EventEmitter<Challange>();

  dataSource: MatTableDataSource<Challange>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    this.dataSource = new MatTableDataSource(this.matches || undefined);
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.matches || undefined);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: Array<String> = ['name', 'date', 'action'];

  show(challange: Challange) {
    this.showChallange.emit(challange);
  }
}
