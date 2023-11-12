import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2/src/sweetalert2.js';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import prefixData from '../../../api/dummy/prefixData';
import { hostBackend } from '../../../../env';

function CooperativeFrom() {
  const [phone, setPhone] = useState('');
  const [selecteCooperative, SetCooperative] = useState('');
  const [selecteCooperativePhone, SetCooperativePhone] = useState('');
  const [selectePrefix, SetPrefix] = useState('');
  const [selecteFirst, SetFirstname] = useState('');
  const [selecteLast, SetLastname] = useState('');
  const [selecteCooperativeTopic, SetCooperativeTopic] = useState('');
  const [selecteCooperativeContent, SetCooperativeContent] = useState('');

  const formatPhoneNumber = (input) => {
    const digits = input.replace(/\D/g, ''); // Remove non-numeric characters
    const formatted = digits.replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3');
    return formatted;
  };

  const handlePhoneChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = formatPhoneNumber(inputValue);
    setPhone(formattedValue);
    SetCooperativePhone(formattedValue);
  };

  const submitForm = (formData) => {
    if (
      formData.selecteCooperative === '' || formData.selecteCooperativeContent === '' || formData.selecteCooperativeTopic === '' || formData.selecteCooperativePhone === '' || formData.selecteFirst === '' || formData.selectePrefix === '' || formData.selecteLast === '') {
      Swal.fire('โปรดตรวจสอบข้อมูล ?', 'โปรดกรอกข้อมูลให้ครบถ้วน', 'question');
    } else {
      Swal.fire({
        title: 'ขอบคุณสำหรับการรายงาน',
        text: `เรื่อง ${formData.selecteCooperativeTopic}`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ส่งรายงาน',
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(formData);
          axios
            .post(`${hostBackend}/api/addReport_graduate`, {
              SelecteCooperative: formData.selecteCooperative,
              SelecteCooperativePhone: formData.selecteCooperativePhone,
              SelectePrefix: formData.selectePrefix,
              SelecteFirst: formData.selecteFirst,
              SelecteLast: formData.selecteLast,
              SelecteCooperativeTopic: formData.selecteCooperativeTopic,
              SelecteCooperativeContent: formData.selecteCooperativeContent,
            })
            .then((data) => {
              console.log(data);
              if (data.status === 200) {
                let timerInterval;
                Swal.fire({
                  title: 'ขอบคุณสำหรับการรายงาน',
                  html: 'หากมีเราตรวจสอบการรายงาน หากมีข้อสงสัยทางเราจะติดต่อกลับ',
                  timer: 2000,
                  timerProgressBar: true,
                  didOpen: () => {
                    Swal.showLoading();
                    const b = Swal.getHtmlContainer().querySelector('b');
                    timerInterval = setInterval(() => {
                      b.textContent = Swal.getTimerLeft();
                    }, 100);
                  },
                  willClose: () => {
                    clearInterval(timerInterval);
                    window.location.reload();
                  },
                });
              }
            });
        }
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm({
      selecteCooperative,
      selecteCooperativePhone,
      selectePrefix,
      selecteFirst,
      selecteLast,
      selecteCooperativeTopic,
      selecteCooperativeContent,
    });
  };

  const resetForm = () => {
    window.location.reload();
  };
  return (
    <>
      <header>
        <Typography
          variant='h4'
          sx={{
            marginBottom: '2%',
            textAlign: 'center',
            background:
              'linear-gradient(94deg, rgba(255,155,123,1) 44%, rgba(254,111,65,1) 48%)',
            backgroundClip: 'text',
            color: 'transparent',
            fontWeight: 700,
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))',
          }}>
          รายงานบัณฑิตสำหรับสถานประกอบการ
        </Typography>
      </header>
      <section>
        <Card
          sx={{
            // height: '100vh',
            // border: '2px solid red',
            width: '700px',
            margin: 'auto',
            padding: '4%',
            textAlign: 'left',
          }}>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}>
              <Typography fontSize={20}>ระบุชื่อสถานประกอบการ</Typography>
              <TextField
                id='name_cooperative'
                autoFocus
                placeholder={'บริษัท แอปเปิ้ล จำกัดมหาชน'}
                variant='standard'
                sx={{ m: 1, width: '25ch' }}
                fontSize={20}
                onChange={(event) => SetCooperative(event.target.value)}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}>
              <Typography fontSize={20}>ระบุเบอร์โทรติดต่อ</Typography>
              <TextField
                id='phone_cooperative'
                autoFocus
                placeholder='000-000-000'
                variant='standard'
                sx={{ m: 1, width: '25ch', marginLeft: '8%' }}
                fontSize={20}
                value={phone}
                onChange={handlePhoneChange}
                inputProps={{
                  maxLength: 12, // Limit input to 12 characters
                }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <Typography fontSize={20}>ระบุชื่อบัณฑิต</Typography>
              <TextField
                select
                margin='dense'
                id='prefix'
                // defaultValue={prefix}
                label='คำนำหน้า'
                type='text'
                onChange={(event) => SetPrefix(event.target.value)}
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
                onChange={(event) => SetFirstname(event.target.value)}
                placeholder='ชื่อจริง'
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
                onChange={(event) => SetLastname(event.target.value)}
                placeholder='นามสกุล'
                label='นามสกุล'
                type='text'
                sx={{ m: 1, width: '20ch' }}
                variant='standard'
              />
            </Box>
            <Box
              component='form'
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
              noValidate
              autoComplete='off'>
              <Typography fontSize={20}>เรื่องที่ต้องการรายงาน</Typography>
              <TextField
                id='topic'
                multiline
                maxRows={4}
                label=''
                placeholder={'เช่น ความประพฤติ หรือ เสริมความรู้'}
                variant='standard'
                sx={{ m: 1, width: '45ch' }}
                fontSize={20}
                onChange={(event) => SetCooperativeTopic(event.target.value)}
              />
            </Box>
            <Box
              component='form'
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
              noValidate
              autoComplete='off'>
              <Typography fontSize={20}>รายละเอียดการรายงาน</Typography>
              <TextField
                id='contect'
                multiline
                maxRows={4}
                label=''
                variant='standard'
                sx={{ m: 1, width: '45ch' }}
                fontSize={20}
                onChange={(event) => SetCooperativeContent(event.target.value)}
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'end', m: 1 }}>
              <Button onClick={resetForm}>Cancel</Button>
              <Button type='submit'>Submit</Button>
            </Box>
          </form>
        </Card>
      </section>
    </>
  );
}

export default CooperativeFrom;
