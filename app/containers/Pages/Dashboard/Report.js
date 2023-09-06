import { Card, Typography } from '@mui/material';
import React from 'react';

function Report() {
  const items = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div>
      {items.map((item) => (
        <Card
          key={item}
          sx={{
            width: '100%',
            height: '150px',
            border: '2px solid #000',
            marginBottom: '2%',
          }}>
          <Typography variant='h3'>Report student {item}</Typography>
        </Card>
      ))}
    </div>
  );
}

export default Report;
