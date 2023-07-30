/** @format */

import React from 'react';
import { Box, Button } from '@mui/material';
import freshy from '../../../public/images/freshy.jpg';
import useStyles from './index-jss';

function Bannerregis() {
  const { classes } = useStyles();
  return (
    <>
      <Box className={classes.setting}>
        <img src={freshy} className={classes.imgbackground} />
        <div className={classes.underimg}></div>
        <Box className={classes.setboxtext}>
          สมัครเรียนเพื่อเป็นส่วนหนึ่งของครอบครัว CPE กับเรา
          <div className={classes.buttonRegis}>
            <Button
              href='https://entrance.rmutl.ac.th/main/?fbclid=IwAR3TYzoBX5n7Q0fwD1DGhnfpL3KooHjPiVNXx9vNtCA2o7ZoCARp5-ydh4g'
              className={classes.buttonstyles}>
              ลงทะเบียน Entrance
            </Button>
          </div>
        </Box>
        <Box className={classes.txtpayterm}>
          <div className={classes.titlepayterm}>
            ค่าธรรมเนียมการศึกษา 16,000 / ภาคเรียน
          </div>
          <Box className={classes.settinggab}>
            <div className={classes.subtxtpayterm}>
              *ค่าธรรมเนียมการศึกษาอาจมีการเปลี่ยนแปลง
            </div>
            <Button href='/Coures-CPE' className={classes.buttonstyles1}>
              อ่านเพิ่มเติม
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Bannerregis;
