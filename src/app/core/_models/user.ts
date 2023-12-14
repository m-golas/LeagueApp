import { Player } from "./player"

export type User = Player & {
    token?: string
}