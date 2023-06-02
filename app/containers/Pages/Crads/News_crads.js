/** @format */

import React from 'react';
import Grid from '@mui/material/Grid';
import imgApi from 'dan-api/images/photos';
import { ProductCard } from '../../../components';
import GuideSteps from '../../../api/dummy/guideData';

function EcommerceCard() {
  return (
    <div>
      <Grid
        container
        alignItems='flex-start'
        justifyContent='center'
        direction='row'
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 1, sm: 2, md: 8 }}>
        {Object.values(GuideSteps).map((data) => (
          <Grid key={data.title} item xs={2} sm={4} md={4}>
            <ProductCard
              thumbnail={imgApi[21]}
              name={data.title}
              desc={data.label}
              date={data.date}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default EcommerceCard;
