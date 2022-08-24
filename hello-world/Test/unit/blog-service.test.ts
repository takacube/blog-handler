import { ExpectedAttributeValueFilterSensitiveLog } from '@aws-sdk/client-dynamodb';
import { BlogDynamoDB } from '../../Infrastractures/BlogStorage'
import { MockBlogStorage } from '../../Infrastractures/MockBlogStorage'
import { FetchBlog } from '../../ApplicationServices/FetchBlog'
import { FetchBlogList } from '../../ApplicationServices/FetchBlogList'
import {AddBlog } from '../../ApplicationServices/AddBlog'
import { IBlogStorage } from '../../ApplicationServices/IBlogStorage'
import { BlogDomainService } from '../../DomainServices/BlogDomainService'
describe('Application Service', () => {
    test('[成功][URL]fetch blog which exists ', async () => {
        const fetchBlogService = new FetchBlog(new BlogDynamoDB(), new BlogDomainService(new BlogDynamoDB()))
        const res = await fetchBlogService.findBlogByUrl('https://takanao.com')
        console.log(res)
        expect(res['url']['S']).toEqual('https://takanao.com')
        expect(res['comment']['S']).toEqual('LGTM')
        expect(res['genre']['S']).toEqual('frontend')
    })

    test('[成功][URL]fetch blog which exists ', async () => {
        const fetchBlogListService = new FetchBlogList(new BlogDynamoDB(), new BlogDomainService(new BlogDynamoDB()))
        const res = await fetchBlogListService.findBlogByGenre('frontend')
        expect(res[0]['genre']['S']).toEqual('frontend')
    })
    /*
    test('[成功][URL]fetch blog which exists ', async () => {
        const addBlogService = new AddBlog(new BlogDynamoDB(), new BlogDomainService(new BlogDynamoDB()))
        const res = await addBlogService.addBlog('https://test.data.com', 'looks gooood', 'frontend')
        expect(res).toEqual({"Items": []})
    })
    */
});