/** @format */

// import { Typography } from '@mui/material';
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Box, useMediaQuery, Button } from '@mui/material';
import { RiNumber1 } from 'react-icons/Ri';
// import { Oneicon } from 'dan-images/one.png';
function Timelinetcas() {
  const isTablet = useMediaQuery('(max-width: 1170px)');
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
            <Box sx={{ width: '50%' }}>
              <p style={{ fontSize: '16px' }}>
                กำหนดการรับสมัครนักศึกษา รอบ Pre-Entrance
              </p>
              <p style={{ fontSize: '12px' }}>
                รับบางหลักสูตร แข่งขันกันที่การสอบสัมภาษณ์
                เริ่มเปิดรับสมัครออนไลน์ วันที่ 10 ก.ย. 65 เป็นต้นไป
              </p>
              <Button variant='contained'>Contained</Button>
            </Box>
            <Box sx={{ border: '1px solid red', width: '50%' }}>
              <p variant='h2'>Image</p>
            </Box>
          </Box>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2010 - 2011 ดดด'
          iconStyle={{
            background: '#373737',
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
          <h3 className='vertical-timeline-element-title'>Art Director</h3>
          <h4 className='vertical-timeline-element-subtitle'>
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2008 - 2010'
          iconStyle={{
            background: '#373737',
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
          <h3 className='vertical-timeline-element-title'>Web Designer</h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2006 - 2008'
          iconStyle={{
            background: '#373737',
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
          <h3 className='vertical-timeline-element-title'>Web Designer</h3>
          <h4 className='vertical-timeline-element-subtitle'>
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timelinetcas;
