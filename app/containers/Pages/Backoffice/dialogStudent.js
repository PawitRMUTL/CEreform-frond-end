import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import prefixData from '../../../api/dummy/prefixData';

function DialogStudent(props) {
  const {
    Status,
    handleClose,
    prefix,
    firstname,
    lastname,
    idrmutl,
    email,
    status,
    // curriculum,
    // section,
    // birthday,
    // nationality,
    // religion,
  } = props;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(Status);
  }, [Status]);

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>แก้ไขข้อมูลส่วนตัว</DialogTitle>
        <DialogContent>
          <DialogContentText>
            โปรดใส่ข้อมูลที่เป็นจริง และ ถูกต้อง / Please Insert real data .
          </DialogContentText>
          <Box>
            {/* Prefix */}
            <TextField
              id='outlined-select-currency'
              select
              label='Select'
              defaultValue={prefix}
              variant='standard'
              sx={{ m: 1 }}>
              {prefixData.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {/* frist_name */}
            <TextField
              autoFocus
              margin='dense'
              id='firstname'
              defaultValue={firstname}
              label='ชื่อ'
              type='text'
              sx={{ m: 1, width: '20ch' }}
              variant='standard'
            />
            {/* last_name */}
            <TextField
              autoFocus
              margin='dense'
              id='lastname'
              defaultValue={lastname}
              label='นามสกุล'
              type='text'
              sx={{ m: 1, width: '20ch' }}
              variant='standard'
            />
          </Box>
          <Box>
            {/* idrmutl */}
            <TextField
              autoFocus
              margin='dense'
              id='id'
              defaultValue={idrmutl}
              label='Read Only'
              type='text'
              sx={{ m: 1, width: '20ch' }}
              variant='standard'
            />
            {/* email */}
            <TextField
              autoFocus
              margin='dense'
              id='email'
              defaultValue={email}
              label='email'
              type='email'
              sx={{ m: 1, width: '20ch' }}
              variant='standard'
            />
            {/* status */}
            <TextField
              autoFocus
              margin='dense'
              id='status'
              defaultValue={status}
              label='สถานะ'
              InputProps={{
                readOnly: true,
              }}
              type='text'
              sx={{ m: 1, width: '20ch' }}
              variant='standard'
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
DialogStudent.propTypes = {
  prefix: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  Status: PropTypes.bool,
  idrmutl: PropTypes.string,
  email: PropTypes.string,
  status: PropTypes.string,
  curriculum: PropTypes.string,
  section: PropTypes.string,
  birthday: PropTypes.string,
  nationality: PropTypes.string,
  religion: PropTypes.string,
  handleClose: PropTypes.func,
};
export default DialogStudent;
