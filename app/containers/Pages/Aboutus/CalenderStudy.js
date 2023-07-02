/** @format */

import React from 'react';

import { Box, Card, Typography } from '@mui/material';
import './index-css.css';
import PDF from '../../../../public/images/pdf.png';

function CalenderStudy() {
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
          ปฎิทินการศึกษา
        </Box>
      </header>
      <section className='section'>
        <Typography variant='h6'>ดาวน์โหลดปฏิทินการศึกษา</Typography>
        <article>
          <Card className='Card'>
            <div className='Cardpart1'>
              <img src={PDF} />
            </div>
            <div className='Cardpart2'>
              <Typography>ปฎิทินการศึกษาประจำปีการศึกษา 2566</Typography>
              <button>Download file</button>
            </div>
          </Card>
          <Card className='Card'>
            <div className='Cardpart1'>
              <img src={PDF} />
            </div>
            <div className='Cardpart2'>
              <Typography>ปฎิทินการศึกษาประจำปีการศึกษา 2566</Typography>
              <button>Download file</button>
            </div>
          </Card>
          <Card className='Card'>
            <div className='Cardpart1'>
              <img src={PDF} />
            </div>
            <div className='Cardpart2'>
              <Typography>ปฎิทินการศึกษาประจำปีการศึกษา 2565</Typography>
              <button>Download file</button>
            </div>
          </Card>
          <Card className='Card'>
            <div className='Cardpart1'>
              <img src={PDF} />
            </div>
            <div className='Cardpart2'>
              <Typography>ปฎิทินการศึกษาประจำปีการศึกษา 2564</Typography>
              <button>Download file</button>
            </div>
          </Card>
        </article>
      </section>
      <section className='section'>
        <Typography variant='h6'>
          ดาวน์โหลดปฏิทินการโครงการพัฒนาทักษะวิชาชีพของนักศึกษา-ปีการศึกษา-2566
        </Typography>
        <article>
          <Card className='Card'>
            <div className='Cardpart1'>
              <img src={PDF} />
            </div>
            <div className='Cardpart2'>
              <Typography>ปฎิทินการศึกษาประจำปีการศึกษา 2566/1</Typography>
              <button>Download file</button>
            </div>
          </Card>
          <Card className='Card'>
            <div className='Cardpart1'>
              <img src={PDF} />
            </div>
            <div className='Cardpart2'>
              <Typography>ปฎิทินการศึกษาประจำปีการศึกษา 2566/2</Typography>
              <button>Download file</button>
            </div>
          </Card>
        </article>
      </section>
    </>
  );
}
export default CalenderStudy;
