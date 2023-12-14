import { Team } from "./team";

export interface Challange {
    id: string;
    challanger: Team;
    challangedTeam: Team;
    time: string;
}