import {useDispatch, useSelector} from "react-redux";

// const getStr = (state) => {
//   if (state.searchStr) return state.products.filter(p => p.name.includes(state.searchStr))
//   return state.products
// }

export default function () {
  const dispatch = useDispatch()
  const products = useSelector(state => {
    if (state.searchStr) return state.products.filter(p => p.name.includes(state.searchStr))
    return state.products
  })

  const onDelete = (id) => {
    dispatch({
      type: 'products/delete',
      value: id
    })
  }

  return (
    <>
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