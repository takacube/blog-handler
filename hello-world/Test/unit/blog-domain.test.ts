import { url } from 'inspector';
import { stringify } from 'querystring';
import { Blog } from '../../Domains/Blog';
import { MockBlogDomainService } from '../../DomainServices/MockDomainService'
import { MockBlogStorage } from '../../Infrastractures/MockBlogStorage'
import { BlogDomainService } from '../../DomainServices/BlogDomainService'
import { IResponse } from '../../Infrastractures/IResponse'
describe('Domain', () => {
    test('create blog', async() => {
        const blog = new Blog(new MockBlogDomainService());
        await blog.createBlog('https://qiita.com', 'good', 'frontend')
        expect(blog.url).toEqual('https://qiita.com');
        expect(blog.comment).toEqual('good');
        expect(blog.genre).toEqual('frontend');
    });
    test('', async () => {
        const blog = new Blog(new MockBlogDomainService());
        const sample = blog.createBlog('https://qiita.com', 'good', 'frontend')
        expect((await sample).genre).toEqual('frontend')
    })
});

describe('DomainService', () => {
    test('[通過]URL Validation', async () => {
        const blogStorage = new MockBlogStorage()
        const domainService = new BlogDomainService(blogStorage)
        const urlHttps = 'https://takanao.com'
        const urlHttp = 'http://takanao.com'
        expect(await domainService.validUrl(urlHttps)).toEqual(true)
        expect(await domainService.validUrl(urlHttp)).toEqual(true)
    })
    test('[不正]URL Validation', async() => {
        const blogStorage = new MockBlogStorage()
        const domainService = new BlogDomainService(blogStorage)
        const invalidUrl = 'httt:invalid.com'
        expect(await domainService.validUrl(invalidUrl)).toEqual(false)
    })

    test('[通過] Duplication Validation DBに登録前URL', async() => {
        const blogStorage = new MockBlogStorage()
        const domainService = new BlogDomainService(blogStorage)
        const url = 'https://NotHasToBeExist'
        expect(await domainService.exists(url)).toEqual(false)
    })
    test('[不正] Duplication Validation すでに登録後のURL', async() => {
        const blogStorage = new MockBlogStorage()
        const domainService = new BlogDomainService(blogStorage)
        const url = 'https://takanao.com'
        expect(await domainService.exists(url)).toEqual(true)
    })
})
