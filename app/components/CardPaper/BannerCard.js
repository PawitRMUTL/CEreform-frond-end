/** @format */

import React from 'react';
import useStyles from './cardStyle-jss';
import imagebanner from '../../../public/images/rootbanner.png';
function BannerCard() {
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.bannerRoot}>
        <img
          // src='./images/test-gif.gif'
          src={imagebanner}
          style={{ width: '100%' }}
        />
      </div>
    </>
  );
}
export default BannerCard;
