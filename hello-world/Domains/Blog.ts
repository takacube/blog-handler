import { IBlog } from './IBlog'
import { IBlogDomainService } from '../DomainServices/IBlogDomainService'
import { Genre } from './Genre'

export class Blog implements IBlog {
    url: string = ''
    comment: string = ''
    genre: Genre = ''
    BlogDomainService: IBlogDomainService
    constructor(BlogDomainService: IBlogDomainService) {
        this.BlogDomainService = BlogDomainService
    }

    createBlog(url: string, comment: string, genre: Genre) {
        if (
            !this.BlogDomainService.exists(url) &&
            this.BlogDomainService.validUrl(url)
        ) {
            this.url = url
            this.comment = comment
            this.genre = genre
            return this
        }
        return this
    }
    fetch(url: string, comment: string, genre: Genre) {
        this.url = url
        this.comment = comment
        this.genre = genre
        return this
    }
}
