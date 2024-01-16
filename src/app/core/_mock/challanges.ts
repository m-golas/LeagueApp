import { Challange } from '../_models/challange';
import { MOCK_TEAMS } from './team';

export const MOCK_CHALLANGFES: Array<Challange> = [
  {
    id: 'test_challange',
    challanger: MOCK_TEAMS[1],
    challangedTeam: MOCK_TEAMS[0],
    time: 'Thu Dec 28 2023 14:00:00 GMT+0100',
    type: "PENDING",
  },
  {
    id: 'test_challange2',
    challanger: MOCK_TEAMS[2],
    challangedTeam: MOCK_TEAMS[0],
    time: 'Thu Dec 28 2023 15:00:00 GMT+0100',
    type: "PENDING",
  },
  {
    id: 'test_challange3',
    challanger: MOCK_TEAMS[3],
    challangedTeam: MOCK_TEAMS[0],
    time: 'Thu Dec 28 2023 16:00:00 GMT+0100',
    type: "PENDING",
  },
  {
    id: 'test_challange3',
    challanger: MOCK_TEAMS[1],
    challangedTeam: MOCK_TEAMS[0],
    time: 'Thu Dec 28 2023 17:00:00 GMT+0100',
    type: "PENDING",
  },
  {
    id: 'test_challange4',
    challanger: MOCK_TEAMS[3],
    challangedTeam: MOCK_TEAMS[0],
    time: 'Thu Dec 28 2023 17:00:00 GMT+0100',
    type: 'ACCEPTED',
  },
  {
    id: 'test_challange4',
    challanger: MOCK_TEAMS[3],
    challangedTeam: MOCK_TEAMS[0],
    time: 'Thu Dec 11 2023 17:00:00 GMT+0100',
    type: 'AWAITING_SCORE',
  },
  {
    id: 'test_challange4',
    type: 'RESOLVED',
    score: {
      winner: MOCK_TEAMS[0],
      score: "1-2"
    },
    challanger: MOCK_TEAMS[3],
    challangedTeam: MOCK_TEAMS[0],
    time: 'Thu Dec 12 2023 19:00:00 GMT+0100',
  },
];
