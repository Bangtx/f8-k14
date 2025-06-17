import {createContext, useContext} from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const TableContext = createContext(null)

const Cell = ({row, column}) => {

  return (
    <TableCell>
      {column.name === 'action' && <button>edit</button>}
      {column.name !== 'action' && <span>{row[column.name]}</span>}
    </TableCell>
  )
}

const Row = ({row}) => {
  const injector = useContext(TableContext)
  const {columns} = injector

  return (
    <TableRow>
      {
        columns.map((col, index) => {
          return <Cell key={`f-table-cell-${row.id}-${col.name}`} row={row} column={col}/>
        })
      }
    </TableRow>
  )
}

export default function ({columns, rows}) {
  const provider = {
    columns, rows
  }

  return (
    <TableContext value={provider}>
      <TableContainer>
        <Table width={'100%'}>
          <TableHead>
          <tr>
            {
              columns.map((col) => {
                return <TableCell key={col.name}>{col.text}</TableCell>
              })
            }
          </tr>
          </TableHead>

          <TableBody>
          {
            rows.map((row) => {
              return <Row key={`f-table-row-${row.id}`} row={row}/>
            })
          }
          </TableBody>
        </Table>
      </TableContainer>
    </TableContext>
  )
}