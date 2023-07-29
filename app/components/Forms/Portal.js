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
      <Paper className={cx(classes.paperWrap && classes.petal)}>
        {!mdDown && (
          <div className={classes.topBar}>
            <NavLink to='/' className={classes.brand}>
              <img src={logo} alt={brand.name} style={{ width: 180 }} />
            </NavLink>
          </div>
        )}
        <section className={classes.formWrap}>
          <Typography sx={{ fontSize: '20px', textAlign: 'center' }}>
            ระบบล็อคอิน WEB-PORTAL
          </Typography>
        </section>
        <Box
          sx={{
            height: '200px',
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: '2%',
            justifyContent: 'space-around',
            alignContent: 'center',
          }}>
          <Button
            href='/loginStudent'
            sx={{
              padding: '10px',
              height: '60px',
              border: '1px solid',
            }}>
            ระบบล็อคอินสำหรับนักศึกษา
          </Button>
          <Button
            href='/loginTeacher'
            sx={{
              padding: '10px',
              height: '60px',
              border: '1px solid',
            }}>
            ระบบล็อคอินสำหรับอาจารย์
          </Button>
          <Button
            href='/coming-soon'
            sx={{
              padding: '10px',
              height: '60px',
              border: '1px solid',
            }}>
            ระบบล็อคอินสำหรับสหกิจ
          </Button>
        </Box>
      </Paper>
    </Fragment>
  );
}

export default PortalForm;
