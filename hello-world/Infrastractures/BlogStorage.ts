import { IResponse } from './IResponse'
import DynamoDB from 'aws-sdk/clients/dynamodb'


import { Genre } from '../Domains/Genre'
//import { IBlog } from '../Domains/IBlog'
export class BlogDynamoDB {
    dbclient: any
    ddb: DynamoDB
    defaultRes: IResponse
    constructor(){
        //this.params
        this.defaultRes = {
            genre: { S: '' },
            url: { S: '' },
            comment: { S: '' },
            error: { S: `一致するデータが見つかりませんでした`}
        }

        this.ddb = new DynamoDB({
            //endpoint: 'http://localhost:4566',
            region: 'ap-northeast-1'
        })
    }

    async findByGenre(genre: Genre){
        try {
            const res = await this.ddb
            .executeStatement({
            Statement: `
                SELECT * From blog where genre = '${genre}'
            `,
            })
            .promise()
            if (res.Items && res.Items.length >= 1) {
                return res.Items
            }
            return [this.defaultRes]
        } catch (err) {
            this.defaultRes.error.S = `エラーメッセージ: ${err}`
            return [this.defaultRes]
        }
    }
    async findByUrl(url: string){
        try{
            const res = await this.ddb
            .executeStatement({
            Statement: `
                SELECT * From blog where url = '${url}'
            `,
            })
            .promise()
            if (res.Items && res.Items.length == 1) {
                console.log(`${res.Items[0]['url']['S']}, ${res.Items[0]['comment']['S']},${res.Items[0]['genre']['S']} `)
                this.defaultRes.url.S = `${res.Items[0]['url']['S']}`
                this.defaultRes.comment.S = `${res.Items[0]['comment']['S']}`
                this.defaultRes.genre.S = `${res.Items[0]['genre']['S']}`
                return this.defaultRes
            }

            return this.defaultRes
        } catch(err){
            this.defaultRes.error.S = `エラーメッセージ: ${err}`
            return this.defaultRes
        }
    }

    async createBlog(url: string, comment: string, genre: Genre){
        try{
            const res = await this.ddb
            .executeStatement({
            Statement: `
            INSERT INTO blog VALUE {'url': '${url}', 'comment': '${comment}', 'genre': '${genre}'}
            `,
            })
            .promise()
            return res
        } catch(err){
            return this.defaultRes.error.S = `エラーメッセージ: ${err}`
        }
    }
}