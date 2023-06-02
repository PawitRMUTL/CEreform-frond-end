/** @format */

import React from 'react';
import { Card, Typography } from '@mui/material';
// import Chip from '@mui/material/Chip';
import useStyles from './animated-jss';
// import imgData from 'dan-api/images/imgData';

export default function ProjectShowSlider() {
  const { classes } = useStyles();

  return (
    <div style={{ zIndex: 1 }}>
      <Card style={{ width: 400, height: 500 }} className={classes.card}>
        <div className={classes.fon}>
          <div className={classes.Add}>
            <Typography variant='h5' marginBottom={2}>
              Name Project
            </Typography>
            <Typography>รายชื่อผู้ทำโครงการ</Typography>
            <div>
              <Typography>นาย สมชาย เขาแก้ว</Typography>
              <Typography>นาย สมมุติ ณ เชียงใหม</Typography>
              <Typography>นาย คง คงกระพันธุ์</Typography>
            </div>
            <Typography>ที่ปรึษาโครงการ</Typography>
            <Typography>นาย ธนิต เกตุแก้ว</Typography>
          </div>
        </div>
      </Card>
    </div>
  );
}

// <div>
//
// <Typography>รายชื่อผู้ทำโครงการ</Typography>
// <div>
//   <Typography>นาย สมชาย เขาแก้ว</Typography>
//   <Typography>นาย สมมุติ ณ เชียงใหม</Typography>
//   <Typography>นาย คง คงกระพันธุ์</Typography>
// </div>
// <Typography>ที่ปรึษาโครงการ</Typography>
// <Typography>นาย ธนิต เกตุแก้ว</Typography>
// </div>
