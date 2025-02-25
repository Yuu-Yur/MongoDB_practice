// 더미 데이터 만들기
db.users.insertMany(
    [
        {
            "name": "Kim",
            "age": 28,
            "city": "Seoul",
            "gender": "남성",
            "email": "kim@gmail.com",
            "tags": ["sports", "music"],
            "orders": [1001, 1002, 1003, 1004, 1005],
            "reviews": ["Good", "Excellent", "Superb"],
            "score": 85,
            "status": "active"
        },
        {
            "name": "Lee",
            "age": 22,
            "city": "Busan",
            "gender": "여성",
            "email": "lee@yahoo.com",
            "tags": ["travel", "food"],
            "orders": [2001, 2002, 2003],
            "reviews": ["Average", "Nice"],
            "score": 75,
            "status": "inactive",
            "location": "Korea"
        },
        {
            "name": "John Park",
            "age": 35,
            "city": "Seoul",
            "gender": "남성",
            "email": "john.park@gmail.com",
            "tags": ["music", "sports", "travel"],
            "orders": [3001, 3002, 3003, 3004],
            "reviews": ["Amazing", "Loved it", "Great service"],
            "score": 90,
            "status": "active"
        },
        {
            "name": "David",
            "age": 40,
            "city": "Incheon",
            "gender": "남성",
            "email": "david@hotmail.com",
            "tags": ["reading", "travel"],
            "orders": [4001, 4002],
            "reviews": ["Okay", "Could be better"],
            "score": 60,
            "status": "inactive"
        },
        {
            "name": "Alice Kim",
            "age": 30,
            "city": "Seoul",
            "gender": "여성",
            "email": "alice.kim@gmail.com",
            "tags": ["sports", "fashion"],
            "orders": [5001, 5002, 5003, 5004, 5005, 5006],
            "reviews": ["Nice", "Awesome", "Fantastic"],
            "score": 95,
            "status": "active"
        },
        {
            "name": "Chris",
            "age": 25,
            "city": "Daegu",
            "gender": "남성",
            "email": "chris@gmail.com",
            "tags": ["movies", "gaming"],
            "orders": [6001, 6002, 6003],
            "reviews": ["Great", "Loved it"],
            "score": 88,
            "status": "active",
            "points": 120
        },
        {
            "name": "Emma",
            "age": 20,
            "city": "Jeju",
            "gender": "여성",
            "email": "emma@naver.com",
            "tags": ["fashion", "beauty"],
            "orders": [7001],
            "reviews": ["Good"],
            "score": 70,
            "status": "inactive"
        }
    ]

)


db.users.find({name:"Kim"})

db.users.find({name: {$regex:"^John"}})

db.users.find({location:{$exists:true}})

db.users.find({email:{$regex:"@gmail\\.com"}})

// text라는 index가 설정되어 있어야 사용 가능 결과적으로 name 과 email 에서 MongoDB 를 찾기
db.users.find({$text:{$search:"Lee"}})
// index 설정 즉 name 과 email 에 대해 text 라는 index 생성
db.users.createIndex({name:"text", email:"text"})
// index 조회
db.users.getIndexes()
// index 삭제 , 각각이 _ 로 연결
db.users.dropIndex("name_text_email_text")