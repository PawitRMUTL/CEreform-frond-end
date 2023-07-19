/** @format */

import React from 'react';
import Typewriter from 'typewriter-effect';
import { Typography, Box, Button } from '@mui/material';
import useStyles from './GridsAbout-jss';
function TextAbout() {
  const { classes } = useStyles();

  return (
    <div className={classes.position}>
      <div style={{ display: 'flex', flex: '1' }}>
        <div className={classes.divider}></div>
        <div className={classes.txtstyle}>เกี่ยวกับวิศวกรรมคอมพิวเตอร์</div>
      </div>
      <div
        style={{
          marginTop: 2,
          marginBottom: 2,
          fontSize: 36,
        }}
        className={classes.typing}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('RMUTL')
              .pauseFor(5000)
              .deleteChars(5)
              .typeString('ComputerEngineering')
              .pauseFor(5000)
              .deleteChars(19)
              .typeString('RMUTL : ComputerEngineering')
              .start();
          }}
        />
      </div>
      <Typography
        style={{
          fontSize: '18px',
          marginTop: 10,
          marginBottom: 5,
          fontWeight: 300,
        }}>
        สาขาที่เกี่ยวข้องกับการออกแบบ การสร้างเครื่องหรือระบบคอมพิวเตอร์
        และรวมถึงการบำรุงรักษาระบบคอมพิวเตอร์ อีกด้วย โดยเนื้อหาที่น้อง ๆ
        จะได้เรียนจะมีทั้งด้านฮาร์ดแวร์ ซอฟต์แวร์ และการสื่อสาร
        ควบคู่กับความรู้ทาง
        ด้านวิศวกรรมหลักสูตรการเรียนการสอนจะมุ่งเน้นทางด้านทฤษฎี และการฝึกฝน
        ปฏิบัติของทางด้านวิศวกรรมไฟฟ้า คณิตศาสตร์ และวิทยาศาสตร์
        รวมถึงการประยุกต์เข้ากับปัญหาทางด้านการออกแบบคอมพิวเตอร์
        และอุปกรณ์ที่ใช้คอมพิวเตอร์ให้สามารถทำงานร่วมกันได้อย่างมีประสิทธิภาพ
      </Typography>
      <Box className={classes.buttonstyles}>
        <Button variant='contained' className={classes.Button} href='/aboutus'>
          รู้จักเรามากขึ้น
        </Button>
      </Box>
    </div>
  );
}

export default TextAbout;
