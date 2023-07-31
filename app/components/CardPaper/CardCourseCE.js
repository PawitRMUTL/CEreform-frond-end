/** @format */

import React from 'react';
import {
  Box, Button, Card, Typography
} from '@mui/material';
import student from '../../../public/images/whatareyou/graduation-cap.png';
import './index.css';

function CasdShowFaculy() {
  return (
    <>
      <Card
        sx={{
          width: '76%',
          height: '500px',
          margin: 'auto',
          marginBottom: '2%',
          paddingTop: '6px',
        }}>
        <Box className='BoxLayout'>
          <div className='layout' style={{ padding: 20 }}>
            <div className='BoxIcon'>
              <img src={student} className='iconIMG' />
            </div>
            <div style={{ marginTop: '5%', textAlign: 'center' }}>
              <Typography fontWeight={600} fontSize={18} marginBottom={4}>
                หลักสูตรวิศวกรรมศาสตร์บัณฑิต
              </Typography>
              <Typography>สาขาวิชาวิศวกรรมคอมพิวเตอร์</Typography>
              <Typography>วิศวกรรมคอมพิวเตอร์ หลักสูตร 4 ปี</Typography>
            </div>
          </div>
          <div className='layoutRight'>
            <Typography fontSize={18} fontWeight={600} marginBottom={1}>
              ทักษะพื้นฐานที่ควรมี
            </Typography>
            <Typography
              sx={{
                textIndent: '35px',
                // width: '400px',
                wordWrap: 'break-word',
              }}>
              คณิตศาสตร์พื้นฐาน, ภาษาโปรแกรมพื้นฐาน, ภาษาอังกฤษ,
              ออกแบบระบบคอมพิวเตอร์เบื้องต้น, มีความรู้เรื่องอุปกรณ์คอมพิวเตอร์,
              ออกแบบและวางระบบคอมพิวเตอร์ได้
            </Typography>
            <Typography fontSize={18} fontWeight={600} marginBottom={1}>
              อาชีพที่รองรับ
            </Typography>
            <Typography
              sx={{
                textIndent: '35px',
                // width: '400px',
                wordWrap: 'break-word',
              }}>
              วิศวกรคอมพิวเตอร์, นักวิเคราะห์ระบบคอมพิวเตอร์,
              ผู้ดูแลระบบและเครือข่าย, วิศวกรปัญญาประดิษฐ์
            </Typography>
          </div>
        </Box>
        <Box className='ButtonStyle'>
          <Typography>
            หมายเหตุ : เหมาะสำหรับ นักศึกษา ที่สำเร็จการศึกษาระดับ ม.6/ ปวช.
            /ปวส.
          </Typography>
          <Button
            style={{ color: '#FE6439', fontSize: '14px' }}
            href='/Coures-CPE'>
            เข้าดูหลักสูตรเพิ่มเติม
          </Button>
        </Box>
      </Card>
      <Card
        sx={{
          width: '76%',
          height: '500px',
          margin: 'auto',
          marginBottom: '2%',
          paddingTop: '6px',
        }}>
        <Box className='BoxLayout'>
          <div className='layout' style={{ padding: 20 }}>
            <div className='BoxIcon'>
              <img src={student} className='iconIMG' />
            </div>
            <div style={{ marginTop: '5%', textAlign: 'center' }}>
              <Typography fontWeight={600} fontSize={18} marginBottom={4}>
                หลักสูตรวิศวกรรมศาสตร์บัณฑิต
              </Typography>
              <Typography>สาขาวิชาวิศวกรรมคอมพิวเตอร์</Typography>
              <Typography>วิศวกรรมซอฟต์แวร์ หลักสูตร 4 ปี</Typography>
            </div>
          </div>
          <div className='layoutRight'>
            <Typography fontSize={18} fontWeight={600} marginBottom={1}>
              ทักษะพื้นฐานที่ควรมี
            </Typography>
            <Typography
              sx={{
                textIndent: '35px',
                // width: '400px',
                wordWrap: 'break-word',
              }}>
              คณิตศาสตร์พื้นฐาน, ภาษาคอมพิวเตอร์พื้นฐาน C++, C#, Java
              scrip,React , ภาษาอังกฤษ, ชุดคำสั่ง และโครงสร้างข้อมูล เป็นต้น
            </Typography>
            <Typography fontSize={18} fontWeight={600} marginBottom={1}>
              อาชีพที่รองรับ
            </Typography>
            <Typography
              sx={{
                textIndent: '35px',
                // width: '400px',
                wordWrap: 'break-word',
              }}>
              นักพัฒนาซอฟต์แวร์ ,นักออกแบบ UX/UI ,นักออกแบบสถาปัตยกรรมซอฟต์แวร์
              ,นักผลิตสื่อดิจิทัล
            </Typography>
          </div>
        </Box>
        <Box className='ButtonStyle'>
          <Typography>
            หมายเหตุ : เหมาะสำหรับ นักศึกษา ที่สำเร็จการศึกษาระดับ ม.6/ ปวช.
            /ปวส.
          </Typography>
          <Button href='/app/pages/ComingSoon' style={{ color: '#FE6439' }}>
            เข้าดูหลักสูตรเพิ่มเติม
          </Button>
        </Box>
      </Card>
    </>
  );
}

export default CasdShowFaculy;
