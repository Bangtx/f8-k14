import './style.sass'
import Row from "./Row.jsx";
import {TableContext} from "./const.js";
import CellSelection from "./CellSelection.jsx";
import {useState} from "react";

const defaultCursor = {
  rowIndex: 0,
  columnIndex: 0,
  top: 0,
  left: 0,
  width: 0,
  height: 0
}

export default function ({columns, rows}) {

  const [cursor, setCursor] = useState({...defaultCursor})

  console.log(cursor)

  const provider = {
    columns, rows, cursor, setCursor
  }

  return (
    <TableContext value={provider}>
      <div>
        <table className={'editable-table'}>
          <thead>
          <tr>
            {
              columns.map(column => {
                return <th key={column.name}>{column.name}</th>
              })
            }
          </tr>
          </thead>
          <tbody>
          {
            rows.map(row => {
              return <Row key={row.id} row={row}/>
            })
          }
          </tbody>
        </table>

        <CellSelection/>
      </div>
    </TableContext>
  )
}