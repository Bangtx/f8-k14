import {createContext, memo, useContext, useRef} from "react";

const Context = createContext(null)

const Com1 = () => {
  const {c2Ref} = useContext(Context)

  const onChangeColor = () => {
    console.log(c2Ref)
    c2Ref.current.style.backgroundColor = 'red'
  }

  return (
    <>
      <p>component 1</p>
      <button onClick={onChangeColor}>change color</button>
    </>
  )
}

const Com2 = () => {

  const {c2Ref} = useContext(Context)

  return (
    <div ref={c2Ref}>
      <p>component 2</p>
    </div>
  )
}

export default function () {

  const c2Ref = useRef(null)

  const provider = {c2Ref}

  return (
    <Context value={provider}>
      <h1>Ref</h1>
      <Com1/>
      <Com2 ref={c2Ref}/>
    </Context>
  )
}