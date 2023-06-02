/** @format */

import React from 'react';
import Grid from '@mui/material/Grid';
import { Curriculum } from '../../../components';
import curriculum from '../../../api/dummy/curriculum';

function CurriculumShowCrad() {
  return (
    <div>
      <Grid
        container
        alignItems='flex-start'
        justifyContent='center'
        direction='row'
        columns={{ xs: 1, sm: 2, md: 18 }}>
        {Object.values(curriculum).map((data) => (
          <Curriculum
            key={data.title}
            name={data.title}
            temppathimg={data.imgPath}
            pathcurriculum={data.link}
          />
        ))}
      </Grid>
    </div>
  );
}

export default CurriculumShowCrad;
