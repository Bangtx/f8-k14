import './App.css'
import {} from './components'

const Cell = ({text}) => {
  return (
    <td>{text}</td>
  )
}

const Row = ({row, columns}) => {
  return (
    <tr>
      {
        columns.map(col => {
          return <Cell text={row[col]}/>
        })
      }
    </tr>
  )
}

function App() {

  const columns = ['id', 'name', 'age']
  const rows = [
    {id: 1, name: 'viet', age: 23},
    {id: 2, name: 'viet nam', age: 23},
    {id: 3, name: 'nam viet', age: 23},
  ]

  return (
    <>
      <table width={'100%'} border={1} cellSpacing={0}>
        <thead>
          <tr>
            {
              columns.map(col => {
                return <th>{col}</th>
              })
            }
          </tr>
        </thead>

        <tbody>
        {
          rows.map(row => {
            return <Row row={row} columns={columns}/>
          })
        }
        </tbody>
      </table>
    </>
  )
}

export default App
