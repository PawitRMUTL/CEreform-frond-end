/** @format */

import React, { Fragment, useEffect, useState } from 'react';
import { GrFormNextLink } from 'react-icons/gr';

import { Box, Button, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import axios from 'axios';
import useStyles from './user-jss';

function PortalShortcut() {
  const { classes } = useStyles();

  const role = Cookies.get('._jwtRole');
  const username = Cookies.get('._jwtUsername');

  const [status, setStatus] = useState('');
  const [student, Setstudent] = useState(false);
  const [teacher, Setteacher] = useState(false);

  const linkHome = '/';
  const linkPersonel = '/Backoffice/personel';
  // -------------------- verify jwt
  useEffect(() => {
    axios
      .post('http://0.0.0.0:3200/api/verify_authen', {
        token: username,
        tokenRole: role,
      })
      .then((data) => {
        setStatus(data.data.stateRole);
      });
  }, []);

  useEffect(() => {
    if (status !== undefined) {
      if (status === 'นักศึกษา') {
        Setstudent(true);
      }
      if (status === 'อาจารย์') {
        // Setstudent(true);
        Setteacher(true);
      }
    }
  }, [status]);

  return (
    <Fragment>
      <Box textAlign={'center'} marginBottom={8}>
        <Typography fontWeight={600} fontSize={24}>
          ShortCut Portal Menu
        </Typography>
      </Box>
      {teacher ? (
        <div>
          <Box className={classes.layoutBox}>
            <Box width={236} height={105} className={classes.layoutButton}>
              <Typography>My profile</Typography>
              <Button href={linkPersonel} sx={{ width: 9 }}>
                <GrFormNextLink />
              </Button>
            </Box>
            <Box width={236} height={105} className={classes.layoutButton}>
              <Typography>Website CE-REFORM</Typography>
              <Button href={linkHome} sx={{ width: 9 }}>
                <GrFormNextLink />
              </Button>
            </Box>
            <Box width={236} height={105} className={classes.layoutButton}>
              Dashboard
            </Box>
          </Box>
          <Box className={classes.layoutBox}>
            <Box width={236} height={105} className={classes.layoutButton}>
              Study Plan Recommendation
            </Box>
            <Box width={236} height={105} className={classes.layoutButton}>
              Project Management
            </Box>
            <Box width={236} height={105} className={classes.layoutButton}>
              Cooperative Education Management
            </Box>
          </Box>
          <Box className={classes.layoutBox}>
            <Box width={236} height={105} className={classes.layoutButton}>
              Management
            </Box>
            <Box width={236} height={105} className={classes.layoutButton}>
              News Management
            </Box>
            <Box width={236} height={105} className={classes.layoutButton}>
              TCAS Management
            </Box>
          </Box>
        </div>
      ) : null}
      {student ? (
        <div>
          <Box className={classes.layoutBox}>
            <Box width={236} height={105} className={classes.layoutButton}>
              <Typography>My profile</Typography>
              <Button href={linkPersonel} sx={{ width: 9 }}>
                <GrFormNextLink />
              </Button>
            </Box>
            <Box width={236} height={105} className={classes.layoutButton}>
              <Typography>Website CE-REFORM</Typography>
              <Button href={linkHome}>
                <GrFormNextLink />
              </Button>
            </Box>
          </Box>
          <Box className={classes.layoutBox}>
            <Box width={236} height={105} className={classes.layoutButton}>
              Management
            </Box>
            <Box width={236} height={105} className={classes.layoutButton}>
              News Management
            </Box>
            <Box width={236} height={105} className={classes.layoutButton}>
              TCAS Management
            </Box>
          </Box>
        </div>
      ) : null}
    </Fragment>
  );
}

export default PortalShortcut;
