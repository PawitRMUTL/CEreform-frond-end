/** @format */

import { Card, Typography, Box } from '@mui/material';

import React from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import divider from '../../../../public/images/divider.svg';
import GuideData from '../../../api/dummy/guideData';
import useStyles from './index-jss';
import { Footer } from '../../../components';
import './index-css.css';
// function count() {
//   const [numberRow, SetnumberRow] = React.useState();
// }
function allNew() {
  const { classes } = useStyles();
  const [name, setName] = React.useState(6);
  const count = () => {
    setName(name + 3);
  };
  const countData = GuideData.slice(0, `${name}`);

  return (
    <>
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
          margin: '0px 0px 10px',
        }}>
        ข่าวสาร
      </Box>
      <div className='cardnewstyles'>
        {Object.values(countData).map((data) => (
          <Card className={classes.card} key={data.id}>
            <div className={classes.imgstytes}>
              <img src={data.imgPath} />
            </div>
            <Box className={classes.boxlayouttxt}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingTop: '1rem',
                }}>
                <img src={divider} />
                <Typography className={classes.textdate}>
                  {data.date}
                </Typography>
              </Box>
              <Typography className={classes.texttitle}>
                {data.title}
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                className={classes.textlable}>
                {data.label}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                }}>
                <Button
                  variant='text'
                  size='medium'
                  style={{ color: '#FE6439' }}>
                  อ่านต่อ
                  <KeyboardArrowRight />
                </Button>
              </Box>
            </Box>
          </Card>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '2rem',
        }}>
        <Button
          sx={{
            color: '#FE6F41',
            background:
              'linear-gradient(white, white) padding-box, linear-gradient(to right, #FE6F41, #F8BA1C) border-box',
            borderRadius: '50em',
            border: '1px solid transparent',
            '&:hover': {
              background: 'linear-gradient(#FE6F41, #F8BA1C)',
              color: '#FFF',
              border: '1px solid',
              // scale: 1.2,
              animation: 'pulse 1s infinite',
            },
          }}
          onClick={count}>
          อ่านเพิ่มเติม
        </Button>
      </div>

      <Footer />
    </>
  );
}
export default allNew;
