// ✅ 1. users 컬렉션에서 age 필드에 단일 인덱스 생성
db.users.createIndex({age : 1})
// ✅ 2. users 컬렉션에서 기존에 존재하는 모든 인덱스 조회
db.users.getIndexes()
// ✅ 3. users 컬렉션에서 city 필드의 단일 인덱스를 삭제
db.users.dropIndex("age_1")
// ✅ 4. users 컬렉션에서 age와 city 필드에 대한 복합 인덱스 생성
db.users.createIndex({age : 1, city : 1})
// ✅ 5. users 컬렉션에서 email 필드를 기준으로 유니크 인덱스 생성
db.users.createIndex({email:1}, {unique: true})
// ✅ 6. users 컬렉션에서 status 필드의 스파스 인덱스 생성
db.users.createIndex({status: 1}, {sparse:true})
// ✅ 7. users 컬렉션에서 age 필드에 대해 30세 이상만 포함하는 부분 인덱스 생성
db.users.createIndex({age:1}, {partialFilterExpression: {age: {$gte: 30}}})
// ✅ 8. transactions 컬렉션에서 date 필드에 대한 백그라운드 인덱스 생성
db.transactions.createIndex({date: 1}, {background: true})
// ✅ 9. products 컬렉션에서 name과 category 필드를 포함하는 커버드 인덱스 생성
db.products.createIndex({name:1, category:1})
db.users.find({ name: "Alice" }, { _id: 0, name: 1, cartegory: 1 })
// ✅ 10. locations 컬렉션에서 coordinates 필드에 대한 지리 공간 인덱스 생성
db.locations.createIndex({coordinates: "2dsphere"})
// ✅ 11. 특정 좌표(서울)에서 반경 10km 내 위치 검색 ($center) 중심과 반경
// ✅ 12. 특정 지역의 사각형 범위 내 검색 ($box) 대각선 끝과 끝
// ✅ 13. 다각형 영역 내 검색 ($polygon) 꼭지점
// ✅ 15. 현재 위치에서 가장 가까운 장소 찾기 ($nearSphere) $geometry type point 좌표, $maxDistance 미터
db.locations.find({
    coordinates: { $geoWithin: { $center: [[126.9784, 37.5665], 10] } }
  })
db.locations.find({
    coordinates: { $geoWithin: { $box: [[126.9784, 37.5665], [127.1, 37.7]] } }
  })
db.locations.find({
    coordinates: { $geoWithin: { $polygon: [[126.9, 37.5], [127.0, 37.6], [127.1, 37.5]] } }
  })
db.locations.find({
    coordinates: {
      $nearSphere: {
        $geometry: { type: "Point", coordinates: [126.9784, 37.5665] },
        $maxDistance: 10000  // 10km (단위: 미터)
      }
    }
  })