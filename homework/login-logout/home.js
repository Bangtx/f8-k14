import {get} from "./api.js";

const onMounted = async () => {
  const accessToken = localStorage.getItem('access')
  if (!accessToken) {
    console.log('12')
    window.location.href = './login.html'
  }


  // get posts

  const posts = await get('post/')
}

onMounted()