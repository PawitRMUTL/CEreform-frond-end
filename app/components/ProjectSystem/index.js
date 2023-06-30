/** @format */

import React from 'react';
import { Box } from '@mui/material';
import ShowSoftware from './Software';
import ShowHardware from './Hardware';
import ShowHybrid from './Hybrid';
import useStyles from './index-jss';
import ProjectData from '../../api/dummy/ProjectData';

function ShowProject() {
  const { classes } = useStyles();
  // filter software
  const softwarefilter = ProjectData.filter(
    (project) => project.type === 'software'
  );
  const softwareProject = softwarefilter.slice(0, 3);
  // filter Hradware
  const hradwarefilter = ProjectData.filter(
    (project) => project.type === 'hardware'
  );
  const hradwareProject = hradwarefilter.slice(0, 3);
  // filter Hybrid
  const hybridfilter = ProjectData.filter(
    (project) => project.type === 'hybrid'
  );
  const hybridProject = hybridfilter.slice(0, 3);
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.showcard}>
          {Object.values(softwareProject).map((data) => (
            <ShowSoftware
              key={data.id}
              englishName={data.englishName}
              thaiName={data.thaiName}
              type={data.type}
              year={data.year}
              link={data.link}
            />
          ))}
        </Box>
        <Box className={classes.showcard}>
          {Object.values(hradwareProject).map((data) => (
            <ShowHardware
              key={data.id}
              englishName={data.englishName}
              thaiName={data.thaiName}
              type={data.type}
              year={data.year}
              link={data.link}
            />
          ))}
        </Box>
        <Box className={classes.showcard}>
          {Object.values(hybridProject).map((data) => (
            <ShowHybrid
              key={data.id}
              englishName={data.englishName}
              thaiName={data.thaiName}
              type={data.type}
              year={data.year}
              link={data.link}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default ShowProject;
