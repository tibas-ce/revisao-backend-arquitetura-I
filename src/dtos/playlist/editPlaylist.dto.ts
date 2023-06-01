import z from "zod"

export interface EditPlaylistIpuntDTO {
    name: string,
    token: string,
    idToEdit: string
}

export type EditPlaylistOutputDTO = undefined

export const EditPlaylistSchema = z.object({
    name: z.string().min(1),
    token: z.string().min(1),
    idToEdit: z.string().min(1)
})