import { IBlogStorage } from "../ApplicationServices/IBlogStorage"
export class BlogDomainService {
    blogStorage: IBlogStorage
    constructor(blogStorage: IBlogStorage){
        this.blogStorage = blogStorage
    }
    exists(url: string){
        if(this.blogStorage.findByUrl(url)){
            return true
        }
        return false
    }
    validUrl(url: string){
        if(url.startsWith('http') || url.startsWith('https')){
            return true
        }
        return false
    }
}