/** @format */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Card,
  Box,
  Button
} from '@mui/material';
import useStyles from '../CardPaper/cardStyle-jss';

function CalenderEducation(props) {
  const { year, pathCalenderEdu, link } = props;
  const { classes } = useStyles();
  return (
    <div>
      <Card className={classes.calenderCard}>
        <Card sx={{ width: 150, height: 150, padding: 4 }}>
          <img src={pathCalenderEdu} />
        </Card>
        <Box className={classes.calenderText}>
          <Button variant='text' href={link}>
            Downlond File and View
          </Button>
          <Typography style={{ paddingLeft: 2 }}>
            ปฎิทินการศึกษาประจำปีการศึกษา {year}
          </Typography>
        </Box>
      </Card>
    </div>
  );
}

CalenderEducation.propTypes = {
  year: PropTypes.string.isRequired,
  pathCalenderEdu: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
export default CalenderEducation;
