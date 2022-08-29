import { Genre } from '../../Domains/Genre'
import { FetchBlog } from '../../ApplicationServices/FetchBlog'
import { BlogDynamoDB } from '../../Infrastractures/BlogStorage'
import { BlogDomainService } from '../../DomainServices/BlogDomainService'
import { FetchBlogList } from '../../ApplicationServices/FetchBlogList'
import axios from 'axios'
export const handleRequest = async(msg: any, token: string) => {
    if (isGenre(msg)) {
        const blogBlocks = await getBlogList(msg)
        console.log(JSON.stringify(blogBlocks))

        const msgToSend = {
            replyToken: `${token}`,
            messages: blogBlocks
        }
        await axios.post('https://api.line.me/v2/bot/message/reply', msgToSend, { headers: { 'Authorization': 'Bearer 6Nnh0ly+4gASbqTLoiQSY2EXph1eq32OvExOX+CQoSx7Hf8naZDdypYNEKWkpUgjqULBfDGT8JzQZno0MFSR1q2VRuugqZAPKflZGjxnqETU6ZLFrf544jZ8XcphIkbKrsSUzr1LdcLerso0KK+3BAdB04t89/1O/w1cDnyilFU=', 'Content-Type': 'application/json' } })
    }
}

const isGenre = (msg: any) => {
    if(
        msg == 'frontend'
        || msg == 'backend'
        || msg == 'infra'
        || msg == 'design'
        || 'software'
    ){
        return true
    }
    return false
}



/*
export const getBlog = async() => {
    const fetchBlogService = new FetchBlog(new BlogDynamoDB(), new BlogDomainService(new BlogDynamoDB()))
    const res = await fetchBlogService.findBlogByUrl('https://takanao.com')
}
*/

export const getBlogList = async(genre: Genre) => {
    const fetchBlogListService = new FetchBlogList(new BlogDynamoDB(), new BlogDomainService(new BlogDynamoDB()))
    const res = await fetchBlogListService.findBlogByGenre(genre)
    if (res[0]['url']['S'].length == 0){
        return [{
            type:'text',
            text: 'frontend\n backend\n infra\n design\n software\nのどれかから入力してください'
        }]
    }
    let message = []
    for (const item of res){
        var msgBlock ={
            type:'text',
            text: ''
        }
        msgBlock.text = `${item['url']['S']}: ${item['comment']['S']}`
        message.push(msgBlock)
    }
    console.log(res)
    return message
}