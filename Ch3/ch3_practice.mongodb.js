// find() 기본 구조
// find({검색할key:값}) 기본적으로 정확히 같음이 아니라 포함
// 여럿을 쓸 땐 $in
// $slice 로 배열에서 슬라이싱 가능
// $size 는 숫자만 쓸 수 있음, gt,lt 불가
// $exists 존재여부
// $regex 정규식 사용
// 배열을 .으로 들어갈 때는 ""를 붙여야함
// $elemMatch 배열안에서 키,값을 찾을때

// 1 MongoDB tags
db.users.find({tags : "MongoDB"})

// 2 orders 배열이 비어있지 않음
db.users.find({orders : {$not: {$size: 0}}})

// 3 최근 5개의 주문만 가져오기
db.users.find({},{orders: {$slice: -5}})

// 4 3개 이상의 리뷰가 있는 사용자 찾기
// db.users.find({reviews: {$size: 3}}) 이것은 리뷰가 3개인 사용자 찾기, 3개 이상 아님
db.users.find({"reviews.2":{$exists:true}})

// 5 "Admin" 권한을 가진 사용자 찾기
db.users.find({roles:"Admin"})

// 6 주소에 "Street"이 포함된 사용자 찾기
db.users.find({address: {$regex: ("street"), $options: i}})
// /정규식리터럴/
db.users.find({address: /Street/i})

// 7 특정 카테고리("Technology")를 구독한 사용자 찾기
db.users.find({subscriptions: "Technology"})

// 8 생년월일이 1990년 이후인 사용자 찾기
db.users.find({birthdate: {$gt: ISODate("1990-01-01T00:00:00Z")}})

// 9 특정 제품을 구매한 사용자 찾기
// 배열의 모든 객체에 product 가 존재한다는걸 알 때
db.users.find({"orders.product":"Tablet"})
// 배열의 객체에 product 가 존재할수도 아닐수도 있을 때 
db.users.find({orders : {$elemMatch: {product:"Laptop"}}})