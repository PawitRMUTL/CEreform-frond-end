/** @format */

import { Typography } from '@mui/material';
import React from 'react';
import './styles.css';
import { CardCourseStruture, Footer } from '../../../components';

function StrtureOfCoures() {
  return (
    <>
      <header></header>
      <section className='section'>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            // border: '3px solid red',
            width: '400px',
            marginBottom: '3%',
          }}>
          <Typography fontWeight={500}> หลักสูตรปริญญาตรี</Typography>
          <Typography fontWeight={300}>วิศวกรรมคอมพิวเตอร์ 4 ปี </Typography>
        </div>
        <Typography fontWeight={500}> โครงสร้างหลักสูตร</Typography>
        <CardCourseStruture />
      </section>
      <footer style={{ marginTop: '2%' }}>
        <Footer />
      </footer>
    </>
  );
}

export default StrtureOfCoures;
