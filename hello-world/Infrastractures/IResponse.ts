export interface IResponse {
        genre: {S: Promise<string> | string},
        url: {S: Promise<string> | string},
        comment: {S: Promise<string> | string}
        error: {S: Promise<string> | string}
}