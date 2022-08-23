# blog-tracking-app

デプロイの前にはビルドを行ってから以下のデプロイコマンドを実行することでAWSにリソースを作ることができる
To build and deploy your application for the first time, run the following in your shell:

```bash
sam build
sam deploy --guided
```

## テスト how to emurate function on local

1. 関数を直接呼び出す

Test a single function by invoking it directly with a test event. An event is a JSON document that represents the input that the function receives from the event source. Test events are included in the `events` folder in this project.

Run functions locally and invoke them with the `sam local invoke` command.

```bash
blog-tracking-app$ sam local invoke HelloWorldFunction --event events/event.json
```

2. ポート解放による関数の呼び出し

SAM CLIはアプリケーションのAPIをローカル3000番ポートにエミュレートすることができる
The SAM CLI can also emulate your application's API. Use the `sam local start-api` to run the API locally on port 3000.

```bash
blog-tracking-app$ sam local start-api
blog-tracking-app$ curl http://localhost:3000/
```

The SAM CLI reads the application template to determine the API's routes and the functions that they invoke. The `Events` property on each function's definition includes the route and method for each path.

```yaml
      Events:
        HelloWorld:
          Type: Api
          Properties:
            Path: /hello
            Method: get
```

## 単体テスト Unit Test

```bash
blog-tracking-app$ cd hello-world
hello-world$ npm install
hello-world$ npm run test
```


開発環境セットアップ For Developer

開発環境：M1 Mac

Prerequisit
- AWS CLI
- AWS SAM CLI
- Docker Desktop
- npm

1. DBの立ち上げ

```bash
docker compose up
```

2. テーブル作成

```bash
aws dynamodb create-table --cli-input-json file://json/blog.json --endpoint-url=http://localhost:4566

##テーブルの一覧
aws dynamodb list-tables --endpoint-url=http://localhost:4566
```

3. モックアイテムの挿入

```bash

aws dynamodb put-item --table-name blog --item '{ "url": { "S": "https://takanao.com" }, "comment": { "S": "LGTM" }, "genre": { "S": "frontend" } }' --endpoint-url=http://localhost:4566

aws dynamodb put-item --table-name blog --item '{ "url": { "S": "https://quita.com" }, "comment": { "S": "AWSOME" }, "genre": { "S": "backend" } }' --endpoint-url=http://localhost:4566
```