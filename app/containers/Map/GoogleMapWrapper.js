/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import { LoadScript } from '@react-google-maps/api';

function GoogleMapWrapper(props) {
  const { children } = props;
  return (
    <LoadScript
      {...props}
      googleMapsApiKey='AIzaSyDEv3fBVth50JgRmZq_lCRMaIlXWZymvcE'>
      {children}
    </LoadScript>
  );
}

GoogleMapWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GoogleMapWrapper;
