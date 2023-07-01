/** @format */

import React from 'react';
import { Box, Card, Typography } from '@mui/material';

function personal() {
  return (
    <>
      <header>
        <Box
          sx={{
            textAlign: 'center',
            background:
              'linear-gradient(94deg, rgba(255,155,123,1) 46%, rgba(254,111,65,1) 50%)',
            backgroundClip: 'text',
            color: 'transparent',
            fontWeight: 600,
            filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1))',
            fontSize: '32px',
          }}>
          คณะอาจารย์ในหลักสูตรวิศวกรรมคอมพิวเตอร์
        </Box>
      </header>

      <section className='section'>
        <Typography variant='h6'></Typography>
        <article>
          <Card className='Card'></Card>
        </article>
      </section>
    </>
  );
}
export default personal;
