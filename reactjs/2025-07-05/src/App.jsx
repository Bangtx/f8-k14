import {useDispatch, useSelector} from "react-redux";
import {increase, addNew} from './store'

function App() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.count)
  const products = useSelector(state => state.products)

  const onClick = () => {
    dispatch(increase(2))
  }

  const onAdd = () => {
    dispatch(addNew({
      id: 1,
      name: 'test'
    }))
  }

  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={onClick}>+</button>
      <button onClick={onAdd}>add new</button>

      <ul>
        {
          products.map(product => {
            return (
              <li key={product.id}>
                <span>{product.name}</span>
                <button onClick={() => onDelete(product.id)}>del</button>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default App
