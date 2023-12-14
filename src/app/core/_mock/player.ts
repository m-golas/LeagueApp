import { Player } from "../_models/player";
import { MOCK_TEAMS } from "./team";

export const MOCK_PLAYERS: Array<Player> = [
    {
      id: 'TEST_PLAYER_1',
      name: 'Player 1',
      team: MOCK_TEAMS[0],
    },
    {
      id: 'TEST_PLAYER_2',
      name: 'Player 2',
      team: MOCK_TEAMS[1],
    },
    {
      id: 'TEST_PLAYER_3',
      name: 'Player 3',
      team: MOCK_TEAMS[3],
    },
  ];