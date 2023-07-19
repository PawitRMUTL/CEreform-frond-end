/** @format */

import React from 'react';
import { Typography, Box } from '@mui/material';
import {
  Gridsabout,
  AutoplayCarousel,
  BannerCard,
  GridsLowwerBanner,
  Timelinetcas,
  Footer,
  Bannercurri,
  Bannerregis,
  Plancards,
  Loginstudy,
  Countsection,
  ShowProject,
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
        <div className={classes.stylesGrid}>
          <Gridsabout />
        </div>
        <div style={{ marginTop: '2%' }}>
          <Bannerregis />
        </div>
        <div id='timeline'>
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
              //
              marginTop: '3%',
              marginBottom: '3%',
            }}>
            การรับสมัครเรียนเรียน
          </Typography>

          <Timelinetcas />
        </div>
        <div id='curiculum'>
          <Bannercurri />
        </div>
      </section>
      {/* section Timeline end */}
      {/* section studyplan start */}
      <section className={classes.section}>
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
          }}>
          เตรียมตัวก่อนเข้าเรียน
        </Typography>
        <div style={{ margin: '60px 0px 60px' }}>
          <Plancards />
        </div>
      </section>
      <Box className={classes.gotostudyplan}>
        <Loginstudy />
      </Box>
      {/* section studyplan end */}
      {/* section Project start */}
      <section className={classes.section} id='project'>
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
            margin: '12px 0px 8px 0px',
          }}>
          โครงการ
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: '600px',
            // border: '3px solid red',
          }}>
          <ShowProject />
        </Box>
      </section>
      {/* section Project end */}
      <Box sx={{ width: '100%', height: '388px' }}>
        <Countsection />
      </Box>
      {/* section Carousel start */}
      <section className={classes.sectionspce}>
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
            margin: '0px 0px 36px 0px',
          }}>
          ข่าวสาร / กิจกรรม
        </Typography>
        <Box className={classes.Carousel}>
          <AutoplayCarousel />
        </Box>
      </section>
      {/* section Carousel end */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Portal;
