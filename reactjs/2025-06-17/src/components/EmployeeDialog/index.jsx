import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {useEffect, useState} from "react";

export default function ({isOpen, setIsOpen, employee, onSave}) {
  const [inputtingEmployee, setInputtingEmployee] = useState({...employee})

  useEffect(() => {
    setInputtingEmployee({...employee})
  }, [employee]);

  const onClickSave = () => {
    console.log(employee)
  }

  const onInput = (e) => {
    setInputtingEmployee({...inputtingEmployee, [e.target.name]: e.target.value})
  }

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogTitle sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <span>New Employee</span>
        <CloseOutlinedIcon onClick={() => setIsOpen(false)}/>
      </DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          name="name"
          label="name"
          variant="standard"
          value={inputtingEmployee.name || ''}
          onChange={(e) => onInput(e)}
        />
        <TextField
          sx={{marginTop: '12px'}}
          fullWidth
          name="age"
          label="age"
          variant="standard"
          value={inputtingEmployee.age || ''}
          onChange={(e) => onInput(e)}
        />
        <TextField
          sx={{marginTop: '12px'}}
          fullWidth
          name="address"
          label="address"
          variant="standard"
          value={inputtingEmployee.address || ''}
          onChange={(e) => onInput(e)}
        />
      </DialogContent>
      <DialogActions>
        <Button color={'error'} variant={'outlined'} onClick={() => setIsOpen(false)}>Close</Button>
        <Button color={'info'} variant={'outlined'} onClick={onClickSave}>Save</Button>
      </DialogActions>
    </Dialog>
  )
}