/** @format */

import { Typography, Box } from '@mui/material';
import React from 'react';
import { CasdShowFaculy, Footer } from '../../../components';

import './styles.css';

function Coures() {
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
          หลักสูตรวิศวกรรมคอมพิวเตอร์
        </Box>
      </header>
      <section className='section'>
        <Typography
          style={{
            fontSize: '18px',
            fontWeight: '500',
            paddingLeft: '10%',
          }}>
          หลักสูตรที่เปิดสอน
        </Typography>
        <Box
          sx={{
            marginTop: '2%',
            height: '800px',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <CasdShowFaculy />
        </Box>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Coures;
