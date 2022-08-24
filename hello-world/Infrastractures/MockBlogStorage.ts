import { Blog } from '../Domains/Blog'
import { Genre } from '../Domains/Genre'
import { IBlog } from '../Domains/IBlog'
import { IResponse } from './IResponse'
export class MockBlogStorage {
    findByGenre(genre: Genre){
        return [{
            genre: {S: 'frontend'},
            url: {S: 'https://takanao.com'},
            comment: {S: 'comment--'},
            error: {S: 'a'}
        }]
    }
    findByUrl(url: string) {
        if(url == 'https://takanao.com'){
            return {
                genre: {S: 'frontend'},
                url: {S: 'https://takanao.com'},
                comment: {S: 'thanks'},
                error: {S: ''}
            }
        }
        return {
            genre: {S: ''},
            url: {S: ''},
            comment: {S: ''},
            error: {S: 'エラーメッセージ'}
        }
    }
}