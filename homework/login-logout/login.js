import {post} from './api.js'


const loginBtnRef = document.querySelector('#login-btn')


const onMounted = () => {
  const accessToken = localStorage.getItem('access')
  if (accessToken) {
    // console.log('12')
    window.location.href = './home.html'
  }
}


loginBtnRef.addEventListener('click', async () => {
  const email = document.querySelector("input[name='email']").value
  const pass = document.querySelector("input[name='password']").value

  // handle login
  const data = await post('login/', {
    email: email, password: pass
  })

  localStorage.setItem('access', data.access)
  localStorage.setItem('refresh', data.refresh)

  // access home page

  window.location.href = './home.html'
})

onMounted()