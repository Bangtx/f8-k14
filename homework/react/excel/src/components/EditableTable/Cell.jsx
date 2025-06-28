import {useContext, useRef} from "react";
import {TableContext} from "./const.js";

export default function ({row, column}) {
  const injector = useContext(TableContext)

  const {cursor, setCursor} = injector

  const cellRef = useRef(null)
  const cell = row[column.name]

  const onClick = () => {
    if (cellRef.current) {
      const width = cellRef.current.offsetWidth;
      const height = cellRef.current.offsetHeight;
      const left = cellRef.current.offsetLeft;
      const top = cellRef.current.offsetTop;

      setCursor({
        ...cursor, width, height, top, left
      })
    }
  }

  return (
    <td
      onClick={onClick}
      ref={cellRef}
    >
      {cell}
    </td>
  )
}