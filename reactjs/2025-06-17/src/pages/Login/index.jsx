import {Button, TextField} from "@mui/material";
import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {useNavigate} from "react-router";

export default function () {
  const navigate = useNavigate()

  const [info, setInfo] = useState({
    email: 'admin@gmail.com', password: "12345678"
  })

  const onLogin = async () => {
    try {
      const {data} = await axios.post('https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com/login', info)
      const {access, refresh} = data
      localStorage.setItem('access', access)
      localStorage.setItem('refresh', refresh)

      navigate('/')
    } catch (e) {
      toast.error('login failed')
    }
  }

  return (
    <>
      <TextField
        label={"email"}
        value={info.email || ''}
        onChange={(e) => setInfo({...info, email: e.target.value})}
      />
      <TextField
        label={"password"}
        type={"password"}
        value={info.password || ''}
        onChange={(e) => setInfo({...info, password: e.target.value})}
      />
      <Button onClick={onLogin}>Login</Button>
    </>
  )
}