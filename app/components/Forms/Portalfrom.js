/** @format */

import React, { Fragment } from 'react';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';
import brand from 'dan-api/dummy/brand';
import logo from 'dan-images/logoCPE.png';
// import student from 'dan-images/student.png';
// import teacher from 'dan-images/teacher.png';
// import cooperative from 'dan-images/cooperative.png';

import useStyles from './user-jss';

function PortalForm() {
  const { classes, cx } = useStyles();

  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const mdDown = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Fragment>
      {!mdUp && (
        <NavLink to='/' className={cx(classes.brand, classes.outer)}>
          <img src={logo} alt={brand.name} />
        </NavLink>
      )}
      <Paper
        className={cx(classes.paperWrap && classes.petal)}>
        {!mdDown && (
          <div className={classes.topBar}>
            <NavLink to='/' className={classes.brand}>
              <img src={logo} alt={brand.name} style={{ width: 180 }} />
            </NavLink>
          </div>
        )}
        <section className={classes.formWrap}>
          <Typography
            fontWeight={600}
            sx={{ fontSize: '20px', textAlign: 'center' }}>
            ระบบล็อคอิน WEB-PORTAL
          </Typography>
        </section>
        <Box
          sx={{
            height: '300px',
            // width: 1000,
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: '2%',
            justifyContent: 'space-evenly',
            alignContent: 'center',
          }}>
          <Button
            href='/loginStudent'
            sx={{
              color: '#000',
              fontWeight: '500',
              textAlign: 'center',
              height: '200px',
              width: '140px',
              boxShadow: '0px 4px 4px 1px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignContent: 'center',
            }}>
            {/* <img src={student} className={classes.iconhover} /> */}
            ระบบล็อคอิน
            <br />
            สำหรับนักศึกษา
          </Button>
          <Button
            href='/loginTeacher'
            sx={{
              color: '#000',
              fontWeight: '500',
              textAlign: 'center',
              height: '200px',
              width: '140px',
              boxShadow: '0px 4px 4px 1px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignContent: 'center',
            }}>
            {/* <img src={teacher} style={{ width: '72px' }} /> */}
            ระบบล็อคอิน
            <br />
            สำหรับอาจารย์
          </Button>
          <Button
            href='/app/pages/ComingSoon'
            sx={{
              color: '#000',
              fontWeight: '500',
              textAlign: 'center',
              height: '200px',
              width: '140px',
              boxShadow: '0px 4px 4px 1px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignContent: 'center',
            }}>
            {/* <img src={cooperative} style={{ width: '72px' }} /> */}
            ระบบล็อคอิน
            <br />
            สำหรับสหกิจ
          </Button>
          <Button
            href='/loginAdmin'
            sx={{
              color: '#000',
              fontWeight: '500',
              textAlign: 'center',
              height: '200px',
              width: '140px',
              boxShadow: '0px 4px 4px 1px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignContent: 'center',
            }}>
            {/* <img src={cooperative} style={{ width: '72px' }} /> */}
            ระบบล็อคอิน
            <br />
            สำหรับ ADMIN
          </Button>
        </Box>
      </Paper>
    </Fragment>
  );
}

export default PortalForm;
