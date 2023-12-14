import { Challange } from '../_models/challange';
import { MOCK_TEAMS } from './team';

export const MOCK_CHALLANGFES: Array<Challange> = [
  {
    id: 'test_challange',
    challanger: MOCK_TEAMS[1],
    challangedTeam: MOCK_TEAMS[0],
    time: 'Thu Dec 28 2023 14:00:00 GMT+0100',
  },
  {
    id: 'test_challange',
    challanger: MOCK_TEAMS[2],
    challangedTeam: MOCK_TEAMS[0],
    time: 'Thu Dec 28 2023 15:00:00 GMT+0100',
  },
  {
    id: 'test_challange',
    challanger: MOCK_TEAMS[3],
    challangedTeam: MOCK_TEAMS[0],
    time: 'Thu Dec 28 2023 16:00:00 GMT+0100',
  },
];
