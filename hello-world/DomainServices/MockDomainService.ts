export class MockBlogDomainService {
    async exists(url: string){
        return false
    }
    async validUrl(url: string){
        return true
    }
}