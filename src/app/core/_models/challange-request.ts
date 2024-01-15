import { Team } from "./team";

export interface ChallangeRequest {
    team: Team
    time: string
    comment: string
}