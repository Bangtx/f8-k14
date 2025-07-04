import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {v7} from 'uuid'
import ProductList from "./components/ProductList/index.jsx";
import Search from "./components/Search/index.jsx";

function App() {

  const dispatch = useDispatch()
  const count = useSelector(state => state.count)


  const onAddNew= () => {
    const id = v7()
    dispatch({
      type: 'products/addNew',
      value: {
        id, name: `Product ${id}`
      }
    })
  }

  return (
    <>
      <h1>count: {count}</h1>
      <button
        onClick={() => dispatch({type: 'count/increase'})}
      >
        +
      </button>

      <button onClick={onAddNew}>add new product</button>
      <Search/>
      <ProductList/>

    </>
  )
}

export default App
