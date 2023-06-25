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
          <Box sx={{ display: 'flex' }}>
            <Typography>5 คณะ</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Countsection;
