export class MockBlogDomainService {
    exists(url: string){
        return false
    }
    validUrl(url: string){
        return true
    }
}