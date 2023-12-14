import { Player } from "./player";
import { Team } from "./team";

export type TeamWithMembers = Team & {
    members: Array<Player>;
    isOwner: boolean
  };