import z from "zod"
import { PlaylistModel } from "../../models/Playlists"

export interface GetPlaylistInputDTO {
    token: string
}

export type GetPlaylistOutputDTO = PlaylistModel[]

export const GetPlaylistSchema = z.object({
    token: z.string().min(1)
})