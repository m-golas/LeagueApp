import { Role } from './role';
import { TeamBase } from './team-base';

export type Members = {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  role: Role;
};

export type Team = TeamBase & {
  members: Array<Members>;
};
