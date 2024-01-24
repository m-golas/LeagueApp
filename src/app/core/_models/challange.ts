import { SportType } from './sport-type';
import { Team } from './team';
type ChallangeBaseTypes = 'REQUESTED' | 'REJECTED' | 'IN_PROGRESS';

type ChallangeBase = {
  id: number;
  name: string | null;
  status: ChallangeBaseTypes;
  challenger: number;
  challenged: number;
  matchTime: string;
  result?: Score | null;
};

export type ChallangeFull = {
  id: 1;
  location: string;
  comment: string;
  status: ChallangeBaseTypes;
  matchTime: string;
  challengedAt: string;
  type: SportType;
  challenger: Team;
  challenged: Team;
  result: Score | null;
};

export type Challange = ChallangeResolved | ChallangeBase;

export type ChallangeTypes = Challange['status'];

type Score = {
  status: string
  challengedScore: number;
  challengerScore: number;
};

type ChallangeResolved = Omit<ChallangeBase, 'status'> & {
  status: 'FINISHED';
  score: Score;
};
