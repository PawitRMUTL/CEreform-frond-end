/** @format */

import { Card, Typography, Box } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Button from '@mui/material/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import divider from '../../../../public/images/divider.svg';
import useStyles from './index-jss';
import { Footer } from '../../../components';
import './styles.css';
function allNew() {
  const { classes } = useStyles();
  const navigate = useHistory();
  const [imageDATA, setImageDATA] = useState([]);
  const [newList, SetnewList] = useState([]);
  const [viewValue, SetviewValue] = useState();
  const [IdNews, SetNewsid] = useState();
  const [originnalView, SetOriView] = useState();
  const [Isplus, SetIsplus] = useState(false);
  useEffect(() => {
    if (newList !== undefined) {
      // let ImageValue;
      const promises = Object.values(newList).map((data) => import(`/Users/baconinhell/Desktop/dandelion-pro_v25/starter-project/image/ImageNew/${data.filename}`).then((image) => image.default));
      Promise.all(promises).then((imagePaths) => {
        const ImageValue = [];
        imagePaths.forEach((index) => ImageValue.push(index));
        setImageDATA(ImageValue);
      });
    }
  }, [newList]);
  // Read New
  useEffect(() => {
    axios
      .get('http://0.0.0.0:3200/api/GetNewlist')
      .then((data) => {
        SetnewList(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // ดึงค่า view เดิม
  useEffect(() => {
    if (originnalView !== undefined) {
      SetviewValue(originnalView + 1);
      SetIsplus(true);
    }
  }, [originnalView]);

  // path param id = id ของข่าว
  function valueID(id) {
    SetNewsid(id);
    const thumbId = id - 1; // ช่องใน object
    SetOriView(newList[thumbId].view);
  }
  // เพิ่มยอด view แล้วเปลี่ยนหน้า
  useEffect(() => {
    // SetviewValue(originnalView + 1);
    if (Isplus === true) {
      axios
        .post('http://0.0.0.0:3200/api/addNewsViewByID', {
          Id: IdNews,
          View: viewValue,
        })
        .then(() => {
          SetIsplus(false);
          navigate.push('/aboutus/detail', { news_id: IdNews });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [Isplus]);
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
        {Object.values(newList).map((data, index) => (
          <Card className={classes.card} key={data.news_id}>
            <div className={classes.imgstytes}>
              <img
                src={imageDATA[index]}
                style={{ height: 260, objectFit: 'cover' }}
              />
              {/* <img style={{ height: 260 }} /> */}
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
                  // href='/about-us/detail'
                  variant='text'
                  size='medium'
                  style={{ color: '#FE6439' }}
                  onClick={() => valueID(data.news_id)}>
                  อ่านต่อ
                  <KeyboardArrowRight />
                </Button>
              </Box>
            </Box>
          </Card>
        ))}
      </div>
      <Footer />
    </>
  );
}
export default allNew;
