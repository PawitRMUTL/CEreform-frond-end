/** @format */

import React from 'react';
import AOS from 'aos';
import { Box } from '@mui/material';
import ImageListabout from './ImageList';
import TextAbout from './TextAbout';

import 'aos/dist/aos.css';

function Gridsabout() {
  AOS.init();
  return (
    <Box
      sx={{
        display: 'flex',
        placeItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
      <div
        data-aos='fade-right'
        data-aos-duration='1300'
        data-aos-easing='ease-in-sine'>
        <ImageListabout />
      </div>
      <TextAbout />
    </Box>
  );
}

export default Gridsabout;
