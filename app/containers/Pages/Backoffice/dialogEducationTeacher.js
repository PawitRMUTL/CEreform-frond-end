import React, { useEffect, useState } from 'react';
// import { Box } from '@mui/material';
import PropTypes from 'prop-types';
// import axios from 'axios';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import MenuItem from '@mui/material/MenuItem';

function DialogEducationTeacher(props) {
  const { Status, handleClose } = props;

  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(Status);
  }, [Status]);
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <form>
          <DialogTitle>แก้ไขวุฒิการศึกษา</DialogTitle>
          <DialogContent>
            <DialogContentText>
              โปรดใส่ข้อมูลที่เป็นจริง และ ถูกต้อง / Please Insert real data .
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type='submit'>Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
DialogEducationTeacher.propsTypes = {
  Status: PropTypes.bool,
  handleClose: PropTypes.func,
};
export default DialogEducationTeacher;
