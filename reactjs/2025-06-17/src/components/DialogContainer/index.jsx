import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function ({isOpen, setIsOpen, children}) {

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogTitle sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <span>Title</span>
        <CloseOutlinedIcon onClick={() => setIsOpen(false)}/>
      </DialogTitle>

      <DialogContent>
        {children}
      </DialogContent>

      <DialogActions sx={{padding: '16px 20px' }}>
        <Button color={'error'} variant={'outlined'} onClick={() => setIsOpen(false)}>Close</Button>
        <Button color={'info'} variant={'outlined'}>Save</Button>
      </DialogActions>
    </Dialog>
  )
}