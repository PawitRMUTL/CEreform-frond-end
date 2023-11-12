import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import religionData from '../../../api/dummy/religionData';
import nationalityData from '../../../api/dummy/nationalityData';
import { hostBackend } from '../../../../env';

function DialogStudent(props) {
  const {
    thunmbDate,
    Status,
    handleClose,
    prefix,
    firstname,
    lastname,
    idrmutl,
    email,
    status,
    curriculum,
    section,
    birthday,
    nationality,
    religion,
  } = props;

  const [open, setOpen] = useState(false);

  const [selecteEmail, SetChageEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedNationality, SetSelectedNationality] = useState('');
  const [selectedReligion, SetSelectedReligion] = useState('');

  useEffect(() => {
    const originalDate = new Date(thunmbDate);
    const year = originalDate.getUTCFullYear();
    const month = String(originalDate.getUTCMonth() + 1).padStart(2, '0');
    const day = String(originalDate.getUTCDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    // SetdateConvert(formattedDate);
    SetChageEmail(email);
    setSelectedDate(formattedDate);
    SetSelectedNationality(nationality);
    SetSelectedReligion(religion);
  }, [open]);

  useEffect(() => {
    setOpen(Status);
  }, [Status]);

  const submitForm = (formData) => {
    axios
      .post(`${hostBackend}/api/UpdateStudent`, {
        id: idrmutl,
        email: formData.selecteEmail,
        date: formData.selectedDate,
        religion: formData.selectedReligion,
        nationality: formData.selectedNationality,
      })
      .then((data) => {
        if (data.status === 200) {
          setOpen(!Status);
        }
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm({
      selecteEmail,
      selectedDate,
      selectedReligion,
      selectedNationality,
    });
  };
  const handleCanCel = () => {
    setOpen(!Status);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>แก้ไขข้อมูลส่วนตัว</DialogTitle>
          <DialogContent>
            <DialogContentText>
              โปรดใส่ข้อมูลที่เป็นจริง และ ถูกต้อง / Please Insert real data .
            </DialogContentText>
            <Box>
              {/* Prefix */}
              <TextField
                id='prefix'
                autoFocus
                label='คำนำหน้า'
                defaultValue={prefix}
                InputProps={{
                  readOnly: true,
                }}
                variant='standard'
                sx={{ m: 1, width: '10ch' }}
              />
              {/* frist_name */}
              <TextField
                autoFocus
                margin='dense'
                id='firstname'
                defaultValue={firstname}
                InputProps={{
                  readOnly: true,
                }}
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
                InputProps={{
                  readOnly: true,
                }}
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
                label='รหัสนักศึกษา'
                InputProps={{
                  readOnly: true,
                }}
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
                onChange={(event) => SetChageEmail(event.target.value)}
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
              {/* birthday */}
              <TextField
                autoFocus
                sx={{ m: 1, width: '20ch' }}
                variant='standard'
                margin='dense'
                id='date-picker'
                label='Select Date'
                type='date'
                helperText={`Default date is ${birthday}`}
                defaultValue={birthday}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  inputProps: {
                    max: birthday, // Optional: restrict future dates
                  },
                }}
                onChange={(event) => {
                  setSelectedDate(event.target.value);
                  // const formattedDate = formatDate(event.target.value);
                  // console.log('Formatted date:', formattedDate);
                }}
              />
              {/* curriculum */}
              <TextField
                autoFocus
                margin='dense'
                id='status'
                defaultValue={curriculum}
                label='curriculum'
                InputProps={{
                  readOnly: true,
                }}
                type='text'
                sx={{ m: 1, width: '45ch' }}
                variant='standard'
              />
              {/* section */}
              <TextField
                autoFocus
                margin='dense'
                id='status'
                defaultValue={section}
                label='section'
                InputProps={{
                  readOnly: true,
                }}
                type='text'
                sx={{ m: 1, width: '30ch' }}
                variant='standard'
              />
              {/* nationality */}
              <TextField
                select
                margin='dense'
                id='status'
                defaultValue={nationality}
                label='nationality'
                type='text'
                sx={{ m: 1, width: '20ch' }}
                variant='standard'
                onChange={
                  (event) => SetSelectedNationality(event.target.value)
                  // ---------------------------------------------
                  // ---------------------------------------------
                }>
                {nationalityData.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              {/* religion */}
              <TextField
                select
                margin='dense'
                id='status'
                defaultValue={religion}
                label='religion'
                type='text'
                sx={{ m: 1, width: '20ch' }}
                variant='standard'
                onChange={(event) => SetSelectedReligion(event.target.value)}>
                {religionData.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCanCel}>Cancel</Button>
            <Button type='submit'>Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
DialogStudent.propTypes = {
  thunmbDate: PropTypes.any,
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
