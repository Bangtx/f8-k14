// es5 es6

// const colors = Array.from({ length: 10000000 }, (_, i) => ({
//     id: i + 1,
//     name: `color ${i + 1}`
// }));
//
// console.time('doSomething')
// for (let i = 0; i < colors.length; i ++) {
//     const color = colors[i]
//     // color = {...color}
//     color.id = color.id * 2
// }
//
// console.timeEnd('doSomething')

//
// const a = {
//     id: 1,
//     name: 'test',
//     test: {
//         id: 1, age: 100
//     }
// }
// // const b = {...a, name: 'tets 1', test: {...a.test}}
// const b = JSON.parse(JSON.stringify(a))
//
// b.test.id = 1000
//
// console.log(a)
// console.log(b)


const customers = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Bob Brown" },
    { id: 5, name: "Charlie Green" },
];

const products = [
    { id: 101, name: "Laptop", price: 1200 },
    { id: 102, name: "Phone", price: 800 },
    { id: 103, name: "Tablet", price: 500 },
    { id: 104, name: "Smartwatch", price: 300 },
    { id: 105, name: "Headphones", price: 150 },
];

const orders = [
    { id: 1001, customerId: 1, items: [{ productId: 101, quantity: 2 }, { productId: 102, quantity: 1 }] },
    { id: 1002, customerId: 2, items: [{ productId: 102, quantity: 1 }, { productId: 103, quantity: 3 }] },
    { id: 1003, customerId: 3, items: [{ productId: 104, quantity: 5 }, { productId: 105, quantity: 2 }] },
    { id: 1004, customerId: 4, items: [{ productId: 101, quantity: 1 }, { productId: 103, quantity: 2 }] },
    { id: 1005, customerId: 5, items: [{ productId: 105, quantity: 10 }] },
    { id: 1006, customerId: 1, items: [{ productId: 101, quantity: 1 }, { productId: 105, quantity: 3 }] },
    { id: 1007, customerId: 2, items: [{ productId: 104, quantity: 2 }, { productId: 103, quantity: 1 }] },
    { id: 1008, customerId: 3, items: [{ productId: 102, quantity: 2 }] },
    { id: 1009, customerId: 4, items: [{ productId: 101, quantity: 1 }, { productId: 102, quantity: 1 }] },
    { id: 1010, customerId: 5, items: [{ productId: 103, quantity: 4 }, { productId: 104, quantity: 3 }] },
];

// output
// [
//     {
//         id: 1,
//         name: "John Doe",
//         totalSpent: 3600,
//         products: [
//             { name: "Laptop", quantity: 3, totalSpent: 3600 },
//             { name: "Phone", quantity: 1, totalSpent: 800 },
//             { name: "Headphones", quantity: 3, totalSpent: 450 }
//         ]
//     },
//     {

//         id: 5,
//         name: "Charlie Green",
//         totalSpent: 2250,
//         products: [
//             { name: "Tablet", quantity: 4, totalSpent: 2000 },
//             { name: "Smartwatch", quantity: 3, totalSpent: 900 },
//             { name: "Headphones", quantity: 10, totalSpent: 1500 }
//         ]
//     },
//     {
//         id: 2,
//         name: "Jane Smith",
//         totalSpent: 2100,
//         products: [
//             { name: "Phone", quantity: 1, totalSpent: 800 },
//             { name: "Tablet", quantity: 4, totalSpent: 2000 },
//             { name: "Smartwatch", quantity: 2, totalSpent: 600 }
//         ]
//     },
//     {
//         id: 4,
//         name: "Bob Brown",
//         totalSpent: 2300,
//         products: [
//             { name: "Laptop", quantity: 2, totalSpent: 2400 },
//             { name: "Tablet", quantity: 2, totalSpent: 1000 },
//             { name: "Phone", quantity: 1, totalSpent: 800 }
//         ]
//     },
//     {
//         id: 3,
//         name: "Alice Johnson",
//         totalSpent: 2050,
//         products: [
//             { name: "Smartwatch", quantity: 5, totalSpent: 1500 },
//             { name: "Phone", quantity: 2, totalSpent: 800 },
//             { name: "Headphones", quantity: 2, totalSpent: 300 }
//         ]
//     }
// ]

const groupOrder = (orderItems) => {
    const result = {}

    for (const item of orderItems) {
        if (!result[item.productId]) result[item.productId] = item.quantity
        else result[item.productId] += item.quantity
    }

    return result
}

customers.forEach(customer => {
    // filter order
    const customerOrders = orders.filter(o => o.customerId === customer.id)
    let customerOrderItems = []

    // group items of order
    customerOrders.forEach(customerOrder => {
        customerOrderItems = [...customerOrderItems, ...customerOrder.items]
    })

    const groupedOrderItems = groupOrder(customerOrderItems)

    console.log(customer.id, groupedOrderItems)
})





// const items = [
//     { productId: 101, quantity: 2 },
//     { productId: 102, quantity: 1 },
//     { productId: 101, quantity: 1 },
//     { productId: 105, quantity: 3 }
// ]

/*
[
    { productId: 101, quantity: 3 },
    { productId: 102, quantity: 1 },
    { productId: 105, quantity: 3 }
]
{
    101: 3 ,
    102: 1 ,
    105: 3
}
productObj = {
    101: {name: "Laptop", price: 1200},
    ....
}
* */



























