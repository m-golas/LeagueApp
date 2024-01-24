import { Role } from "./role";

interface Team {
  id: number;
  name: string;
  type: string;
  owner: Role
}

export interface Profile {
  id: number;
  name: string;
  lastname: string;
  username: string;
  email: string;
  teams: Array<Team>;
}
