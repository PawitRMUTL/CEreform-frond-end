import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
// FiUsers
import { FiUsers } from 'react-icons/fi';

function ShownumberStudent(props) {
  const { numberstu } = props;
  return (
    <Card className='Shownumber_student'>
      <Typography sx={{ fontSize: '14px' }}>
        จำนวนนักศึกษาในระบบทั้งหมด
      </Typography>
      <div style={{ position: 'relative' }}>
        <Box sx={{ display: 'flex', marginTop: '4%' }}>
          <Typography fontSize={'30px'} fontWeight={500}>
            {numberstu}
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
ShownumberStudent.PropTypes = {
  numberstu: PropTypes.any,
};
export default ShownumberStudent;
