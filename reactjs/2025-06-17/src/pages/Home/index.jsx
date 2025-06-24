import {useEffect} from "react";
import {get} from "../../utils/index.js";

export default function () {

  const getPosts = async () => {
    const posts = await get('post/')
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <h1>Home</h1>
    </>
  )
}