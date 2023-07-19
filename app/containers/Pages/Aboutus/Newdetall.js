/** @format */

import React from 'react';
import { Typography } from '@mui/material';
import { AiOutlineEye } from 'react-icons/ai';

import Sliderimage from './SilderimageNew';
import './styles.css';
import { Footer, Fromcontentnew } from '../../../components';
function newdetail() {
  return (
    <>
      <section className='section'>
        {/* topic in text */}
        <Typography variant='h3' fontWeight={500}>
          Topic : Lorem Ipsum
        </Typography>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '15px 0px 10px',
          }}>
          <span>เผยแพร่เมื่อ : 17 05 2565</span>
          <span>
            โดย : ณัฏฐ์พัฒน์ คนมีฉลาด &nbsp; <AiOutlineEye /> จำนวนคนเข้าชม 100
            ครั้ง
          </span>
        </div>
        {/* Image */}
        <div>
          <Sliderimage />
        </div>
      </section>
      <section className='section' style={{ marginTop: '-4%' }}>
        <div
          style={{
            width: '100%',
            border: '2px solid red',
            marginBottom: '3px',
          }}>
          <Typography>Test</Typography>
        </div>
        <Fromcontentnew />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default newdetail;
