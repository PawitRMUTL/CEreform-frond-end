/** @format */

import React, { Fragment, useEffect, useState } from 'react';
import { GrFormNextLink } from 'react-icons/gr';
import { Box, Button, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import axios from 'axios';
import useStyles from './user-jss';
import { hostBackend } from '../../../env';

function PortalShortcut() {
  const { classes } = useStyles();

  const role = Cookies.get('._jwtRole');
  const username = Cookies.get('._jwtUsername');

  const [status, setStatus] = useState('');
  const [student, Setstudent] = useState(false);
  const [teacher, Setteacher] = useState(false);

  const linkHome = '/';
  const linkPersonel = '/Backoffice/personel';
  const coomingsoon = '/app/pages/ComingSoon';
  const dashboard = '/app/pages/dashboard';
  // -------------------- verify jwt
  useEffect(() => {
    axios
      .post(`${hostBackend}/api/verify_authen`, {
        token: username,
        tokenRole: role,
      })
      .then((data) => {
        setStatus(data.data.stateRole);
      });
  }, []);
  useEffect(() => {
    console.log(status);
    if (status !== undefined) {
      if (status === 'นักศึกษา') {
        Setstudent(true);
      }
      if (status === 'อาจารย์' || status === 'admin') {
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
              <Typography>Dashboard</Typography>
              <Button href={dashboard} sx={{ width: 9 }}>
                <GrFormNextLink />
              </Button>
            </Box>
          </Box>
          <Box className={classes.layoutBox}>
            <Box width={236} height={105} className={classes.layoutButton}>
              <Typography> Study Plan </Typography>
              <Button href={coomingsoon} sx={{ width: 9 }}>
                <GrFormNextLink />
              </Button>
            </Box>
            <Box width={236} height={105} className={classes.layoutButton}>
              <Typography>Project Management</Typography>
              <Button href={coomingsoon} sx={{ width: 9 }}>
                <GrFormNextLink />
              </Button>
            </Box>
            <Box width={236} height={105} className={classes.layoutButton}>
              <Typography>Cooperative</Typography>
              <Button href={coomingsoon} sx={{ width: 2 }}>
                <GrFormNextLink />
              </Button>
            </Box>
          </Box>
          <Box className={classes.layoutBox}>
            <Box width={236} height={105} className={classes.layoutButton}>
              <Typography>Management</Typography>
            </Box>
            <Box width={236} height={105} className={classes.layoutButton}>
              <Typography>News Management</Typography>
              <Button href={'/Managemant/news'} sx={{ width: 9 }}>
                <GrFormNextLink />
              </Button>
            </Box>
            <Box width={236} height={105} className={classes.layoutButton}>
              <Typography>TCAS Management</Typography>
              <Button href={coomingsoon} sx={{ width: 9 }}>
                <GrFormNextLink />
              </Button>
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
              <Typography>Study Plan Recommendation</Typography>
              <Button href={coomingsoon} sx={{ width: 9 }}>
                <GrFormNextLink />
              </Button>
            </Box>
            <Box width={236} height={105} className={classes.layoutButton}>
              <Typography>Project Management</Typography>
              <Button href={coomingsoon} sx={{ width: 9 }}>
                <GrFormNextLink />
              </Button>
            </Box>
            <Box width={236} height={105} className={classes.layoutButton}>
              <Typography>Cooperative Education Management</Typography>
              <Button href={coomingsoon} sx={{ width: 9 }}>
                <GrFormNextLink />
              </Button>
            </Box>
          </Box>
        </div>
      ) : null}
    </Fragment>
  );
}

export default PortalShortcut;
