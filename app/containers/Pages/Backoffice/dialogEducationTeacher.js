import React, { useEffect, useState } from 'react';
// import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import { hostBackend } from '../../../../env';
// import MenuItem from '@mui/material/MenuItem';

function DialogEducationTeacher(props) {
  const {
    Status, handleClose, Bachelor, Master, Doctor
  } = props;
  const [SelectBachelorMajor, SetBachelorMajor] = useState(''); // select สาขา วิศวกรรมไฟฟ้า
  const [SelectBachelorCuriculum, SetBachelorCuriculum] = useState(''); // select หลักสูตร วิศวกรรมคอม
  const [SelectBachelorYear, SetBachelorYear] = useState('');
  const [SelectBachelorUniversity, SetBachelorUniversity] = useState('');
  const [SelectMasterMajor, SetMasterMajor] = useState(''); // select สาขา วิศวกรรมไฟฟ้า
  const [SelectMasterCuriculum, SetMasterCuriculum] = useState(''); // select หลักสูตร วิศวกรรมคอม
  const [SelectMasterYear, SetMasterYear] = useState('');
  const [SelectMasterUniversity, SetMasterUniversity] = useState('');
  const [SelectDoctorMajor, SetDoctorMajor] = useState(''); // select สาขา วิศวกรรมไฟฟ้า
  const [SelectDoctorCuriculum, SetDoctorCuriculum] = useState(''); // select หลักสูตร วิศวกรรมคอม
  const [SelectDoctorYear, SetDoctorYear] = useState('');
  const [SelectDoctorUniversity, SetDoctorUniversity] = useState('');
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

  const [open, setOpen] = useState(false);
  // Set Defalt Data
  useEffect(() => {
    if (Bachelor === undefined || Bachelor.length === 0) {
      SetBachelorMajor('');
      SetBachelorCuriculum('');
      SetBachelorYear('');
      SetBachelorUniversity('');
    } else if (Bachelor !== undefined) {
      // console.log('not emty');
      SetBachelorMajor(Bachelor.subject_eng);
      SetBachelorCuriculum(Bachelor.subject);
      SetBachelorYear(Bachelor.graduates_years);
      SetBachelorUniversity(Bachelor.university);
    }
    // =================
    if (Master === undefined || Master.length === 0) {
      SetMasterMajor('');
      SetMasterCuriculum('');
      SetMasterYear('');
      SetMasterUniversity('');
    } else if (Master !== undefined) {
      SetMasterMajor(Master.subject_eng);
      SetMasterCuriculum(Master.subject);
      SetMasterYear(Master.graduates_years);
      SetMasterUniversity(Master.university);
    }
    // =================
    if (Doctor === undefined || Doctor.length === 0) {
      SetDoctorMajor('');
      SetDoctorCuriculum('');
      SetDoctorYear('');
      SetDoctorUniversity('');
    } else if (Doctor !== undefined) {
      SetDoctorMajor(Doctor.subject_eng);
      SetDoctorCuriculum(Doctor.subject);
      SetDoctorYear(Doctor.graduates_years);
      SetDoctorUniversity(Doctor.university);
    }
  }, [open]);
  // --------------------------------------------
  useEffect(() => {
    setOpen(Status);
  }, [Status]);
  // --------------------------------------------

  const submitForm = (formData) => {
    const Idowner = Bachelor.owner_id;
    const IdBachelor = Bachelor.teacher_education_id;
    const IdMaster = Master.teacher_education_id;
    const IdDocter = Doctor.teacher_education_id;
    console.log(formData);
    axios
      .post(`${hostBackend}/api/UpdateTeacher_education`, {
        IDowner: Idowner,
        IDBachelor: IdBachelor,
        IDMaster: IdMaster,
        IDDocter: IdDocter,
        // Bachelor
        BachelorCuriculum: formData.SelectBachelorCuriculum,
        BachelorMajor: formData.SelectBachelorMajor,
        BachelorYear: formData.SelectBachelorYear,
        BachelorUniversity: formData.SelectBachelorUniversity,
        // Master
        MasterCuriculum: formData.SelectMasterCuriculum,
        MasterMajor: formData.SelectMasterMajor,
        MasterYear: formData.SelectMasterYear,
        MasterUniversity: formData.SelectMasterUniversity,
        // Doctor
        DoctorCuriculum: formData.SelectDoctorCuriculum,
        DoctorMajor: formData.SelectDoctorMajor,
        DoctorYear: formData.SelectDoctorYear,
        DoctorUniversity: formData.SelectDoctorUniversity,
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
      SelectBachelorCuriculum,
      SelectBachelorMajor,
      SelectBachelorUniversity,
      SelectBachelorYear,
      SelectMasterCuriculum,
      SelectMasterMajor,
      SelectMasterYear,
      SelectMasterUniversity,
      SelectDoctorUniversity,
      SelectDoctorCuriculum,
      SelectDoctorMajor,
      SelectDoctorYear,
    });
  };
  const handleCanCel = () => {
    setOpen(!Status);
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>แก้ไขวุฒิการศึกษา</DialogTitle>
          <DialogContent>
            <DialogContentText>
              โปรดใส่ข้อมูลที่เป็นจริง และ ถูกต้อง / Please Insert real data .
            </DialogContentText>
            {/* ปริญญาตรี */}
            <Typography
              fontSize={18}
              fontWeight={500}
              sx={{ marginTop: '8px' }}>
              วุฒิปริญาตรี
            </Typography>
            <TextField
              id='Major'
              autoFocus
              multiline
              maxRows={2}
              label='Major'
              defaultValue={Bachelor?.subject_eng}
              variant='standard'
              sx={{ m: 1, width: '20ch' }}
              onChange={(event) => SetBachelorMajor(event.target.value)}
            />
            <TextField
              id='Curirulum'
              autoFocus
              multiline
              maxRows={2}
              label='Curirulum'
              defaultValue={Bachelor?.subject}
              variant='standard'
              sx={{ m: 1, width: '20ch' }}
              onChange={(event) => SetBachelorCuriculum(event.target.value)}
            />
            <TextField
              id='University'
              autoFocus
              multiline
              maxRows={2}
              label='University'
              defaultValue={Bachelor?.university}
              variant='standard'
              sx={{ m: 1, width: '20ch' }}
              onChange={(event) => SetBachelorUniversity(event.target.value)}
            />
            <TextField
              id='graduates_years'
              autoFocus
              helperText='ระบุเป็น พุทธศักราช'
              type='number'
              label='Graduates Years'
              defaultValue={Bachelor?.graduates_years}
              variant='standard'
              onChange={(event) => SetBachelorYear(event.target.value)}
              sx={{ m: 1, width: '20ch' }}
              inputProps={{
                maxLength: 4, // Limit input to 4 characters
              }}
            />
            <Divider />
            {/* ปริญญาโท */}
            <Typography
              fontSize={18}
              fontWeight={500}
              sx={{ marginTop: '8px' }}>
              วุฒิปริญาโท
            </Typography>
            <TextField
              id='Major'
              autoFocus
              multiline
              maxRows={2}
              label='Major'
              defaultValue={Master?.subject_eng}
              variant='standard'
              sx={{ m: 1, width: '20ch' }}
              onChange={(event) => SetMasterMajor(event.target.value)}
            />
            <TextField
              id='Curirulum'
              autoFocus
              multiline
              maxRows={2}
              label='Curirulum'
              defaultValue={Master?.subject}
              variant='standard'
              sx={{ m: 1, width: '20ch' }}
              onChange={(event) => SetMasterCuriculum(event.target.value)}
            />
            <TextField
              id='University'
              autoFocus
              multiline
              maxRows={2}
              label='University'
              defaultValue={Master?.university}
              variant='standard'
              sx={{ m: 1, width: '20ch' }}
              onChange={(event) => SetMasterUniversity(event.target.value)}
            />
            <TextField
              id='graduates_years'
              autoFocus
              helperText='ระบุเป็น พุทธศักราช'
              type='number'
              label='Graduates Years'
              defaultValue={Master?.graduates_years}
              variant='standard'
              onChange={(event) => SetMasterYear(event.target.value)}
              sx={{ m: 1, width: '20ch' }}
              inputProps={{
                maxLength: 4, // Limit input to 4 characters
              }}
            />
            <Divider />
            {/* ปริญญาเอก */}
            <Typography
              fontSize={18}
              fontWeight={500}
              sx={{ marginTop: '8px' }}>
              วุฒิปริญาเอก
            </Typography>
            <TextField
              id='Major'
              autoFocus
              multiline
              maxRows={2}
              label='Major'
              defaultValue={Doctor?.subject_eng}
              onChange={(event) => SetDoctorMajor(event.target.value)}
              variant='standard'
              sx={{ m: 1, width: '20ch' }}
            />
            <TextField
              id='Curirulum'
              autoFocus
              multiline
              maxRows={2}
              label='Curirulum'
              defaultValue={Doctor?.subject}
              variant='standard'
              sx={{ m: 1, width: '20ch' }}
              onChange={(event) => SetDoctorCuriculum(event.target.value)}
            />
            <TextField
              id='University'
              autoFocus
              multiline
              maxRows={2}
              label='University'
              defaultValue={Doctor?.university}
              variant='standard'
              sx={{ m: 1, width: '20ch' }}
              onChange={(event) => SetDoctorUniversity(event.target.value)}
            />
            <TextField
              id='graduates_years'
              autoFocus
              helperText='ระบุเป็น พุทธศักราช'
              type='number'
              label='Graduates Years'
              defaultValue={Doctor?.graduates_years}
              variant='standard'
              sx={{ m: 1, width: '20ch' }}
              onChange={(event) => SetDoctorYear(event.target.value)}
              inputProps={{
                maxLength: 4, // Limit input to 4 characters
              }}
            />
            <Divider />
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
DialogEducationTeacher.propsTypes = {
  Status: PropTypes.bool,
  handleClose: PropTypes.func,
  Bachelor: PropTypes.any,
  Master: PropTypes.any,
  Doctor: PropTypes.any,
};
export default DialogEducationTeacher;
