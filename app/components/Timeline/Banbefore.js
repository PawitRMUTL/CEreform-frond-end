/** @format */

import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import freshy from '../../../public/images/freshy.jpg';

function Banbefore() {
  return (
    <>
      <Box
        sx={{
          marginTop: '3%',
          width: '100%',
          height: '380px',
          overflow: 'hidden',
          display: 'flex',
          position: 'relative',
        }}>
        <img
          src={freshy}
          style={{
            width: '100%',
            height: '100%',
            zIndex: 0,
            position: 'absolute',
            display: 'block',
          }}
        />
        <div
          style={{
            backgroundColor: '#000',
            width: '100%',
            height: '100%',
            zIndex: 1,
            position: 'absolute',
            display: 'block',
            opacity: 0.8,
          }}></div>
        <div
          style={{
            zIndex: 2,
            width: '75%',
            height: '35%',
            margin: 'auto',
            textAlign: 'center',
            padding: 20,
            position: 'relative',
            // border: '2px solid red',
            color: '#FFF',
          }}>
          <Typography variant='h4'>
            สมัครเรียนเพื่อเป็นส่วนหนึ่งของครอบครัว CPE กับเรา
          </Typography>
          <div style={{ position: 'absolute', top: '70%', left: '50%' }}>
            <Button variant='contained'>ลงทะเบียน Entrance</Button>
          </div>
        </div>
        <div
          style={{
            zIndex: 2,
            width: '25%',
            height: '45%',
            textAlign: 'right',
            margin: 'auto',
            padding: 20,
            marginRight: 40,
            position: 'relative',
            // border: '2px solid red',
            color: '#FFF',
          }}>
          <Typography variant='h5'>ค่าธรรมเนียมการศึกษา</Typography>
          <Typography variant='h5'>16,000 / ภาคเรียน</Typography>
          <Typography
            sx={{ fontSize: '12px', lineHeight: 5, color: '#A4A4A4' }}>
            *ค่าธรรมเนียมการศึกษาอาจมีการเปลี่ยนแปลง
          </Typography>
          <div style={{ position: 'absolute', right: 18, bottom: 0 }}>
            <Button variant='contained'>อ่านเพิ่มเติม</Button>
          </div>
        </div>
      </Box>
    </>
  );
}
export default Banbefore;
