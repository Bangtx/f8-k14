const employees = [
    { id: 1, name: "Alice", age: 23, status: 'working' },
    { id: 2, name: "Bob", age: 25, status: 'working' },
    { id: 3, name: "John", age: 27, status: 'working' },
    { id: 4, name: "David", age: 23, status: 'quited' },
    { id: 5, name: "Eve", age: 20, status: 'working' },
];

const products = [
    { id: 1, name: "Phone", price: 1200 },
    { id: 2, name: "Laptop", price: 3000  },
    { id: 3, name: "Tab", price: 2000  },
    { id: 4, name: "PC", price: 800  },
    { id: 5, name: "Monitor", price: 1500  },
]

const orders = [
    { id: 1, employeeId: 1, productId: 4, quantity: 1 },
    { id: 2, employeeId: 2, productId: 2, quantity: 4 },
    { id: 3, employeeId: 1, productId: 5, quantity: 1 },
    { id: 4, employeeId: 3, productId: 1, quantity: 2 },
    { id: 5, employeeId: 2, productId: 5, quantity: 3 },
    { id: 6, employeeId: 4, productId: 1, quantity: 1 },
    { id: 7, employeeId: 5, productId: 3, quantity: 2 },
];

/*
global
* */

const getItemsByMaxValue = (arr, property) => {
    let maxVal = arr[0][property]

    for (const item of arr) {
        if (item[property] > maxVal) maxVal = item[property]
    }
    return arr.filter(item => item[property] === maxVal)
}

/*
Bai: 1
Lay ra ds nhan vien dang lam viec
*/
const workingEmployees = employees.filter(employee => employee.status === 'working')
/*
Bai 2:
Lay ra nhan vien lon tuoi nhat
*/
const oldestEmployees = getItemsByMaxValue(employees, 'age')
/*
Bai 3:
Lay ra san phan gia re nhat
*/
let minPrice = products[0].price

for (const product of products) {
    if (product.price < minPrice) minPrice = product.price
}

const cheapestProducts = products.filter(product => product.price === minPrice)
/*
Bai 4:
Tim ra san phan ban chay nhat ( ban nhieu nhat ve so luong )
*/

const getTotalQuantity = (orders) => {
    let total = 0
    for (const order of orders) {
        total += order.quantity
    }
    return total
}

for (const product of products) {
    // filter orders
    const productOrders = orders.filter(o => o.productId === product.id)
    product['totalSale'] = getTotalQuantity(productOrders)
}

const bestSaleProducts = getItemsByMaxValue(products,'totalSale')
/*
Bai 5:
Tim ra san phan doanh thu cao nhat ( nhieu tien nhat )
*/

for (const product of products) {
    // filter orders
    const productOrders = orders.filter(o => o.productId === product.id)
    product['totalSale'] = getTotalQuantity(productOrders)

    product['totalAmount'] = getTotalQuantity(productOrders) * product.price
}

const bestSaleProductsByAmount = getItemsByMaxValue(products,'totalAmount')

/*
Bai 6:
Tim ra nhan vien ban nhieu hang nhat

Bai 7:
Tim ra nhan vien co doanh thu cao nhat
*/

const toHastMap = (arr) => {
    const result = {}

    for (const e of arr) {
        result[e.id] = e
    }

    return result
}

const productHashMap = toHastMap(products)
console.log(productHashMap)
for (const employee of employees) {
    const employeeOrders = orders.filter(o => o.employeeId === employee.id)

    let totalAmount = 0
    for (const employeeOrder of employeeOrders) {
        totalAmount += productHashMap[employeeOrder.productId].price * employeeOrder.quantity
    }
    console.log(employee.id, totalAmount)
}

/*

Bai 8:
Tim ra san pham ban co doanh thu nhat cua moi nhan vien

Bai 9:
Gia su nhan vien se nhan duoc hoa hong la 3%
-> tim hoa hong cho moi nhan vien

Bai 10:
Sap xep nhan vien theo thu tu giam dan theo doanh thu
* */




