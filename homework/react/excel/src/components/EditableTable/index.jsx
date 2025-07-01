import './style.sass'
import Row from "./Row.jsx";
import {TableContext} from "./const.js";
import CellSelection from "./CellSelection.jsx";
import CellInput from "./CellInput.jsx";
import {useState} from "react";

const defaultCursor = {
  rowIndex: 0,
  columnIndex: 0,
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  isEditing: false
}

export default function ({columns, rows, onInput}) {

  const [cursor, setCursor] = useState({...defaultCursor})

  const provider = {
    columns, rows, cursor, setCursor, onInput
  }

  return (
    <TableContext value={provider}>
      <div style={{position: 'relative'}}>
        <table className={'editable-table'}>
          <thead>
          <tr>
            {
              columns.map(column => {
                return <th key={column.name} style={{width: column.width}}>{column.name}</th>
              })
            }
          </tr>
          </thead>
          <tbody>
          {
            rows.map((row, index) => {
              return <Row rowIndex={index} key={row.id} row={row}/>
            })
          }
          </tbody>
        </table>

        <CellInput/>
        <CellSelection/>
      </div>
    </TableContext>
  )
}