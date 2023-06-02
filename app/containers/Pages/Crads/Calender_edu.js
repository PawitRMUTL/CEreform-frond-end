/** @format */
import React from 'react';
import { Grid } from '@mui/material';
import { CalenderEducation } from '../../../components';
import calenderData from '../../../api/dummy/calenderData';

function CalenderEdu() {
  return (
    <Grid
      container
      alignItems='flex-start'
      justifyContent='space-evenly'
      direction='row'
      columns={{ xs: 1, sm: 2, md: 18 }}>
      {Object.values(calenderData).map((data) => (
        <CalenderEducation
          key={data.id}
          year={data.year}
          pathCalenderEdu={data.imgPath}
          link={data.link}
        />
      ))}
    </Grid>
  );
}

export default CalenderEdu;
