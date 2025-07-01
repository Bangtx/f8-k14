import {useContext, useEffect, useRef, useState} from "react";
import {TableContext} from "./const.js";
import './style.sass'

export default function () {
  const cellInputRef = useRef(null)
  const inputRef = useRef(null)

  const injector = useContext(TableContext)

  const {cursor, setCursor, rows, columns, onInput} = injector

  const colName = columns[cursor.columnIndex].name
  const curRow = rows[cursor.rowIndex]

  const [inputValue, setInputValue] = useState(curRow[colName])

  const onDoubleClick = () => {
    setCursor({...cursor, isEditing: true})
  }

  const onKeyDown = (e) => {
    if (!cursor.isEditing) {
      setCursor({...cursor, isEditing: true})
      setInputValue(`${inputValue}${e.key}`)

      setTimeout(() => {
        console.log(inputRef.current)
        inputRef.current.focus()
      })
    }
    if (e.key === 'Enter') {
      onInput({rowIndex: cursor.rowIndex, columnIndex: cursor.columnIndex, value: inputValue})
      // rows[cursor.rowIndex][colName] = 1234567
      // console.log(rows)
    }
  }

  const onBlur = () => {
    onInput({rowIndex: cursor.rowIndex, columnIndex: cursor.columnIndex, value: inputValue})
  }

  // update inputValue when this component have been reloaded
  useEffect(() => {
    setInputValue(curRow[colName])
    // focus in div tag when this component have been reloaded
    cellInputRef.current.focus()
  }, [cursor.columnIndex, cursor.rowIndex, cursor.width])


  return (
    <div
      ref={cellInputRef}
      tabIndex={1}
      className={`cell-input`}
      style={{
        top: cursor.top,
        left: cursor.left,
        width: cursor.width,
        height: cursor.height
      }}
      onDoubleClick={onDoubleClick}
      onKeyDown={(e) => onKeyDown(e)}
    >
      {
        cursor.isEditing && (
          <input
            ref={inputRef}
            value={inputValue}
            onBlur={onBlur}
            onChange={(e) => setInputValue(e.target.value)}
          />
        )
      }
    </div>
  )
}