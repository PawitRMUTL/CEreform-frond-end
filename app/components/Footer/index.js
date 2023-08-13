/** @format */

import React from 'react';
import logo from 'dan-images/logoCPE.png';
import logofacebook from 'dan-images/facebook.png';
import email from 'dan-images/email.png';
import printer from 'dan-images/printer.png';
import telephone from 'dan-images/telephone.png';
import { Box, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './index-jss';

import Datafooter from '../../api/dummy/Datafooter';
const round1 = Datafooter.slice('', 3);
const round2 = Datafooter.slice(3, 6);
const round3 = Datafooter.slice(6, 8);

export default function Footer() {
  const { classes } = useStyles();
  // const isTablet = useMediaQuery('(max-width: 1170px)');

  return (
    <>
      <div className={classes.gradiant}></div>
      <div className={classes.gradiant2}></div>
      <div className={classes.gradiant3}></div>
      <div className={classes.root}>
        {/* colum 1 */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          <div className={classes.blackspece}></div>
          <img src={logo} alt='logoCPE' className={classes.imglogo} />
          <div className={classes.abouttxt}>
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                flexWrap: 'wrap',
              }}>
              <div style={{ marginRight: '42px' }}>
                {Object.values(round1).map((txt) => (
                  <Box key={txt.id} className={classes.styleabouttxt}>
                    <Link
                      style={{ textDecoration: 'none' }}
                      key={txt.id}
                      to={txt.link}
                      className={classes.styleabouttxt} // Make sure you have defined this class
                    >
                      {txt.footerdata}
                    </Link>
                  </Box>
                ))}
              </div>
              <div style={{ marginRight: '42px' }}>
                {Object.values(round2).map((txt) => (
                  <Box key={txt.id} className={classes.styleabouttxt}>
                    <Link
                      style={{ textDecoration: 'none' }}
                      key={txt.id}
                      to={txt.link}
                      className={classes.styleabouttxt} // Make sure you have defined this class
                    >
                      {txt.footerdata}
                    </Link>
                  </Box>
                ))}
              </div>
              <div style={{ marginRight: '42px' }}>
                {Object.values(round3).map((txt) => (
                  <Box key={txt.id} className={classes.styleabouttxt}>
                    <Link
                      style={{ textDecoration: 'none' }}
                      key={txt.id}
                      to={txt.link}
                      className={classes.styleabouttxt} // Make sure you have defined this class
                    >
                      {txt.footerdata}
                    </Link>
                  </Box>
                ))}
              </div>
              <div className={classes.footerdata}>
                <Box className={classes.styleabouttxt}>
                  <Link
                    style={{ textDecoration: 'none' }}
                    to={Datafooter[8].link}
                    className={classes.styleabouttxt} // Make sure you have defined this class
                  >
                    {Datafooter[8].footerdata}
                  </Link>
                </Box>
              </div>
            </Box>
          </div>
        </div>
        {/* colum 2 */}
        <div
          style={{
            // border: '5px solid green',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          <Box className={classes.txtfaculty}>
            <Typography className={classes.txtHeading}>
              มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา เชียงใหม่
            </Typography>
            <Typography className={classes.txtstlye}>
              คณะวิศวกรรมศาสตร์
            </Typography>
            <Typography className={classes.txtstlye}>
              สาขาวิศวกรรมไฟฟ้า
            </Typography>
            <Typography className={classes.txtstlye}>
              หลักสูตรวิศวกรรมคอมพิวเตอร์
            </Typography>
          </Box>
          <Box className={classes.txticon}>
            <Stack>
              <Box sx={{ display: 'flex' }}>
                <img src={logofacebook} className={classes.logostlye} />
                <span className={classes.txtLogo}>
                  มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา
                </span>
              </Box>
              <Box sx={{ display: 'flex', marginTop: 1 }}>
                <img src={email} className={classes.logostlye} />
                <span className={classes.txtLogo}>saraban@rmutl.ac.th</span>
              </Box>
              <Box sx={{ display: 'flex', marginTop: 1 }}>
                <img src={telephone} className={classes.logostlye} />
                <span className={classes.txtLogo}>Phone : 0-5392-1444</span>
              </Box>
              <Box sx={{ display: 'flex', marginTop: 1 }}>
                <img src={printer} className={classes.logostlye} />
                <span className={classes.txtLogo}>Fax : 0-5321-3183</span>
              </Box>
            </Stack>
          </Box>
        </div>
        {/* colum 3 */}
        <div className={classes.copyright}>
          <Typography className={classes.copyrighttxt}>
            © 2023 CE-RMUTL | REFROM
          </Typography>
        </div>
      </div>
    </>
  );
}
