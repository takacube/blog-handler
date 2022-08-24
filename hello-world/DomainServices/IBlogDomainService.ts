export interface IBlogDomainService {
    exists(url: string): Promise<boolean>
    validUrl(url: string): Promise<boolean>
}