import { IBlog } from "../Domains/IBlog"
import { Genre } from '../Domains/Genre'
import { IResponse } from '../Infrastractures/IResponse'
type blogType = {
    url: string
    comment: string
    genre: Genre
}
export interface IBlogStorage {
    findByGenre(genre: Genre): IResponse[]
    findByUrl(url: string): IResponse
}