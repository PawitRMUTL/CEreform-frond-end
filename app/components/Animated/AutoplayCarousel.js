/** @format */

import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import { Card, Typography, Box } from '@mui/material';
import Button from '@mui/material/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';

import GuideData from '../../api/dummy/guideData';
import useStyles from './index-jss';
import divider from '../../../public/images/divider.svg';
import './styles.css';

function AutoplayCarousel() {
  const { classes } = useStyles();
  const [activeItemIndex, setActiveItemIndex] = React.useState(0);

  const handleSlideChange = (index) => {
    setActiveItemIndex(index);
  };

  React.useEffect(() => {
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
        {Object.values(GuideData).map((data) => (
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
          href='/about-us/allNew'
          className={classes.buttonlayout}>
          อ่านเพิ่มเติม
        </Button>
      </div>
    </div>
  );
}

export default AutoplayCarousel;
