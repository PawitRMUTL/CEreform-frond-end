/** @format */

import React, { useRef } from 'react';
import Slider from 'react-slick';

// Import the CSS styles for react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function showimage() {
  const mainCarouselRef = useRef(null);

  const handleThumbnailClick = (index) => {
    mainCarouselRef.current.slickGoTo(index);
  };

  const mainCarouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds
  };

  const thumbnailCarouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
  };
  return (
    <>
      <div>
        <Slider {...mainCarouselSettings} ref={mainCarouselRef}>
          <div>
            <img
              src='http://via.placeholder.com/1050x700/C6FF00/767676/'
              alt='Slide 1'
            />
          </div>
          <div>
            <img
              src='http://via.placeholder.com/1050x700/044920/767676/'
              alt='Slide 2'
            />
          </div>
          <div>
            <img
              src='http://via.placeholder.com/1050x700/005800/767676/'
              alt='Slide 3'
            />
          </div>
          {/* Add more slides as needed */}
        </Slider>
        <div style={{ width: 600, height: 200 }}>
          {/* thumbnail Zone */}
          <Slider {...thumbnailCarouselSettings}>
            <div onClick={() => handleThumbnailClick(0)}>
              <img
                src='http://via.placeholder.com/1050x700/C6FF00/767676/'
                alt='Thumbnail 1'
              />
            </div>
            <div onClick={() => handleThumbnailClick(1)}>
              <img
                src='http://via.placeholder.com/1050x700/044920/767676/'
                alt='Thumbnail 2'
              />
            </div>
            <div onClick={() => handleThumbnailClick(2)}>
              <img
                src='http://via.placeholder.com/1050x700/005800/767676/'
                alt='Thumbnail 3'
              />
            </div>
            {/* Add more thumbnails as needed */}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default showimage;
