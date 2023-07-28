/** @format */

import { Card, Typography, Box } from '@mui/material';
import React from 'react';
import AOS from 'aos';
// import { saveAs } from 'file-saver';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import PDF from '../../../public/images/pdf.png';
// ..
AOS.init();
function CardCourseStruture() {
  const [opennormal, setOpennormal] = React.useState(true);
  const [openspecific, setspecific] = React.useState(false);

  const handleOpen = () => {
    setOpennormal(!opennormal);
  };
  const handleopenspecific = () => {
    setspecific(!openspecific);
  };

  const Submit = () => {
    const pdfURL = '/Users/baconinhell/Desktop/dandelion-pro_v25/starter-project/Documenets/';
    const link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'หลักสูตรวิศวกรรมคอม.pdf'; // Specify the desired file name for the downloaded file.
    link.target = '_blank'; // Optional: Opens the link in a new tab/window.

    // Append the link to the document and programmatically click it to trigger the download.
    document.body.appendChild(link);
    link.click();

    // Clean up by removing the link element from the document.
    document.body.removeChild(link);
  };

  return (
    <>
      <Card
        sx={{
          padding: '1.5%',
          width: '100%',
          marginTop: '1%',
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'space-between',
          borderRadius: 4,
        }}>
        <div className='TextCredits'>
          <Typography fontWeight={500}>
            จำนวนหน่วยกิตตลอดหลักสูตร / Total Credits
          </Typography>
          <Typography fontWeight={500}>135 หน่วยกิต / Credits</Typography>
        </div>
        {/* Open Subject */}
        <div className='TextCredits'>
          <Typography fontWeight={500} onClick={handleOpen}>
            หมวดวิชาศึกษาทั่วไป
          </Typography>
          <Typography fontWeight={500}>30 หน่วยกิต / Credits</Typography>
        </div>
        {opennormal ? (
          <div
            data-aos='fade-up'
            data-aos-duration='2000'
            data-aos-anchor-placement='top-bottom'>
            <div className='subTextCreadit'>
              <div className='style'>
                <Typography fontWeight={500}>วิชาศึกษาทั่วไปบังคับ</Typography>
                <Typography fontWeight={500}>24 หน่วยกิต / Credits</Typography>
              </div>
              <div className='styleSub'>
                <Typography>กลุ่มวิชาภาษาและการสื่อสาร</Typography>
                <Typography>12 หน่วยกิต / Credits</Typography>
              </div>
              <div className='styleSub'>
                <Typography>กลุ่มวิชาสุขภาพ</Typography>
                <Typography>3 หน่วยกิต / Credits</Typography>
              </div>
              <div className='styleSub' style={{ marginBottom: '1%' }}>
                <Typography>กลุ่มวิชาบูรณาการ</Typography>
                <Typography>9 หน่วยกิต / Credits</Typography>
              </div>
              <div className='style'>
                <Typography fontWeight={500}>วิชาศึกษาทั่วไปเลือก</Typography>
                <Typography fontWeight={500}>6 หน่วยกิต / Credits</Typography>
              </div>
              <div className='styleSub'>
                <Typography>กลุ่มวิชาสังคมศาสตร์และมนุยศาสตร์</Typography>
                <Typography>3 หน่วยกิต / Credits</Typography>
              </div>
              <div className='styleSub'>
                <Typography>กลุ่มวิชาวิทยาศาสตร์และคณิตศาสตร์</Typography>
                <Typography>3 หน่วยกิต / Credits</Typography>
              </div>
            </div>
          </div>
        ) : null}
        {/* Open specific */}
        <div className='TextCredits'>
          <Typography fontWeight={500} onClick={handleopenspecific}>
            หมวดวิชาเฉพาะ
          </Typography>
          <Typography fontWeight={500}>99 หน่วยกิต / Credits</Typography>
        </div>
        {openspecific ? (
          <div
            data-aos='fade-up'
            data-aos-duration='2000'
            data-aos-anchor-placement='top-bottom'>
            <div className='subTextCreadit'>
              {/* heading */}
              <div className='style'>
                <Typography fontWeight={500}>
                  วิชาแกน (กลุ่มวิชาพื้นฐาน)
                </Typography>
                <Typography fontWeight={500}>32 หน่วยกิต / Credits</Typography>
              </div>
              {/* subtitle */}
              <div className='styleSub'>
                <Typography>กลุ่มพื้นฐานทางวิทยาศาสตร์และคณิตศาสตร์</Typography>
                <Typography>10 หน่วยกิต / Credits</Typography>
              </div>
              <div className='styleSub'>
                <Typography>กลุ่มพื้นฐานทางวิศวกรรมศาสตร์</Typography>
                <Typography>22 หน่วยกิต / Credits</Typography>
              </div>
              <div className='style' style={{ marginTop: '1%' }}>
                <Typography fontWeight={500}>
                  วิชาเฉพาะด้าน (กลุ่มวิชาชีพบังคับ)
                </Typography>
                <Typography fontWeight={500}>55 หน่วยกิต / Credits</Typography>
              </div>
              <div className='styleSub'>
                <Typography>กลุ่มฮาร์ดและสถาปัตยกรรมคอมพิวเตอร์</Typography>
                <Typography>14 หน่วยกิต / Credits</Typography>
              </div>
              <div className='styleSub'>
                <Typography>กลุ่มโครงสร้างพื้นฐานระบบ</Typography>
                <Typography>18 หน่วยกิต / Credits</Typography>
              </div>
              <div className='styleSub'>
                <Typography>กลุ่มเทคโนโลยีและวิธีการทางซอฟต์แวร์</Typography>
                <Typography>9 หน่วยกิต / Credits</Typography>
              </div>
              <div className='styleSub'>
                <Typography>กลุ่มเทคโนโลยีเพื่อประยุกต์</Typography>
                <Typography>3 หน่วยกิต / Credits</Typography>
              </div>
              <div className='styleSub'>
                <Typography>กลุ่มฝึกวิชาชีพและโครงงาน</Typography>
                <Typography>11 หน่วยกิต / Credits</Typography>
              </div>
              <div className='style' style={{ marginTop: '1%' }}>
                <Typography fontWeight={500}>
                  วิชาเลือก (กลุ่มวิชาชีพเลือก)
                </Typography>
                <Typography fontWeight={500}>12 หน่วยกิต / Credits</Typography>
              </div>
            </div>
          </div>
        ) : null}
        <div className='TextCredits'>
          <Typography fontWeight={500}>หมวดวิชาเลือกเสรี</Typography>
          <Typography fontWeight={500}>6 หน่วยกิต / Credits</Typography>
        </div>
      </Card>
      <Box style={{ marginTop: '2%' }}>
        <Card className='Card'>
          <div className='Cardpart1'>
            <img src={PDF} style={{ padding: '20px' }} />
          </div>
          <div className='Cardpart2'>
            <Typography>มคอ.2 หลักสูตรวิศวกรรมคอมพิวเตอร์</Typography>
            <button onClick={() => Submit()}>Download file</button>
          </div>
        </Card>
      </Box>
    </>
  );
}

export default CardCourseStruture;
