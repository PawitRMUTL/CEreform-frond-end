/** @format */
import { Grid, Typography, Box } from '@mui/material';

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';

const useStyles = makeStyles()((theme) => ({
  cssRoot: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[700],
    },
  },
}));

function Curriculum(props) {
  const {
    temppathimg, title,
    pathcurriculum, subtitle
  } = props;
  const { classes } = useStyles();
  return (
    <Box
      sx={{
        margin: '45px 10px 40px 10px',
        backgroundColor: 'white',
        height: 260,
        width: 270,
        boxShadow: '1px 1px 1px 1px #F1F1F1',
        borderRadius: 6,
        border: '0.5px ',
      }}>
      <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'>
        <Grid
          sx={{
            marginTop: -5,
            width: 100,
            height: 100,
            padding: 2.5,
            backgroundColor: '#543C6C',
            borderRadius: 55,
            gap: '2rem',
          }}>
          <img src={temppathimg} />
        </Grid>
        <Grid sx={{ padding: 3 }}>
          <Typography sx={{ textAlign: 'center', fontSize: '22px' }}>
            {title}
          </Typography>
          <Typography className={classes.subtitleplan}>{subtitle}</Typography>
        </Grid>
        <Button
          sx={{ margin: 2 }}
          variant='contained'
          color='primary'
          className={classes.cssRoot}
          href={pathcurriculum}>
          ดูเพิ่มเติม
        </Button>
      </Grid>
    </Box>
  );
}

Curriculum.propTypes = {
  temppathimg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  pathcurriculum: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Curriculum;
