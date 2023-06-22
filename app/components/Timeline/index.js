/** @format */

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Box, useMediaQuery, Button } from '@mui/material';
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiStarFill,
} from 'react-icons/Ri';
import timelineData from '../../api/dummy/timeline';
console.log(timelineData[0].subtitle);

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
              <p style={{ fontSize: '16px' }}>{timelineData[0].title}</p>
              <p style={{ fontSize: '12px' }}>{timelineData[0].subtitle}</p>
              <Button variant='contained' href={timelineData[0].link}>
                Contained
              </Button>
            </Box>
            <Box sx={{ width: '50%' }}>
              <img src={timelineData[0].imgPath} />
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
              <img src={timelineData[1].imgPath} />
            </Box>
            <Box sx={{ width: '50%' }}>
              <p style={{ fontSize: '16px' }}>{timelineData[1].title}</p>
              <p style={{ fontSize: '12px' }}>{timelineData[1].subtitle}</p>
              <Button variant='contained' href={timelineData[1].link}>
                Contained
              </Button>
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
            <Box sx={{ width: '50%' }}>
              <p style={{ fontSize: '16px' }}>{timelineData[2].title}</p>
              <p style={{ fontSize: '12px' }}>{timelineData[2].subtitle}</p>
              <Button variant='contained' href={timelineData[2].link}>
                Contained
              </Button>
            </Box>
            <Box sx={{ width: '50%' }}>
              <img src={timelineData[2].imgPath} />
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
            <Box sx={{ width: '50%' }}>
              <img src={timelineData[3].imgPath} />
            </Box>
            <Box sx={{ width: '50%' }}>
              <p style={{ fontSize: '16px' }}>{timelineData[3].title}</p>
              <p style={{ fontSize: '12px' }}>{timelineData[3].subtitle}</p>
              <Button variant='contained' href={timelineData[3].link}>
                Contained
              </Button>
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
