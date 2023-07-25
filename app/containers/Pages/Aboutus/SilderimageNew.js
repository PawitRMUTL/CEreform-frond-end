/** @format */

import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';
import axios from 'axios';
// Import the CSS styles for react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useStyles from './index-jss';
function showimage(props) {
  const { classes } = useStyles();
  const mainCarouselRef = useRef(null);
  const { idNews } = props;
  const [imageDATA, setImageDATA] = useState([]);
  const [imageresponse, Setimageresponse] = useState([]);

  useEffect(() => {
    if (idNews !== undefined) {
      // console.log('idNews', idNews);
      const fetchData = async () => {
        try {
          const response = await axios.post(
            'http://0.0.0.0:3200/api/Getimagesnews',
            { id: idNews }
          );
          // console.log(response);
          Setimageresponse(response.data);
        } catch (error) {
          console.log('error fetchData is'.error);
        }
      };

      fetchData();
    }
  }, [idNews]);

  useEffect(() => {
    if (imageresponse !== undefined) {
      // let ImageValue;
      const promises = Object.values(imageresponse).map((data) => import(`../../ImageNew/${data.filename}`).then((image) => image.default));
      Promise.all(promises).then((imagePaths) => {
        const ImageValue = [];
        imagePaths.forEach((index) => ImageValue.push(index));
        setImageDATA(ImageValue);
        // console.log(ImageValue);
      });
    }
  }, [imageresponse]);

  // console.log('imageresponse is ', imageresponse);

  const handleThumbnailClick = (index) => {
    mainCarouselRef.current.slickGoTo(index);
  };

  const mainCarouselSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 7000, // Set autoplay speed in milliseconds
  };
  return (
    <>
      <div>
        <Slider {...mainCarouselSettings} ref={mainCarouselRef}>
          {Object.values(imageDATA).map((data, index) => (
            <div
              onClick={() => handleThumbnailClick(index)}
              key={data.filename}>
              <img src={imageDATA[index]} />
            </div>
          ))}
          {/* Add more slides as needed */}
        </Slider>
        {/* thumbnail image  */}
        <div className={classes.thumbnail} >
          {Object.values(imageDATA).map((data, index) => (
            <div
              onClick={() => handleThumbnailClick(index)}
              key={data.filename}
              style={{
                marginRight: 10,
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
              }}>
              <img src={imageDATA[index]} style={{ width: '200px' }} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

showimage.propTypes = {
  idNews: PropTypes.any,
};

export default showimage;

//  <Slider {...thumbnailCarouselSettings}>
//  <div onClick={() => handleThumbnailClick(0)}>
//    <img
//      src='http://via.placeholder.com/1050x700/9D4646/FFFFFF/'
//      alt='Thumbnail 1'
//    />
//  </div>
//  <div onClick={() => handleThumbnailClick(1)}>
//    <img
//      src='http://via.placeholder.com/1050x700/044920/FFFFFF/'
//      alt='Thumbnail 2'
//    />
//  </div>
//  <div onClick={() => handleThumbnailClick(2)}>
//    <img
//      src='http://via.placeholder.com/1050x700/005800/FFFFFF/'
//      alt='Thumbnail 3'
//    />
//  </div>

//  </Slider>
