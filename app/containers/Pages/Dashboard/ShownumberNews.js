import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import './styles.css';
// FiUsers
import { BiNews } from 'react-icons/bi';

function ShownumberNews() {
  return (
    <Card className='Shownumber_student'>
      <Typography sx={{ fontSize: '14px' }}>จำนวนข่าวในระบบทั้งหมด</Typography>
      <div style={{ position: 'relative' }}>
        <Box sx={{ display: 'flex', marginTop: '4%' }}>
          <Typography fontSize={'30px'} fontWeight={500}>
            10
          </Typography>
        </Box>
        <BiNews
          style={{
            position: 'absolute',
            width: '40px',
            height: '50px',
            // right: 30,
            bottom: 5,
            right: 20,
          }}
        />
      </div>
    </Card>
  );
}

export default ShownumberNews;
