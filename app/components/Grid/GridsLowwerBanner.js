/** @format */

import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import career from '../../../public/images/whatareyou/career-choice.png';
import partnership from '../../../public/images/whatareyou/partnership.png';
import project from '../../../public/images/whatareyou/project-management.png';
import student from '../../../public/images/whatareyou/student.png';
import useStyles from './GridsAbout-jss';

function GridsLowwerBanner() {
  const { classes } = useStyles();
  const handleClickScroll = (name) => {
    const element = document.getElementById(name);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const history = useHistory();
  const handleClick = () => {
    history.push('/Cooperative');
  };
  return (
    <div className={classes.ButtonRightWhatislooking}>
      <Box>
        <Paper className={classes.BgBox}>
          <Typography className={classes.whatare}>
            คุณกำลังหาอะไรอยู่ ?
          </Typography>
        </Paper>
      </Box>
      <Paper className={classes.BgBoxItem}>
        <Box
          width={188}
          className={classes.BgBoxMiddleSmTtem}
          onClick={() => handleClickScroll('timeline')}>
          {/* icon backgrand */}
          <img src={career} className={classes.iconstlye} />
          <img src={career} style={{ width: '28px', height: '28px' }} />
          <Typography className={classes.waltxtstlye}>
            การรับสมัคร TCAS
          </Typography>
        </Box>
        <Box
          width={188}
          className={classes.BgBoxNormalTtem}
          onClick={() => handleClickScroll('curiculum')}>
          <img src={student} className={classes.iconstlye} />
          <img src={student} style={{ width: '28px', height: '28px' }} />
          <Typography className={classes.waltxtstlye}>หลักสูตร</Typography>
        </Box>
        <Box
          width={188}
          className={classes.BgBoxMiddleSmTtem}
          onClick={() => handleClickScroll('project')}>
          <img src={project} className={classes.iconstlye} />
          <img src={project} style={{ width: '28px', height: '28px' }} />
          <Typography className={classes.waltxtstlye}>โครงงาน</Typography>
        </Box>
        <Box
          width={188}
          className={classes.BgBoxOnlyLastItem}
          onClick={handleClick}>
          <img src={partnership} className={classes.iconstlye} />
          <img src={partnership} style={{ width: '28px', height: '28px' }} />
          <Typography className={classes.waltxtstlye}>สหกิจ</Typography>
        </Box>
      </Paper>
    </div>
  );
}

export default GridsLowwerBanner;
