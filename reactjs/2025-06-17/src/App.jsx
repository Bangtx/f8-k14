import './App.css'
import {FTable} from './components'
import {Button, DialogContent, DialogTitle, Dialog, TextField, DialogActions} from "@mui/material";
import {useState} from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


function App() {
  const [isOpenDialog, setIsOpenDialog] = useState(false)

  const [curEmployee, setCurEmployee] = useState({
    id: null, name: 'test', age: '', address: ''
  })

  const columns = [
    { name: 'id', text: 'Id'},
    { name: 'name', text: 'Name'},
    { name: 'age', text: 'Age'},
    { name: 'address', text: 'Address'},
    { name: 'action', text: ''},
  ]
  const employees = [
    {id: 1, name: 'viet', age: 23, address: '123/3 đường Lê Lợi, phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh'},
    {id: 2, name: 'viet nam', age: 23, address: '123/5B đường Lê Lợi, Phường 6, thành phố Tuy Hòa, tỉnh Phú Yên'},
    {id: 3, name: 'nam viet', age: 23, address: '123/5B đường Lê Lợi, Phường 6, thành phố Tuy Hòa, tỉnh Phú Yên'},
  ]

  return (
    <>
      <Dialog open={isOpenDialog} onClose={() => setIsOpenDialog(false)}>
        <DialogTitle sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <span>New Employee</span>
          <CloseOutlinedIcon/>
        </DialogTitle>
        <DialogContent>
          <TextField fullWidth label="name" variant="standard" value={curEmployee.name}/>
          <TextField fullWidth label="age" variant="standard" />
          <TextField fullWidth label="address" variant="standard" />
        </DialogContent>
        <DialogActions>
          <Button color={'error'} variant={'outlined'}>Close</Button>
          <Button color={'info'} variant={'outlined'}>Save</Button>
        </DialogActions>
      </Dialog>
      <FTable columns={columns} rows={employees}/>
      <Button variant="outlined" onClick={() => setIsOpenDialog(true)}>Add new</Button>
    </>
  )
}

export default App
