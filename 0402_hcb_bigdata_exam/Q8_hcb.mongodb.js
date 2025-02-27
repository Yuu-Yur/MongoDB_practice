// 8. users 컬렉션에서 age 필드에 단일 인덱스 생성 및 조회하는 쿼리를 작성하세요.
db.users_Q7.createIndex({age: 1 })
db.users_Q7.getIndexes()