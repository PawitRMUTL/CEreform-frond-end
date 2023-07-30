/** @format */

import { Typography, Box, Button } from '@mui/material';
import React from 'react';
import imagePresentaion from '../../../../public/images/CE-Coures.png';
import hand from '../../../../public/images/hand.png';
import { Footer } from '../../../components';

import './styles.css';

function StrutureCE() {
  return (
    <>
      <header>
        <Box
          sx={{
            textAlign: 'center',
            background:
              'linear-gradient(94deg, rgba(255,155,123,1) 46%, rgba(254,111,65,1) 50%)',
            backgroundClip: 'text',
            color: 'transparent',
            fontWeight: 600,
            filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1))',
            fontSize: '32px',
          }}>
          หลักสูตรวิศวกรรมคอมพิวเตอร์ 4 ปี
        </Box>
      </header>
      <section className='section'>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            // border: '1px solid red',
            flexWrap: 'wrap',
          }}>
          <div style={{ width: '400px', height: '330px' }}>
            <img src={imagePresentaion} style={{ height: '100%' }} />
          </div>
          <div className='BoxPayment'>
            <div>
              <img src={hand} />
            </div>
            <div>
              <Typography fontWeight={500} fontSize={24}>
                ค่าธรรมเนียมการศึกษา
              </Typography>
              <Typography fontSize={24} fontWeight={500}>
                16,000
              </Typography>
              <Typography fontSize={24} fontWeight={500}>
                บาท / ภาคเรียน
              </Typography>
            </div>
          </div>
        </div>
        <div
          style={{
            height: '80px',
          }}>
          <Button className='button' href='/Coures-CPE-detail'>
            ดูโครงสร้างหลักสูตร
          </Button>
        </div>
        <div
          style={{
            width: '100%',
            marginBottom: '2%',

            // border: '1px solid red',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <div
            style={{
              width: '150px',
              height: '3px',
              background: 'linear-gradient(90deg, #FE6439 0%, #EBAA48 100%)',
              marginRight: '10px',
            }}
          />
          <Typography fontSize={20} textAlign={'right'}>
            ทำไมต้องเรียน วศ.บ. วิศวกรรมคอมพิวเตอร์ ?
          </Typography>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
          <Typography fontSize={16} textAlign={'right'} width={510}>
            หลักสูตรวิศวกรรมคอมพิวเตอร์มุ่งสร้างวิศวกรคอมพิวเตอร์
            ที่สามารถปฏิบัติงานในภาคธุรกิจ ได้อย่างมีประสิทธิผล
            หลักสูตรเล็งเห็นความสำคัญของคณิตศาสตร์และทฤษฎีด้านวิทยาการคอมพิวเตอร์
            ซึ่งเป็นพื้นฐานที่สำคัญของการแก้ปัญหาโดยใช้คอมพิวเตอร์
            จึงได้จัดให้เรียนรายวิชาในกลุ่มนี้อย่างเพียงพอ ได้แก่
            การเขียนโปรแกรม โครงสร้างข้อมูลและอัลกอริทึม การพัฒนาซอฟต์แวร์
            สถิติและความน่าจะเป็น พีชคณิตเชิงเส้น โครงสร้างไม่ต่อเนื่อง
            (Discrete Structure) ทฤษฎีการคำนวณ
            ซึ่งเป็นรากฐานที่สำคัญของการคิดเชิงคอมพิวเตอร์และการเรียนวิทยาการคอมพิวเตอร์ขั้นสูง
            เช่น Data Science ปัญญาประดิษฐ์ (AI) หรืออื่นๆ ต่อไป
          </Typography>
        </div>
        <div
          style={{
            marginTop: '6%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          <div>
            <Typography fontWeight={500} fontSize={20}>
              โอกาสหางาน / อาชีพที่รองรับ ?
            </Typography>
            <li>วิศวกรคอมพิวเตอร์</li>
            <li>นักวิชาการคอมพิวเตอร์</li>
            <li>ผู้พัฒนาซอฟต์แวร์/วิศวกรซอฟต์แวร์</li>
            <li>วิศวกรวิเคราะห์/ออกแบบ/พัฒนาระบบสารสนเทศ</li>
            <li>วิศวกรเครือข่าย</li>
            <li>วิศวกรระบบฝังตัว</li>
            <li>วิศวกรควบคุมดูแลระบบคอมพิวเตอร์</li>
            <li>วิศวกรระบบความปลอดภัยเทคโนโลยีสารสนเทศ</li>
            <li>นักพัฒนาฐานข้อมูล</li>
            <li>วิศวกรปัญญาประดิษฐ์</li>
          </div>
          <div>
            <img
              src={imagePresentaion}
              style={{ width: 400, objectFit: 'cover' }}
            />
          </div>
        </div>
        <div
          style={{
            width: '100%',
            marginBottom: '2%',
            display: 'flex',
            alignItems: 'center',
            marginTop: '4%',
          }}>
          <Typography fontSize={20} textAlign={'right'}>
            คุณสมบัติของผู้เรียนหรือผู้ที่สนใจ
          </Typography>
          <div
            style={{
              width: '150px',
              height: '3px',
              background: 'linear-gradient(90deg, #FE6439 0%, #EBAA48 100%)',
              marginLeft: '10px',
            }}
          />
        </div>
        <Typography sx={{ marginBottom: '4%' }}>
          เป็นนักศึกษาที่เป็นนักศึกษาไทยและนักศึกษาต่างประเทศที่มีสมรรถนะในการใช้ภาษาไทยในระดับดีและเป็นผู้ที่สำเร็จการศึกษาตั้งแต่
          นักศึกษาที่สำเร็จการศึกษาระดับ มัธยมศึษาปีที่ 6 (ม.6) /
          ประกาศนียบัตรวิชาชีพขั้นสูง (ปวส.) / ประกาศนียบัตร์วิชาชีพ (ปวช)
        </Typography>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default StrutureCE;
