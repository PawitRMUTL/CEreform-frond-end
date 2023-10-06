/** @format */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';
import useStyles from './index-jss';
function showimage(props) {
  const { classes } = useStyles();
  const { idNews } = props;
  const [imageDATA, setImageDATA] = useState([]);
  const [imageresponse, Setimageresponse] = useState([]);

  useEffect(() => {
    if (idNews !== undefined) {
      // console.log('idNews', idNews);
      const fetchData = async () => {
        try {
          const response = await axios.post(
            'http://10.21.45.100:3000/api/Getimagesnews',
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
      const promises = Object.values(imageresponse).map((data) => import(`/home/ce_reform/testdeployByAun/image/ImageNew/${data.filename}`).then((image) => image.default));
      Promise.all(promises).then((imagePaths) => {
        const ImageValue = [];
        imagePaths.forEach((index) => ImageValue.push(index));
        setImageDATA(ImageValue);
        // console.log(ImageValue);
      });
    }
  }, [imageresponse]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };
  return (
    <>
      <div>
        {Object.values(imageDATA).map((data, index) => (
          <div
            onClick={() => handleThumbnailClick(index)}
            // onClick={() => handleThumbnailClick(index)}
            key={data.filename}
            style={{
              display: index === selectedImageIndex ? 'block' : 'none',
            }}>
            <img src={imageDATA[index]} />
          </div>
        ))}
        {/* Add more slides as needed */}
        {/* thumbnail image  */}
        <div className={classes.thumbnail}>
          {Object.values(imageDATA).map((data, index) => (
            <div
              onClick={() => handleThumbnailClick(index)}
              // onClick={() => handleThumbnailClick(index)}
              key={data.filename}
              style={{
                marginRight: 10,
                boxShadow:
                  index === selectedImageIndex
                    ? 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                    : 'none',
              }}>
              <img src={imageDATA[index]} className='tunmbnaill' />
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
