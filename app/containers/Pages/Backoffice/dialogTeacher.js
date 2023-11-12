import React, { useEffect, useState } from 'react';
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
import Swal from 'sweetalert2';
import prefixData from '../../../api/dummy/prefixData';
import religionData from '../../../api/dummy/religionData';
import nationalityData from '../../../api/dummy/nationalityData';
import { hostBackend } from '../../../../env';
// CommonJS
function DialogTeacher(props) {
  const {
    idteacher,
    thunmbDate,
    Status,
    handleClose,
    prefix,
    firstname,
    lastname,
    idrmutl,
    email,
    status,
    birthday,
    nationality,
    religion,
    phone,
  } = props;
  const [selectePrefix, SetChagePrefix] = useState('');
  const [selecteFirstname, SetChageFirstname] = useState('');
  const [selectLastname, SetChageLastname] = useState('');
  const [selectIdTeacher, SetChageIdTeacher] = useState('');
  const [selecteEmail, SetChageEmail] = useState('');
  const [selectPhone, SetChagePhone] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedNationality, SetSelectedNationality] = useState('');
  const [selectedReligion, SetSelectedReligion] = useState('');
  const [open, setOpen] = useState(false);
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
  useEffect(() => {
    setOpen(Status);
  }, [Status]);

  useEffect(() => {
    // SET DATE -----------------------------------
    const originalDate = new Date(thunmbDate);
    const year = originalDate.getUTCFullYear();
    const month = String(originalDate.getUTCMonth() + 1).padStart(2, '0');
    const day = String(originalDate.getUTCDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    SetChagePrefix(prefix);
    SetChageFirstname(firstname);
    SetChageLastname(lastname);
    SetChageIdTeacher(idrmutl);
    SetChageEmail(email);
    setSelectedDate(formattedDate);
    SetSelectedNationality(nationality);
    SetSelectedReligion(religion);
    SetChagePhone(phone);
  }, [open]);
  const submitForm = (formData) => {
    axios
      .post(`${hostBackend}/api/UpdateTeacher`, {
        id: idteacher,
        prefix: formData.selectePrefix,
        firstname: formData.selecteFirstname,
        lastname: formData.selectLastname,
        idrmutl: formData.selectIdTeacher,
        email: formData.selecteEmail,
        date: formData.selectedDate,
        religion: formData.selectedReligion,
        nationality: formData.selectedNationality,
        phone: formData.selectPhone,
      })
      .then((data) => {
        if (data.status === 200) {
          setOpen(!Status);
        }
        setTimeout(() => {
          Toast.fire({
            icon: 'success',
            title: 'Update successfully',
          });
        }, 500);
      })
      .catch(Error);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm({
      selectePrefix,
      selecteFirstname,
      selectLastname,
      selectIdTeacher,
      selecteEmail,
      selectedDate,
      selectedReligion,
      selectedNationality,
      selectPhone,
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
            {/* Prefix */}
            <TextField
              select
              margin='dense'
              id='prefix'
              defaultValue={prefix}
              label='คำนำหน้า'
              type='text'
              onChange={(event) => SetChagePrefix(event.target.value)}
              variant='standard'
              sx={{ m: 1, width: '10ch' }}>
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
              onChange={(event) => SetChageFirstname(event.target.value)}
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
              onChange={(event) => SetChageLastname(event.target.value)}
              defaultValue={lastname}
              label='นามสกุล'
              type='text'
              sx={{ m: 1, width: '20ch' }}
              variant='standard'
            />
            {/* id Teacher */}
            <TextField
              autoFocus
              margin='dense'
              id='id'
              defaultValue={idrmutl}
              onChange={(event) => {
                const inputID = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                const truncatedID = inputID.slice(0, 10); // Limit to 10 digits
                SetChageIdTeacher(truncatedID);
              }}
              label='รหัสอาจารย์'
              type='text'
              sx={{ m: 1, width: '20ch' }}
              variant='standard'
              inputProps={{
                maxLength: 10, // Limit input to 10 characters
              }}
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
            {/* phone */}
            <TextField
              autoFocus
              margin='dense'
              id='phone'
              defaultValue={phone}
              onChange={(event) => {
                const inputPhoneNumber = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                let formattedPhoneNumber = '';
                for (let i = 0; i < inputPhoneNumber.length; i++) {
                  if (i === 3 || i === 7) {
                    formattedPhoneNumber += '-';
                  }
                  formattedPhoneNumber += inputPhoneNumber[i];
                }
                SetChagePhone(formattedPhoneNumber);
              }}
              label='Phone'
              type='tel'
              sx={{ m: 1, width: '20ch' }}
              variant='standard'
              inputProps={{
                maxLength: 10, // Limit input to 10 characters
              }}
            />
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
            />{' '}
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
DialogTeacher.propTypes = {
  idteacher: PropTypes.string,
  thunmbDate: PropTypes.any,
  prefix: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  Status: PropTypes.bool,
  idrmutl: PropTypes.string,
  email: PropTypes.string,
  status: PropTypes.string,
  birthday: PropTypes.string,
  nationality: PropTypes.string,
  religion: PropTypes.string,
  phone: PropTypes.string,
  handleClose: PropTypes.func,
};
export default DialogTeacher;
