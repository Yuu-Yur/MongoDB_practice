// 9. users 컬렉션과 orders 컬렉션을 참조(Reference) 관계로 설정하고 데이터 삽입하는 쿼리를 작성하세요.
var userId = ObjectId();
db.users_Q9.insertOne({_id:userId, name:"hcb", email:"hcb@gmail.com"});
db.orders_Q9.insertOne({orderNumber:1, user_id:userId, total:10, orderDate:ISODate()})