/** @format */

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Box, useMediaQuery } from '@mui/material';
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiStarFill,
} from 'react-icons/ri';
import timelineData from '../../api/dummy/timeline';
import round1image from '../../../public/images/tcas/round1.png';
import round2image from '../../../public/images/tcas/round2.png';
import round3image from '../../../public/images/tcas/round3.png';
import round4image from '../../../public/images/tcas/round4.png';

// console.log(timelineData[0].subtitle);
import useStyles from './index-jss';

function Timelinetcas() {
  const isTablet = useMediaQuery('(max-width: 1170px)');
  const { classes } = useStyles();
  return (
    <div>
      <VerticalTimeline lineColor={'#CBCBCB'}>
        <VerticalTimelineElement
          icon={<RiNumber1 />}
          className='vertical-timeline-element--work'
          contentStyle={{
            background: '#FFF',
            color: '#000',
          }}
          contentArrowStyle={{ borderRight: '7px solid  #FFF ' }}
          iconStyle={{
            background: '#FE6F41',
            color: '#fff',
            width: '30px',
            height: '30px',
            margin: '0px 0px 0px -15px',
            marginBlock: 15,
            ...(isTablet && {
              margin: '0px 0px 0px 5px',
              marginBlock: 5,
            }),
          }}>
          <Box sx={{ display: 'flex', width: '100%' }}>
            <Box
              sx={{
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Center horizontally
              }}>
              <p style={{ fontSize: '16px' }}>{timelineData[0].title}</p>
              <p style={{ fontSize: '12px' }}>{timelineData[0].subtitle}</p>
              <a href={timelineData[0].link} className={classes.timelinebutton}>
                อ่านเพิ่มเติม
              </a>
            </Box>
            <Box sx={{ width: '50%' }}>
              <img src={round1image} />
            </Box>
          </Box>
        </VerticalTimelineElement>
        {/* ขวา */}
        <VerticalTimelineElement
          icon={<RiNumber2 />}
          className='vertical-timeline-element--work'
          contentStyle={{
            background: '#FFF',
            color: '#000',
          }}
          contentArrowStyle={{ borderRight: '7px solid  #FFF ' }}
          iconStyle={{
            background: '#FE6F41',
            color: '#fff',
            width: '30px',
            height: '30px',
            margin: '0px 0px 0px -15px',
            marginBlock: 15,
            ...(isTablet && {
              margin: '0px 0px 0px 5px',
              marginBlock: 5,
            }),
          }}>
          <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ width: '50%' }}>
              <img src={round2image} />
            </Box>
            <Box
              sx={{
                width: '50%',

                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Center horizontally
              }}>
              <p style={{ fontSize: '16px' }}>{timelineData[1].title}</p>
              <p style={{ fontSize: '12px' }}>{timelineData[1].subtitle}</p>
              <a className={classes.timelinebutton} href={timelineData[1].link}>
                อ่านเพิ่มเติม
              </a>
            </Box>
          </Box>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          icon={<RiNumber3 />}
          className='vertical-timeline-element--work'
          contentStyle={{
            background: '#FFF',
            color: '#000',
          }}
          contentArrowStyle={{ borderRight: '7px solid  #FFF ' }}
          iconStyle={{
            background: '#FE6F41',
            color: '#fff',
            width: '30px',
            height: '30px',
            margin: '0px 0px 0px -15px',
            marginBlock: 15,
            ...(isTablet && {
              margin: '0px 0px 0px 5px',
              marginBlock: 5,
            }),
          }}>
          <Box sx={{ display: 'flex', width: '100%' }}>
            <Box
              sx={{
                width: '50%',

                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Center horizontally
              }}>
              <p style={{ fontSize: '16px' }}>{timelineData[2].title}</p>
              <p style={{ fontSize: '12px' }}>{timelineData[2].subtitle}</p>
              <a className={classes.timelinebutton} href={timelineData[2].link}>
                อ่านเพิ่มเติม
              </a>
            </Box>
            <Box sx={{ width: '50%' }}>
              <img src={round3image} />
            </Box>
          </Box>
        </VerticalTimelineElement>
        {/* ขวา */}
        <VerticalTimelineElement
          icon={<RiNumber4 />}
          className='vertical-timeline-element--work'
          contentStyle={{
            background: '#FFF',
            color: '#000',
          }}
          contentArrowStyle={{ borderRight: '7px solid  #FFF ' }}
          iconStyle={{
            background: '#FE6F41',
            color: '#fff',
            width: '30px',
            height: '30px',
            margin: '0px 0px 0px -15px',
            marginBlock: 15,
            ...(isTablet && {
              margin: '0px 0px 0px 5px',
              marginBlock: 5,
            }),
          }}>
          <Box sx={{ display: 'flex', width: '100%' }}>
            <Box
              sx={{
                width: '50%',

                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Center horizontally
              }}>
              <img src={round4image} />
            </Box>
            <Box
              sx={{
                width: '50%',

                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Center horizontally
              }}>
              <p style={{ fontSize: '16px' }}>{timelineData[3].title}</p>
              <p style={{ fontSize: '12px' }}>{timelineData[3].subtitle}</p>
              <a className={classes.timelinebutton} href={timelineData[3].link}>
                อ่านเพิ่มเติม
              </a>
            </Box>
          </Box>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          icon={<RiStarFill />}
          className='vertical-timeline-element--work'
          iconStyle={{
            background: '#FE6F41',
            color: '#fff',
            width: '30px',
            height: '30px',
            margin: '0px 0px 0px -15px',
            marginBlock: 15,
            ...(isTablet && {
              margin: '0px 0px 0px 5px',
              marginBlock: 5,
            }),
          }}></VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timelinetcas;
