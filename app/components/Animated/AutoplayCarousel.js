/** @format */

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import ItemsCarousel from 'react-items-carousel';
import axios from 'axios';
import { Card, Typography, Box } from '@mui/material';
import Button from '@mui/material/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';

import useStyles from './index-jss';
import divider from '../../../public/images/divider.svg';
import './styles.css';

function AutoplayCarousel() {
  const { classes } = useStyles();
  const navigate = useHistory();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [imageDATA, setImageDATA] = useState([]);
  const [newList, SetnewList] = useState([]);
  const [checkvalue, Setcheckvalue] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://0.0.0.0:3200/api/GetNewlist');
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
      const promises = Object.values(newList).map((data) => import(
        `/Users/baconinhell/Desktop/dandelion-pro_v25/starter-project/CEreform-frond-end/app/containers/ImageNew/${data.filename}`
        ).then((image) => image.default)
      );
      Promise.all(promises).then((imagePaths) => {
        const ImageValue = [];
        imagePaths.forEach((index) => ImageValue.push(index));
        setImageDATA(ImageValue);
      });
    }
  }, [newList]);

  const handleSlideChange = (index) => {
    setActiveItemIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the active item index to move to the next slide
      setActiveItemIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000); // Change the interval duration according to your preference

    return () => {
      // Clear the interval when the component is unmounted or activeItemIndex changes
      clearInterval(interval);
    };
  }, [activeItemIndex]);
  const getNumberOfCards = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      return 3; // For larger screens (including iPads)
    }
    if (screenWidth >= 768) {
      return 2; // For iPads (landscape orientation)
    }
    return 1; // For smaller screens and iPads (portrait orientation)
  };

  const getGutter = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      return 20; // For larger screens (including iPads)
    }
    return 10; // For smaller screens and iPads
  };

  function valueID(id) {
    navigate.push('/aboutus/detail', { news_id: id });
  }

  return (
    <div className='layout'>
      <ItemsCarousel
        requestToChangeActive={handleSlideChange}
        activeItemIndex={activeItemIndex}
        numberOfCards={getNumberOfCards()}
        gutter={getGutter()}
        outsideChevron
        chevronWidth={40}
        leftChevron={
          <button className='button'>
            <div className='iconstyles'>
              <IoChevronBackSharp />
            </div>
          </button>
        }
        rightChevron={
          <button className='button'>
            <div className='iconstylesr'>
              <IoChevronForwardSharp />
            </div>
          </button>
        }
        // autoPlay={true}
        infiniteLoop={true}>
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
      </ItemsCarousel>
      <div
        style={{
          marginTop: '3%',
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
