/** @format */

import React from 'react';
import { Box } from '@mui/material';
// import { Card } from '@mui/material';
import './index-css.css';

function Project() {
  return (
    <>
      <Box>
        <div className='container'>
          <a className='card1' href='#'>
            <div>
              <h3>Generate Non-Fungible Token System</h3>
              <p className='small'>
                ระบบช่วยสร้างเหรียญดิจิทัลที่มีลักาณะเฉพาะตัว
              </p>
            </div>
            <div className='go-corner' href='#'>
              <div className='go-arrow'>Software</div>
            </div>
          </a>
        </div>
      </Box>
    </>
  );
}

export default Project;
