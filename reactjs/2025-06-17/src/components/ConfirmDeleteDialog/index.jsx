import {Dialog, DialogContent, DialogTitle} from "@mui/material";

export default function ({isOpen, setIsOpen}) {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        <span>Are you sure want to delete this employee?????</span>
      </DialogContent>
    </Dialog>
  )
}