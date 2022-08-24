import { Blog } from "../Domains/Blog";
import { Genre } from "../Domains/Genre";
import { IBlogDomainService } from "../DomainServices/IBlogDomainService";
import { IBlogStorage } from "./IBlogStorage";

export class AddBlog {
    blogStorage: IBlogStorage
    blogDomainService: IBlogDomainService
    constructor(blogStorage: IBlogStorage, blogDomainService: IBlogDomainService) {
        this.blogStorage = blogStorage
        this.blogDomainService = blogDomainService
    }
    async addBlog(url: string, comment: string, genre: Genre){
        const blog = new Blog(this.blogDomainService).createBlog(url, comment, genre)
        const res = await this.blogStorage
        .createBlog(
            (await blog).url,
            (await blog).comment,
            (await blog).genre
        )
        return (res)
    }
}