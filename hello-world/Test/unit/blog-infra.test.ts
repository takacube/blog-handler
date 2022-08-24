import { ExpectedAttributeValueFilterSensitiveLog } from '@aws-sdk/client-dynamodb';
import { BlogDynamoDB } from '../../Infrastractures/BlogStorage'
describe('Infrastracture', () => {
    test('[成功][URL]fetch blog which exists ', async () => {
        const dynamoClient = new BlogDynamoDB()
        //expect(dynamoClient.createBlog("https://", "name", "frontend")).toEqual('a')
        const res = await dynamoClient.findByUrl('https://takanao.com')
        console.log(res)
        expect(res['url']['S']).toEqual('https://takanao.com')
    })
    test('[失敗][URL]fetch blog which does not exists', async() => {
        const dynamoClient = new BlogDynamoDB()
        const res = await dynamoClient.findByUrl('https://xxxxx.com')
        expect(res['error']['S']).toEqual('一致するデータが見つかりませんでした')
    })
    test('[成功][GENRE]fetch blog which exists', async() => {
        const dynamoClient = new BlogDynamoDB()
        const res = await dynamoClient.findByGenre('frontend')
        expect(res[0]['genre']['S']).toEqual('frontend')
    })
});