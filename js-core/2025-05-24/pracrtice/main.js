import {Employee} from "./employee.js";
import {Product} from "./product.js";

const employees = []
const products = []

const createEmployee = ({id, name, address}) => {
  employees.push(new Employee(id, name, address))
}


const createProduct = ({id, name, price}) => {
  products.push(new Product(id, name, price))
}

createEmployee({id: 1, name: 'tets', address: 'addredd test'})
createProduct({id: 1, name: 'tets', price: 1000})

for(const product of products) {
  // console.log(emp.getId(), emp.getName(), emp.getAddress())
  console.log(product.toString())
}
