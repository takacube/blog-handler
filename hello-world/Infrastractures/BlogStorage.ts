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
            endpoint: 'http://localhost:4566',
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
                return res.Items[0]
            }
            return this.defaultRes
        } catch(err){
            return this.defaultRes.error.S = `エラーメッセージ: ${err}`
        }
    }

    createBlog(url: string, comment: string, genre: Genre){
        try {
            //const statement = 'SELECT * FROM blog'
            //const res = this.dbclient.executeStatement({Statement: statement})
            return 'res'
        } catch (err) {
            const res = err
            return res
        }
    }
}