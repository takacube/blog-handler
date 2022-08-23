TABLE='blog'

aws dynamodb put-item --table-name $TABLE --item '{ "url": { "S": "https://takanao.com" }, "comment": { "S": "LGTM" }, "genre": { "S": "frontend" } }' --endpoint-url=http://localhost:4566

aws dynamodb put-item --table-name $TABLE --item '{ "url": { "S": "https://quita.com" }, "comment": { "S": "AWSOME" }, "genre": { "S": "backend" } }' --endpoint-url=http://localhost:4566

aws dynamodb scan --table-name $TABLE --endpoint-url=http://localhost:4566