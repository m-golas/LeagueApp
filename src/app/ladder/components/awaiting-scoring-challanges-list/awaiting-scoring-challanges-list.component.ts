import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Challange } from 'src/app/core/_models/challange';

@Component({
  selector: 'app-awaiting-scoring-challanges-list',
  templateUrl: './awaiting-scoring-challanges-list.component.html',
  styleUrls: ['./awaiting-scoring-challanges-list.component.scss']
})
export class AwaitingScoringChallangesListComponent {
  @Input() challanges: Array<Challange> | null = []; 
  @Output() resolveChallange = new EventEmitter<Challange>()
  @Output() showChallange = new EventEmitter<Challange>()

  dataSource: MatTableDataSource<Challange>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    this.dataSource = new MatTableDataSource(this.challanges || undefined);
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.challanges || undefined);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: Array<String> = ['name', 'date', 'action'];

  show(challange: Challange) {
    this.showChallange.emit(challange)
  }

  resolve(challange: Challange) {
    this.resolveChallange.emit(challange)
  }
}
