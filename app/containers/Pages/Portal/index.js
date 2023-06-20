/** @format */

import React from 'react';
import { Typography } from '@mui/material';
// import Curriculum from '../Crads/Cours_crads';
// import CalenderEdu from '../Crads/Calender_edu';
import {
  Gridsabout,
  // AutoplayCarousel,
  BannerCard,
  GridsLowwerBanner,
  Timelinetcas,
  Footer,
  // HelpCard,
} from '../../../components';
import useStyles from './index-jss';

function Portal() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <BannerCard />
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}>
        <GridsLowwerBanner />
      </div>
      <section className={classes.section}>
        <Gridsabout />
        <div style={{ height: '100%' }}>
          <Typography
            variant='h4'
            sx={{ textAlign: 'center', marginTop: '5%' }}>
            Timeline
          </Typography>
          <Timelinetcas />
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Portal;
