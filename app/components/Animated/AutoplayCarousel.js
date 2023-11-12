/** @format */

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Card, Typography, Box } from '@mui/material';
import Button from '@mui/material/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import useStyles from './index-jss';
import divider from '../../../public/images/divider.svg';
import './styles.css';
import { hostBackend, urlImage } from '../../../env';
// const handleDragStart = (e) => e.preventDefault();

function AutoplayCarousel() {
  const { classes } = useStyles();
  const navigate = useHistory();
  // const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [imageDATA, setImageDATA] = useState([]);
  const [newList, SetnewList] = useState([]);
  const [checkvalue, Setcheckvalue] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${hostBackend}/api/GetNewlist`,
        );
        const tumbdata = response.data;
        const Removedata = tumbdata.splice(0, 4);
        if (!checkvalue) {
          Setcheckvalue(true);
          SetnewList(Removedata);
        }
      } catch (error) {
        console.log('error fetchData is ', error);
      }
      newList.slice(1, 5);
    };
    fetchData();
  }, [checkvalue]);
  useEffect(() => {
    if (newList !== undefined) {
      const promises = Object.values(newList).map((data) => import(`${urlImage}/ImageNew/${data.filename}`).then((image) => image.default),);
      Promise.all(promises).then((imagePaths) => {
        const ImageValue = [];
        imagePaths.forEach((index) => ImageValue.push(index));
        setImageDATA(ImageValue);
      });
    }
  }, [newList]);

  function valueID(id) {
    navigate.push('/aboutus/detail', { news_id: id });
  }

  return (
    <div className='layout'>
      <AliceCarousel
        items={3}
        responsive={{
          0: { items: 1 },
          768: { items: 2 },
          1024: { items: 3 },
        }}
        autoPlay
        autoPlayInterval={3000}
        infinite
        disableButtonsControls
        disableDotsControls
        mouseTracking
        paddingLeft={20}>
        {Object.values(newList).map((data, index) => (
          <Card className={classes.card} key={data.news_id}>
            <div className={classes.imgstytes}>
              <img src={imageDATA[index]} />
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
      </AliceCarousel>
      <div
        style={{
          marginTop: '1%',
          marginBottom: '2%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexGrow: 'initial',
        }}>
        <Button
          variant='outlined'
          href='/aboutus/allNew'
          className={classes.buttonlayout}>
          อ่านเพิ่มเติม
        </Button>
      </div>
    </div>
  );
}

export default AutoplayCarousel;
