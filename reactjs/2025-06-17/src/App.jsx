import './App.css'
import {FTable} from './components'

function App() {

  const columns = [
    { name: 'id', text: 'Id'},
    { name: 'name', text: 'Name'},
    { name: 'age', text: 'Age'},
    { name: 'address', text: 'Address'},
    { name: 'action', text: ''},
  ]
  const rows = [
    {id: 1, name: 'viet', age: 23, address: 'Ha Noi'},
    {id: 2, name: 'viet nam', age: 23},
    {id: 3, name: 'nam viet', age: 23},
  ]

  return (
    <>
      <FTable columns={columns} rows={rows}/>
    </>
  )
}

export default App
