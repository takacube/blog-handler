/*
import { FetchBlog } from '../../ApplicationServices/FetchBlog'
import { BlogDynamoDB } from '../../Infrastractures/BlogStorage'
import { BlogDomainService } from '../../DomainServices/BlogDomainService'
import{ FetchBlogList } from '../../ApplicationServices/FetchBlogList'
import { Genre } from '../../Domains/Genre'
export const getBlog = async() => {
    const fetchBlogService = new FetchBlog(new BlogDynamoDB(), new BlogDomainService(new BlogDynamoDB()))
    const res = await fetchBlogService.findBlogByUrl('https://takanao.com')
}

export const getBlogList = async(genre: Genre) => {
    const fetchBlogListService = new FetchBlogList(new BlogDynamoDB(), new BlogDomainService(new BlogDynamoDB()))
    const res = await fetchBlogListService.findBlogByGenre(genre)
    console.log(`ジャンル:::${genre}`)
    console.log(res)
    let message = ''
    for (const item of res){
        message += `${item['url']['S']}:${item['comment']['S']}`
    }
    return message
}
*/