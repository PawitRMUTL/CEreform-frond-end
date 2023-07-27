/** @format */

import { Card, Typography } from '@mui/material';
import React from 'react';
function CardCourseStruture() {
  return (
    <>
      <Card
        sx={{
          padding: '1%',
          width: '100%',
          marginTop: '1%',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <div className='TextCredits'>
          <Typography sx={{ border: '2px solid red' }}>
            จำนวนหน่วยกิตตลอดหลักสูตร / Total Credits
          </Typography>
          <Typography>135 หน่วยกิต / Credits</Typography>
        </div>
      </Card>
    </>
  );
}

export default CardCourseStruture;
