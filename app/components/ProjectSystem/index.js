/** @format */

import React from 'react';
import { Box } from '@mui/material';
import ShowSoftware from './Software';
import ShowHardware from './Hardware';
import ShowHybrid from './Hybrid';
import './index-css.css';
import useStyles from './index-jss';
function ShowProject() {
  const { classes } = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.showcard}>
          <ShowSoftware />
          <ShowSoftware />
          <ShowSoftware />
          {/* <ShowHardware />
        <ShowHybrid /> */}
        </Box>
        <Box className={classes.showcard}>
          <ShowHardware />
          <ShowHardware />
          <ShowHardware />
        </Box>
        <Box className={classes.showcard}>
          <ShowHybrid />
          <ShowHybrid />
          <ShowHybrid />
        </Box>
      </Box>
    </>
  );
}

export default ShowProject;
