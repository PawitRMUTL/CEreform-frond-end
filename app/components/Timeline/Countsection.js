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
          <Box className={classes.layouttext}>
            <Box sx={{ width: 100, textAlign: 'center' }}>
              <Typography className={classes.texts}>
                5<br />
                คณะ
              </Typography>
            </Box>
            <Box sx={{ width: 100, textAlign: 'center' }}>
              <Typography className={classes.texts}>
                35 <br />
                สาขา
              </Typography>
            </Box>
            <Box sx={{ width: 180, textAlign: 'center' }}>
              <Typography className={classes.texts}>
                2 <br />
                วิทยาลัย
              </Typography>
            </Box>
            <Box sx={{ width: 180, textAlign: 'center' }}>
              <Typography className={classes.texts}>
                2,239 <br />
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
