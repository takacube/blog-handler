import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { getBlogList } from './Presentaion/CLI/GetBlog';
import axios from 'axios';
import { handleRequest } from './Presentaion/LINE/controller'
/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    let response: APIGatewayProxyResult;
    try {
        if(event['body']){
            const httpBody = JSON.parse(event['body'])
            const replyToken = httpBody['events'][0]["replyToken"]
            const receivedMsg = httpBody['events'][0]["message"]["text"]
            await handleRequest(receivedMsg, replyToken)
        }
        response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'successfully end',
            }),
        };
    } catch (err) {
        console.log(err);
            response = {
                statusCode: 500,
                body: JSON.stringify({
                    message: `some error happened${err}`,
                }),
            }
    }
    return response;
};
