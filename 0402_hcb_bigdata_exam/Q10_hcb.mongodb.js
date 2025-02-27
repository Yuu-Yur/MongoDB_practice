// 10. 최근 (2024-01-01) ~ (2024-03-01) 동안 가장 많이 판매된 제품 찾기 쿼리를 작성하세요.

db.orders_Q10.insertMany([
    {
        _id: "order1",
        userId: "user1",
        productId: "prod1",
        quantity: 2,
        amount: 2400,
        status: "completed",
        orderDate: ISODate("2024-02-01T12:00:00Z"),
        city: "Seoul"
    },
    {
        _id: "order2",
        userId: "user2",
        productId: "prod2",
        quantity: 1,
        amount: 800,
        status: "completed",
        orderDate: ISODate("2024-01-15T16:00:00Z"),
        city: "Busan"
    },
    {
        _id: "order3",
        userId: "user3",
        productId: "prod3",
        quantity: 3,
        amount: 1800,
        status: "pending",
        orderDate: ISODate("2024-02-10T09:30:00Z"),
        city: "Incheon"
    }
 ]);

db.orders_Q10.aggregate([
    {
        $match: {
          orderDate : {$gte : ISODate("2024-01-01"), $lte : ISODate("2024-03-01")},
          status: "completed"
        }
    },
    {
        $group: {
            _id:"$productId", salesCount:{$sum: "$quantity"}
        }
    },
    {
        $sort: {
          salesCount: -1
        }
    },
    {
        $limit: 1
    }
])