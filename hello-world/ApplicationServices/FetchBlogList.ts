import { Genre } from "../Domains/Genre";
import { IBlogDomainService } from "../DomainServices/IBlogDomainService";
import { IBlogStorage } from "./IBlogStorage";

//URLによるFETCH
export class FetchBlogList {
    blogStorage: IBlogStorage
    blogDomainService: IBlogDomainService
    constructor(blogStorage: IBlogStorage, blogDomainService: IBlogDomainService) {
        this.blogStorage = blogStorage
        this.blogDomainService = blogDomainService
    }
    async findBlogByGenre(genre: Genre){
        const res = await this.blogStorage.findByGenre(genre)
        return res
    }
}