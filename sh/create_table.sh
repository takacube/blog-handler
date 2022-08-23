#テーブル作成
aws dynamodb create-table --cli-input-json file://json/blog.json --endpoint-url=http://localhost:4566
#リスト表示
aws dynamodb list-tables --endpoint-url=http://localhost:4566
