import { Player } from '../_models/player';
import { Team } from '../_models/team';

export const MOCK_TEAMS: Array<Team> = [
  {
    id: 'TEST_TEAM1',
    name: 'Team 1',
    points: 1345,
    position: 1,
    ownerID: 'TEST_PLAYER_1',
  },
  {
    id: 'TEST_TEAM2',
    name: 'Team 2',
    points: 1245,
    position: 2,

    ownerID: 'owner',
  },
  {
    id: 'TEST_TEAM3',
    name: 'Team 3',
    points: 1145,
    position: 3,
    ownerID: 'owner',
  },
  {
    id: 'TEST_TEAM4',
    name: 'Team 4',
    points: 1045,
    position: 4,
    ownerID: 'owner',
  },
];

export const MOCK_TEAM_MEMBERS: Array<Player> = [
  {
    id: 'TEST_PLAYER_1',
    name: 'Player 1',
    team: {
      id: 'TEST_TEAM1',
      name: 'Team 1',
      position: 1,
      points: 1345,
      ownerID: 'TEST_PLAYER_1',
    },
  },
  {
    id: 'TEST_PLAYER_2',
    name: 'Player 2',
    team: {
      id: 'TEST_TEAM2',
      name: 'Team 2',
      position: 2,

      points: 1245,
      ownerID: 'TEST_PLAYER_2',
    },
  },
  {
    id: 'TEST_PLAYER_3',
    name: 'Player 3',
    team: {
      id: 'TEST_TEAM3',
      name: 'Team 3',
      points: 1145,
      position: 3,
      ownerID: 'TEST_PLAYER_3',
    },
  },
];
