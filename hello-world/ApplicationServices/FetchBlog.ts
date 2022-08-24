import { Blog } from "../Domains/Blog";
import { Genre } from "../Domains/Genre";
import { IBlogDomainService } from "../DomainServices/IBlogDomainService";
import { IBlogStorage } from "./IBlogStorage";

//URLによるFETCH
export class FetchBlog {
    blogStorage: IBlogStorage
    blogDomainService: IBlogDomainService
    constructor(blogStorage: IBlogStorage, blogDomainService: IBlogDomainService) {
        this.blogStorage = blogStorage
        this.blogDomainService = blogDomainService
    }
    async findBlogByUrl(url: string){
        const res = await this.blogStorage.findByUrl(url)
        return res
    }
}