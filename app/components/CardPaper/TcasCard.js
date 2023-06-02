/** @format */

import React from 'react';
import imgApi from 'dan-api/images/photos';

function TcasCard() {
  return (
    <img
      src={imgApi[21]}
      style={{
        height: 550,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 16,
      }}
    />
  );
}

export default TcasCard;
