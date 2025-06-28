import {EditableTable} from './components'
import {useState} from "react";

const columns = [
  { name: 'product'},
  { name: 'quantity' },
  { name: 'price' },
  { name: 'amount' },
  { name: 'comment' },
]


function App() {

  const [rows, setRows] = useState([
    {
    id: 1,
    product: 'product 1',
    quantity: 50,
    price: 10000,
    amount: 500000,
    comment: 'this is comment'
    },
    {
      id: 2,
      product: 'product 2',
      quantity: 50,
      price: 10000,
      amount: 500000,
      comment: 'this is comment 2'
    }
  ])

  return (
    <>
      <EditableTable columns={columns} rows={rows}/>
    </>
  )
}

export default App
