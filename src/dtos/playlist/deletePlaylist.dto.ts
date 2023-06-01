import z from "zod"

export interface DeletePlaylistIpuntDTO {
    token: string,
    idToDelete: string
}

export type DeletePlaylistOutputDTO = undefined

export const deletePlaylistSchema = z.object({
    token: z.string().min(1),
    idToDelete: z.string().min(1)
})