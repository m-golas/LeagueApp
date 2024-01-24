import { Player } from '../_models/player';
import { Team } from '../_models/team';

export const MOCK_TEAMS: Array<Team> = [
  {
    id: 1,
    name: 'Team 1',
    points: 1345,
    rank: 1,
    members: [],
  },
  {
    id: 2,
    name: 'Team 2',
    points: 1245,
    rank: 2,
    members: [],
  },
  {
    id: 3,
    name: 'Team 3',
    points: 1145,
    rank: 3,
    members: [],
  },
  {
    id: 4,
    name: 'Team 4',
    points: 1045,
    rank: 4,
    members: [],
  },
];

export const MOCK_TEAM_MEMBERS: Array<Player> = [
  {
    id: 1,
    fullName: 'Player 1',
    username: 'Player 1',
    email: 'Player 1',
  },
  {
    id: 2,
    fullName: 'Player 2',
    username: 'Player 2',
    email: 'Player 2',
  },
  {
    id: 3,
    fullName: 'Player 3',
    username: 'Player 3',
    email: 'Player 3',
  },
];
