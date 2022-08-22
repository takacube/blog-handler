import {
    DynamoDBClient,
    WriteRequest,
    BatchWriteItemCommand,
} from '@aws-sdk/client-dynamodb'

import { Genre } from '../Domains/Genre'
//import { IBlog } from '../Domains/IBlog'
export class BlogDynamoDB {
    dynamoDBClient: any
    params = {
        TableName: 'Blog',
    }
    constructor(){
        this.dynamoDBClient = new DynamoDBClient({})
    }
    findByGenre(genre: Genre){

    }
    findByUrl(url: string){
        return {url: 'https://takanaos.com', comment: 'thanks', genre: 'frontend'}
    }
}