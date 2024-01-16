import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Team } from 'src/app/core/_models/team';
import { TeamWithMembers } from 'src/app/core/_models/team-with-members';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss'],
})
export class TeamsListComponent {
  @Input() teams: Array<Team> = [];
  @Input() playerTeam: TeamWithMembers | null | undefined;
  @Output() challangeTeam = new EventEmitter<Team>();

  displayedColumns: Array<String> = ['id', 'name', 'points', 'action'];


  dataSource: MatTableDataSource<Team>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor() {
    this.dataSource = new MatTableDataSource(this.teams);
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.teams);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  challangeTeamAction(team: Team): void {
    this.challangeTeam.emit(team);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log('filter', filterValue);
  }
}
