// 'use client'

import axios from "axios";

interface ProductI {
  id: number
  title: string
}

export default async function Home() {

  const {data} = await axios.get('https://fakestoreapi.com/products')
  const products: ProductI[] = data

  return (
    <>
      <h1>Product List</h1>
      <ul>
        {
          products.map(p => {
            return <li key={p.id}>{p.title}</li>
          })
        }
      </ul>
    </>
  );
}
