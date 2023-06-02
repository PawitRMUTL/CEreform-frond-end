/** @format */

import React from 'react';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';

import useStyles from './GridsAbout-jss';

function GridsLowwerBanner() {
  const { classes } = useStyles();
  return (
    <div className={classes.ButtonRightWhatislooking}>
      <Box>
        <Paper className={classes.BgBox}>
          <span>What do Looking</span>
        </Paper>
      </Box>
      <Paper className={classes.BgBoxItem}>
        <Box width={188} className={classes.BgBoxMiddleSmTtem}>
          <span>number1</span>
        </Box>
        <Box width={188} className={classes.BgBoxNormalTtem}>
          <span>number2</span>
        </Box>
        <Box width={188} className={classes.BgBoxMiddleSmTtem}>
          <span>number3</span>
        </Box>
        <Box width={188} className={classes.BgBoxOnlyLastItem}>
          <span>number4</span>
        </Box>
      </Paper>
    </div>
  );
}

export default GridsLowwerBanner;
