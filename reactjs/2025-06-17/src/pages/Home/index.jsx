import {Button} from "@mui/material";
import {useNavigate} from "react-router";

export default function () {
  const navigate = useNavigate()

  const onClick = () => {
    // navigate to employees page
    navigate('/employees')
  }

  return (
    <>
      <h1>Home</h1>
      <Button onClick={onClick}>go to employees</Button>
    </>
  )
}