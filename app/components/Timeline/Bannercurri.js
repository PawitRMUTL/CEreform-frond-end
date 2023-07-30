/** @format */

import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Curriculum from '../CardPaper/CourseCard';
import openscitrend from '../../../public/images/openscitrend.jpg';
import curriculum from '../../api/dummy/curriculum';
import useStyles from './index-jss';

function Showcurriculum() {
  const { classes } = useStyles();

  return (
    <>
      {/* เปลี่ยนเป็น flex */}
      <Box className={classes.cours}>
        {Object.values(curriculum).map((data) => (
          <Curriculum
            key={data.id}
            title={data.title}
            subtitle={data.subtitle}
            temppathimg={data.imgPath}
            pathcurriculum={data.link}
          />
        ))}
      </Box>
    </>
  );
}

function Bannercurri() {
  const { classes } = useStyles();
  return (
    <>
      <Box className={classes.bannercurriroot}>
        <Box className={classes.layout}>
          {/* Box left */}
          <Box className={classes.layoutleft}>
            <Showcurriculum />
          </Box>
          {/* Box right */}
          <Box className={classes.layoutright}>
            <Typography className={classes.txttitle}>
              computer engineering
            </Typography>
            <Typography className={classes.subtitle}>
              คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา
              เปิดสอนในระดับปริญญาตรี ทางด้านวิศวกรรมศาสตร์ โดยวัตถุประสงค์
              ในการผลิตบัณฑิตนักปฎิบัติที่มีความรอบรู้ทั้งทางภาคทฤษฎีและปฎิบัติ
              มีความเชี่ยวชาญเทคโนโลยี มีคุณธรรมจริยธรรม วิจัยและพัฒนา
              สร้างสรรค์นวัตกรรมเพื่อสังคมสู่สากล
            </Typography>
            <Button href='/Coures-CPE' className={classes.buttonstyles1}>
              LEAN MORE
            </Button>
          </Box>
        </Box>
        <Box className={classes.underimg}></Box>
        <img src={openscitrend} className={classes.imgbackgroundCurri} />
      </Box>
    </>
  );
}
export default Bannercurri;
