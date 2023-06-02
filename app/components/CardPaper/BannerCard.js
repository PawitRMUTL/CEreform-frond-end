/** @format */

import React from 'react';
import { Typography } from '@mui/material';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import useStyles from './cardStyle-jss';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function BannerCard() {
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.bannerRoot}>
        <img
          // src='./images/test-gif.gif'
          src='http://via.placeholder.com/1050x700/917FB3/FFFFFF/'
          style={{ width: '100%' }}
        />
        <div className={classes.TopleftText}>
          <ThemeProvider theme={theme}>
            <Typography
              variant='h1'
              style={{
                fontWeight: '500',
                fontFamily: 'Noto Sans Thai',
                wordBreak: 'normal',
                color: 'white',
              }}>
              วิศวกรรม
            </Typography>
            <Typography
              variant='h2'
              style={{
                fontWeight: '500',
                fontFamily: 'Noto Sans Thai',
                color: 'white',
              }}>
              คอมพิวเตอร์
            </Typography>
            <Typography
              variant='h4'
              style={{
                fontWeight: '300',
                fontFamily: 'Noto Sans Thai',
                color: 'white',
              }}>
              มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา เชียงใหม่
            </Typography>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}
export default BannerCard;
