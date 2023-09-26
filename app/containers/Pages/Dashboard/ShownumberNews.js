import { Box, Card, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import './styles.css';
// FiUsers
import { BiNews } from 'react-icons/bi';

function ShownumberNews(props) {
  const { numberNews } = props;
  return (
    <Card className='Shownumber_student'>
      <Typography sx={{ fontSize: '14px' }}>จำนวนข่าวในระบบทั้งหมด</Typography>
      <div style={{ position: 'relative' }}>
        <Box sx={{ display: 'flex', marginTop: '4%' }}>
          <Typography fontSize={'30px'} fontWeight={500}>
            {numberNews}
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
ShownumberNews.PropTypes = {
  numberNews: PropTypes.any,
};

export default ShownumberNews;
