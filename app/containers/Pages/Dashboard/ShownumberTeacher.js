import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

// FiUsers
import { FiUsers } from 'react-icons/fi';

function ShownumberTeacher(props) {
  const { numbertac } = props;
  return (
    <Card className='Shownumber_student'>
      <Typography sx={{ fontSize: '14px' }}>
        จำนวนอาจารย์ในระบบทั้งหมด
      </Typography>
      <div style={{ position: 'relative' }}>
        <Box sx={{ display: 'flex', marginTop: '4%' }}>
          <Typography fontSize={'30px'} fontWeight={500}>
            {numbertac}
          </Typography>
        </Box>
        <FiUsers
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
ShownumberTeacher.PropTypes = {
  numbertac: PropTypes.any,
};
export default ShownumberTeacher;
