/** @format */

import { Card, Typography, Box } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import divider from '../../../../public/images/divider.svg';
// import GuideData from '../../../api/dummy/guideData';
import useStyles from './index-jss';
import { Footer } from '../../../components';
import './styles.css';
// function count() {
//   const [numberRow, SetnumberRow] = React.useState();
// }
function allNew() {
  const { classes } = useStyles();
  const [newList, SetnewList] = useState([]);
  const [checkvalue, Setcheckvalue] = useState(false);
  // const [idNewimage, SetidNewimage] = useState();
  // const [name, setName] = React.useState(6);
  // const count = () => {
  //   setName(name + 3);
  // };
  // const countData = GuideData.slice(0, `${name}`);
  // const valueID = (id) => {
  //   SetidNewimage(id);
  // };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://0.0.0.0:3200/api/GetNewlist');
        if (!checkvalue) {
          Setcheckvalue(true);
          SetnewList(response.data);
        }
      } catch (error) {
        console.log('error fetchData is ', error);
      }
    };

    fetchData();
  }, [checkvalue]);
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
        {Object.values(newList).map((data) => (
          <Card className={classes.card} key={data.news_id}>
            <div
              className={classes.imgstytes}
              // onChange={() => valueID(data.news_id)}
            >
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
                  {data.news_date}
                </Typography>
              </Box>
              <Typography className={classes.texttitle}>
                {data.news_heading}
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                className={classes.textlable}>
                {data.news_name}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                }}>
                <Button
                  href='/about-us/detail'
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
          // onClick={count}
        >
          อ่านเพิ่มเติม
        </Button>
      </div>

      <Footer />
    </>
  );
}
export default allNew;
