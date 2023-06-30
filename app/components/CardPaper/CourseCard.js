/** @format */
import { Grid, Typography, Box } from '@mui/material';

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import Button from '@mui/material/Button';

const useStyles = makeStyles()(() => ({
  cssRoot: {
    color: '#FFF',
    backgroundColor: '#FE6F41',
    transition: 'transform .4s',
    '&:hover': {
      backgroundColor: '#FE6F41',
      transform: 'scale(1.1)',
    },
  },
}));

function Curriculum(props) {
  const {
    temppathimg, title, pathcurriculum, subtitle
  } = props;
  const { classes } = useStyles();
  return (
    <Box
      sx={{
        margin: '45px 10px 40px 10px',
        backgroundColor: '#F4F4F4',
        height: 260,
        width: 270,
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
