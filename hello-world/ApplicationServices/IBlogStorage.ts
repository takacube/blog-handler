import { IBlog } from "../Domains/IBlog"
import { Genre } from '../Domains/Genre'
type blogType = {
    url: string
    comment: string
    genre: Genre
}
export interface IBlogStorage {
    findByGenre(genre: Genre): IBlog[] | any
    findByUrl(url: string):blogType | boolean | any
}