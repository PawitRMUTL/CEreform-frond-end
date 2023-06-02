/** @format */
import { Card, CardMedia, Typography } from '@mui/material';
import React from 'react';
import GuideData from '../../api/dummy/guideData';
function Sildernew() {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexWrap: 'wrap',
        gap: 20,
      }}>
      {Object.values(GuideData).map((data) => (
        <Card style={{ height: 400, width: 400 }} key={data.title}>
          <CardMedia>
            <img src={data.imgPath} style={{ height: 200 }} />
          </CardMedia>
          <Typography style={{ padding: 5 }}>{data.date}</Typography>
          <Typography style={{ padding: 15 }}>{data.title}</Typography>
          <Typography style={{ padding: 5 }}>{data.label}</Typography>
        </Card>
      ))}
    </div>
  );
}

export default Sildernew;
