/** @format */

import React from 'react';
import { Typography } from '@mui/material';
// import CalenderEdu from '../Crads/Calender_edu';
import {
  Gridsabout,
  // AutoplayCarousel,
  BannerCard,
  GridsLowwerBanner,
  Timelinetcas,
  Footer,
  Banafter,
  Banbefore,
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
      {/* section Timeline start */}
      <section>
        <Gridsabout />
        <div style={{ height: '100%' }}>
          <Banbefore />
          <Typography
            variant='h5'
            sx={{ textAlign: 'center', marginTop: '1%' }}>
            Timeline
          </Typography>
          <Typography
            variant='h4'
            sx={{
              textAlign: 'center',
              background:
                'linear-gradient(94deg, rgba(255,155,123,1) 44%, rgba(254,111,65,1) 48%)',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: 700,
              filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))',
              margin: 2,
            }}>
            การรับสมัครเรียนเรียน
          </Typography>
          <Timelinetcas />
          <Banafter />
        </div>
      </section>
      {/* section Timeline end */}
      {/* section studyplan start */}
      <section className={classes.section}>
      </section>
      {/* section studyplan end */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Portal;
