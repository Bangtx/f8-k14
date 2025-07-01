import {EditableTable} from './components'
import {useState} from "react";
import row from "./components/EditableTable/Row.jsx";

const columns = [
  { name: 'product', width: '60%'},
  { name: 'quantity', width: '10%' },
  { name: 'price', width: '10%' },
  { name: 'amount', width: '10%' },
  { name: 'comment', width: '10%' },
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

  const onInput = ({rowIndex, columnIndex, value}) => {
    const newData = [...rows]
    newData[rowIndex][columns[columnIndex].name] = value
    setRows(newData)
  }

  return (
    <>
      <EditableTable columns={columns} rows={rows} onInput={onInput}/>
    </>
  )
}

export default App
