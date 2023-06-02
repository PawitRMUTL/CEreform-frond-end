/** @format */

import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import useStyles from './animated-jss';

export default function HelpCard() {
  const { classes } = useStyles();
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
      width={'80%'}>
      <Box sx={{ width: 400 }}>
        <Card className={classes.imageCard}>
          <div
            style={{
              backgroundColor: 'hsla(239,38%,38%,0.7)',
              height: '100%',
            }}>
            <AccountBalanceIcon
              style={{ fontSize: '336px', color: '#F5F5F5' }}
            />
            <Typography sx={{ fontSize: '18px', color: '#FFFFFF' }}>
              Test Card
            </Typography>
          </div>
        </Card>
      </Box>
      <Card sx={{ width: 400, height: 400 }}>
        <AccountBalanceIcon style={{ fontSize: '336px' }} />
        <Typography>Test Card</Typography>
      </Card>
      <Card sx={{ width: 400, height: 400 }}>
        <AccountBalanceIcon style={{ fontSize: '336px' }} />
        <Typography>Test Card</Typography>
      </Card>
    </Box>
  );
}
