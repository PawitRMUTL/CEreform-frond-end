/** @format */

// import { Typography } from '@mui/material';
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useMediaQuery } from '@mui/material';

function Timelinetcas() {
  const isTablet = useMediaQuery('(max-width: 800px)');
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{
            background: 'rgb(33, 150, 243)',
            color: '#fff',
          }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243) ' }}
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
          <h3 className='vertical-timeline-element-title'>Creative Director</h3>
          <h4 className='vertical-timeline-element-subtitle'>Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
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
