import { Team } from "./team";
type ChallangeBaseTypes =  "PENDING" | "ACCEPTED" | "AWAITING_SCORE"

type ChallangeBase = {
    id: string;
    type: ChallangeBaseTypes
    challanger: Team;
    challangedTeam: Team;
    time: string;
    comment?: string
}

export type Challange = ChallangeResolved | ChallangeBase

export type ChallangeTypes = Challange["type"]

 type Score = {
    winner: Team
    score: string
}

type ChallangeResolved = Omit<ChallangeBase, "type"> & {
    type: "RESOLVED"
    score: Score
}