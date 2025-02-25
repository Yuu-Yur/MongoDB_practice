// ✅ 1. 나이가 25 이상인 사용자 찾기

db.users.find({ age: { $gte: 25 } })

// ✅ 2. 이름이 "Kim"인 사용자 찾기

db.users.find({ name: "Kim" })

// ✅ 3. 나이가 30 또는 40인 사용자 찾기

db.users.find({ age: { $in: [30, 40] } })

// ✅ 4. 나이가 30 이상이고, 도시가 "Seoul"인 사용자 찾기

db.users.find({ age: { $gte: 30 }, city: "Seoul" })

// ✅ 5. 이름이 "John"으로 시작하는 사용자 찾기

db.users.find({ name: { $regex: "^John" } })

// ✅ 6. 나이가 20~40 사이인 사용자 찾기

db.users.find({ age: { $gte: 20, $lte: 40 } })

// ✅ 7. 태그에 "sports"가 포함된 사용자 찾기

db.users.find({ tags: "sports" })
또는
db.users.find({ tags: { $in: ["sports"] } })

// ✅ 8. 배열 크기가 3인 사용자 찾기

db.users.find({ tags: { $size: 3 } })

// ✅ 9. reviews 배열에서 마지막 2개만 가져오기

db.users.find({}, { reviews: { $slice: -2 } })

// ✅ 10. 성별이 "남성"이고 나이가 30 이상인 사용자 찾기

db.users.find({ gender: "남성", age: { $gte: 30 } })

// ✅ 11. location 필드가 없는 사용자 찾기

db.users.find({ location: { $exists: false } })

// ✅ 12. 이름이 "Lee"가 아닌 사용자 찾기

db.users.find({ name: { $ne: "Lee" } })

// ✅ 13. orders 배열의 첫 번째 요소만 가져오기

db.users.find({}, { "orders": { $slice: 1 } })

// ✅ 14. 태그에 "music" 또는 "travel"이 포함된 사용자 찾기

db.users.find({ tags: { $in: ["music", "travel"] } })

// ✅ 15. 이메일이 특정 도메인("@gmail.com")을 포함하는 사용자 찾기

db.users.find({ email: { $regex: "@gmail\\.com$" } })

// ✅ 16. 특정 텍스트(예: "MongoDB")를 포함하는 사용자 찾기

db.users.find({ $text: { $search: "MongoDB" } })

// ⚠️ 주의: text index가 설정되어 있어야 사용 가능

// ✅ 17. score 값이 80 이상인 사용자 찾기

db.users.find({ score: { $gte: 80 } })

// ✅ 18. status 값이 "active"인 사용자 찾기

db.users.find({ status: "active" })

// ✅ 19. points 필드가 존재하는 사용자 찾기

db.users.find({ points: { $exists: true } })

// ✅ 20. orders 배열의 크기가 5 이상인 사용자 찾기

db.users.find({ orders: { $size: 5 } })