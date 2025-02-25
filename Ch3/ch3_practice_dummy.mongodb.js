db.users.insertMany([
    {
    name: "Alice Kim",
    age: 29,
    gender: "여성",
    joinedAt: ISODate("2023-05-10T10:30:00Z"),
    email: "alice.kim@gmail.com",
    tags: ["MongoDB", "Database", "Technology"],
    reviews: [5, 4, 3, 2],
    roles: ["User"],
    address: "123 Main Street, Seoul",
    subscriptions: ["Technology", "AI"],
    birthdate: ISODate("1995-07-15T00:00:00Z"),
    orders: [
    { product: "Laptop", price: 1200, date: ISODate("2024-02-01T12:00:00Z") },
    { product: "Mouse", price: 30, date: ISODate("2024-02-05T14:30:00Z") }
    ]
    },
    {
    name: "Bob Lee",
    age: 35,
    gender: "남성",
    joinedAt: ISODate("2021-11-20T08:15:00Z"),
    email: "bob.lee@yahoo.com",
    tags: ["AI", "Cloud", "Big Data"],
    reviews: [5, 5, 5, 4, 4],
    roles: ["Admin"],
    address: "456 Tech Avenue, Busan",
    subscriptions: ["Finance", "Technology"],
    birthdate: ISODate("1988-03-22T00:00:00Z"),
    orders: [
    { product: "Phone", price: 800, date: ISODate("2023-12-20T10:00:00Z") },
    { product: "Monitor", price: 250, date: ISODate("2024-01-15T16:00:00Z") },
    { product: "Keyboard", price: 70, date: ISODate("2024-02-10T09:30:00Z") }
    ]
    },
    {
    name: "Charlie Park",
    age: 40,
    gender: "남성",
    joinedAt: ISODate("2020-09-15T13:45:00Z"),
    email: "charlie.park@hotmail.com",
    tags: ["Security", "Networking"],
    reviews: [],
    roles: ["User"],
    address: "789 Business Road, Incheon",
    subscriptions: ["Cybersecurity", "Networking"],
    birthdate: ISODate("1985-09-10T00:00:00Z"),
    orders: []
    },
    {
    name: "David Kim",
    age: 27,
    gender: "남성",
    joinedAt: ISODate("2022-03-25T09:20:00Z"),
    email: "david.kim@gmail.com",
    tags: ["Programming", "MongoDB"],
    reviews: [4, 4, 5],
    roles: ["User"],
    address: "101 Silicon Street, Seoul",
    subscriptions: ["Programming", "Technology"],
    birthdate: ISODate("1996-02-28T00:00:00Z"),
    orders: [
    { product: "Laptop", price: 1400, date: ISODate("2023-12-05T11:45:00Z") }
    ]
    },
    {
    name: "Emily Choi",
    age: 31,
    gender: "여성",
    joinedAt: ISODate("2024-01-05T12:45:00Z"),
    email: "emily.choi@naver.com",
    tags: ["Machine Learning", "AI"],
    reviews: [5, 4, 5, 3, 4],
    roles: ["Admin", "User"],
    address: "202 ML Drive, Daegu",
    subscriptions: ["AI", "Deep Learning"],
    birthdate: ISODate("1993-11-12T00:00:00Z"),
    orders: [
    { product: "Tablet", price: 600, date: ISODate("2024-01-10T15:00:00Z") },
    { product: "Headphones", price: 150, date: ISODate("2024-02-01T18:30:00Z") },
    { product: "Charger", price: 50, date: ISODate("2024-02-12T20:00:00Z") }
    ]
    }
    ])