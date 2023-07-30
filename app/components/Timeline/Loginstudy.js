/** @format */

import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import useStyles from './index-jss';
import plan from '../../../public/images/studyplan/backgroundstudyplan.jpg';
function Loginstudy() {
  const { classes } = useStyles();
  return (
    <Box className={classes.layoutgotostudyplan}>
      <Box className={classes.stylesgotostudyplan}>
        <Typography className={classes.titlegotostudyplan}>
          Login Recommendation System!
        </Typography>
        <Typography sx={{ color: '#797979' }}>
          สำหรับ นักศึกษามหาวิทยาลัยราชมงคลล้านนาเชียงใหม่
        </Typography>
        <Button
          className={classes.buttonstylesgotostudtplan}
          href='/loginStudent'>
          get start
        </Button>
      </Box>
      <Box className={classes.underimgstudyplan}></Box>
      <img src={plan} className={classes.imgbackgroundlogin} />
    </Box>
  );
}

export default Loginstudy;
