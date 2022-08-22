export interface IBlogDomainService {
    exists(url: string): boolean
    validUrl(url: string): boolean
}