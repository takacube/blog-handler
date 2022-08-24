import { IBlogStorage } from "../ApplicationServices/IBlogStorage"
export class BlogDomainService {
    blogStorage: IBlogStorage
    constructor(blogStorage: IBlogStorage){
        this.blogStorage = blogStorage
    }
    async exists(url: string){
        if((await this.blogStorage.findByUrl(url)).url.S == url ){
            return true
        }
        return false
    }
    async validUrl(url: string){
        if(url.startsWith('http') || url.startsWith('https')){
            return true
        }
        return false
    }
}