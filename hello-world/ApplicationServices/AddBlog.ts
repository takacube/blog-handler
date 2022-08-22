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
    addBlog(url: string, comment: string, genre: Genre){
        const blog = new Blog(this.blogDomainService).createBlog(url, comment, genre)
    }
}