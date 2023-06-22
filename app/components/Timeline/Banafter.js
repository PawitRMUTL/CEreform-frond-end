/** @format */

import React from 'react';
import { Box } from '@mui/material';
import Curriculum from '../../containers/Pages/Crads/Cours_crads';
import openscitrend from '../../../public/images/openscitrend.jpg';
function Banafter() {
  return (
    <>
      <Box sx={{ height: '770px', position: 'relative' }}>
        <Box
          sx={{
            padding: 5,
            zIndex: 2,
            display: 'flex',
            border: '2px solid red',
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}>
          <Box
            sx={{
              border: '3px solid red',
              width: '30%',
              height: '100%',
            }}>
            <Curriculum />
          </Box>
          <Box
            sx={{
              border: '3px solid red',
              width: '70%',
              height: '100%',
            }}></Box>
        </Box>
        <Box
          sx={{
            backgroundColor: '#000',
            opacity: 0.8,
            width: '100%',
            height: '100%',
            zIndex: 1,
            position: 'absolute',
          }}></Box>
        <img
          src={openscitrend}
          style={{
            // border: '2px solid red',
            objectFit: 'cover',
            width: '100%',
            position: 'absolute',
            zIndex: 0,
            height: '100%',
          }}
        />
      </Box>
    </>
  );
}
export default Banafter;
