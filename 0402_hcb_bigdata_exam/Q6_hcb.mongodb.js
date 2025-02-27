// 6. Capped Collection을 생성하고, 컬렉션 명: logs, size : 5000, 데이터를 삽입한 후 조
// 회하는 코드를 작성하세요. (오래된 데이터 삭제 확인,)
db.createCollection("logs_Q6",{
    capped:true,
    size:5000
})

for(var i = 1; i<501; i++){
    db.logs_Q6.insertOne({x:i})
    }