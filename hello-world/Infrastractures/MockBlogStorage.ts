import { Blog } from '../Domains/Blog'
import { Genre } from '../Domains/Genre'
import { IBlog } from '../Domains/IBlog'
export class MockBlogStorage {
    findByGenre(genre: Genre){
        return []
    }
    findByUrl(url: string) {
        if(url == 'https://takanao.com'){
            return {url: 'https://takanaos.com', comment: 'thanks', genre: 'frontend'}
        }
        return false
    }
}