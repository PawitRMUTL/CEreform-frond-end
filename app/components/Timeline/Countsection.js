/** @format */

import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from './index-jss';
import imagebanner from '../../../public/images/act.png';

function Countsection() {
  const { classes } = useStyles();

  return (
    <>
      <Box className={classes.setting}>
        <img src={imagebanner} className={classes.imgbackground} />
        <div className={classes.underimg}></div>
        <Box className={classes.textCountSection}>
          <Box
            sx={{
              marginTop: 6,
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 6,
              // justifyContent: 'center', // Horizontally center the content
              justifyContent: 'space-evenly',
              alignItems: 'center', // Vertically center the content
            }}>
            <Box sx={{ width: 100, textAlign: 'center' }}>
              <Typography variant='h3'>
                5<br />
                คณะ
              </Typography>
            </Box>
            <Box sx={{ width: 100, textAlign: 'center' }}>
              <Typography variant='h3'>
                35 <br />
                สาขา
              </Typography>
            </Box>
            <Box sx={{ width: 180, textAlign: 'center' }}>
              <Typography variant='h3'>
                2 <br />
                วิทยาลัย
              </Typography>
            </Box>
            <Box sx={{ width: 180, textAlign: 'center' }}>
              <Typography variant='h3'>
                2239 <br />
                บุคลากร
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Countsection;
