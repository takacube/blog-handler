import { IBlog } from "../Domains/IBlog"
import { Genre } from '../Domains/Genre'
import { IResponse } from '../Infrastractures/IResponse'
type blogType = {
    url: string
    comment: string
    genre: Genre
}
export interface IBlogStorage {
    findByGenre(genre: Genre): Promise<IResponse[]> | Promise<any[]>
    findByUrl(url: string): Promise<IResponse> | IResponse
    createBlog(url: string, comment: string, genre: Genre): any
}