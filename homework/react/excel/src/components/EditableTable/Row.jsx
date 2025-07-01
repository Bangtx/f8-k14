import {useContext} from "react";
import {TableContext} from "./const.js";
import Cell from "./Cell.jsx";

export default function ({row, rowIndex}) {

  const injector = useContext(TableContext)

  const {columns} = injector

  return (
    <tr>
      {
        columns.map((column, index) => {
          return (
            <Cell
              rowIndex={rowIndex}
              columnIndex={index}
              key={column.name}
              row={row}
              column={column}
            />
          )
        })
      }
    </tr>
  )
}