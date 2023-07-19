/** @format */
import { Card, Box, Typography } from '@mui/material';
import React from 'react';
import './styles.css';
import AOS from 'aos';

AOS.init();
function futureCareerSubport() {
  return (
    <>
      <div className='Career'>
        <Box
          className='CareerSubject'
          sx={{ marginBottom: '2%' }}
          data-aos='fade-up'
          data-aos-duration='3000'>
          <Card className='CareerCard'>
            <Typography>โปรแกรมเมอร์</Typography>
          </Card>
          <Card className='CareerCard'>
            <Typography>นักออกแบบสถาปัตยกรรมซอฟต์แวร์</Typography>
          </Card>
          <Card className='CareerCard'>
            <Typography>นักพัฒนาเว็บไซต์และสื่อผสม</Typography>
          </Card>
          <Card className='CareerCard'>
            <Typography>ผู้ดูแลระบบเครือข่าย</Typography>
          </Card>
        </Box>
        <Box
          className='CareerSubject'
          sx={{ marginBottom: '2%' }}
          data-aos='fade-up'
          data-aos-duration='1000'>
          <Card className='CareerCard'>
            <Typography>วิศวกรรมคอมพิวเตอร์</Typography>
          </Card>
          <Card className='CareerCard'>
            <Typography>วิศวกรปัญญาประดิษฐ์</Typography>
          </Card>
          <Card className='CareerCard'>
            <Typography>ผู้ดูแลระบบเครือข่าย</Typography>
          </Card>
          <Card className='CareerCard'>
            <Typography>นักพัฒนาซอฟแวร์</Typography>
          </Card>
        </Box>
        <Box
          className='CareerSubject'
          sx={{ marginBottom: '2%' }}
          data-aos='fade-up'
          data-aos-duration='3000'>
          <Card className='CareerCard'>
            <Typography>นักออกแบบ UX/UI</Typography>
          </Card>
          <Card className='CareerCard'>
            <Typography>นักวิชาการคอมพิวเตอร์</Typography>
          </Card>
          <Card className='CareerCard'>
            <Typography>นักผลิตสื่อดิจิทัล</Typography>
          </Card>
          <Card className='CareerCard'>
            <Typography>นักวิเคราะห์ระบบคอมพิวเตอร์</Typography>
          </Card>
        </Box>
      </div>
    </>
  );
}

export default futureCareerSubport;
