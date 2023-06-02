/** @format */

import React from 'react';
import Slider from 'react-slick';
import { makeStyles } from 'tss-react/mui';
import PropTypes from 'prop-types';
import {
  Card, Typography, CardContent,
  Box
} from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowForward from '@mui/icons-material/ArrowForward';
import ArrowBack from '@mui/icons-material/ArrowBack';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import GuideData from '../../api/dummy/guideData';
import 'dan-styles/vendors/slick-carousel/slick-carousel.css';
import 'dan-styles/vendors/slick-carousel/slick.css';
import 'dan-styles/vendors/slick-carousel/slick-theme.css';

function SampleNextArrow(props) {
  const { onClick } = props;

  return (
    <IconButton className='nav-next' onClick={onClick} size='large'>
      <div style={{ fontSize: '14px' }}>Next</div>
      <ArrowForward />
    </IconButton>
  );
}

SampleNextArrow.propTypes = {
  onClick: PropTypes.func,
};

SampleNextArrow.defaultProps = {
  onClick: undefined,
};

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton className='nav-prev' onClick={onClick} size='large'>
      <ArrowBack /> <div style={{ fontSize: '14px' }}>Back</div>
    </IconButton>
  );
}

SamplePrevArrow.propTypes = {
  onClick: PropTypes.func,
};

SamplePrevArrow.defaultProps = {
  onClick: undefined,
};
const useStyles = makeStyles()(() => ({
  item: {
    '&:hover': {
      boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    },
  },
}));

function AutoplayCarousel() {
  const { classes } = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    centerMode: false,
    speed: 500,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'ease-out',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 915,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 613,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='container custom-arrow ' style={{ margin: 4 }}>
      <Slider {...settings}>
        {Object.values(GuideData).map((data) => (
          <Card
            sx={{ maxWidth: 375, height: 450 }}
            key={data.id}
            className={classes.item}>
            <div style={{ Width: 600, maxheight: 260 }}>
              <img src={data.imgPath} />
            </div>
            <CardContent>
              <Typography sx={{ textAlign: 'left', padding: 1 }}>
                {data.date}
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                style={{ padding: 10, textAlign: 'center' }}>
                {data.label}
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'end',
              }}>
              <Button size='medium'>
                อ่านต่อ
                <KeyboardArrowRight />
              </Button>
            </Box>
          </Card>
        ))}
      </Slider>
    </div>
  );
}

export default AutoplayCarousel;
