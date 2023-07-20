/** @format */

import React, { useState } from 'react';
import axios from 'axios';

import { MaterialDropZone } from '../../../components';
function Createfrom() {
  const [files] = useState([]);
  // const [checkvalue, Setcheckvalue] = useState(false);
  const [imageData, setImageData] = useState();

  const fetchImage = async () => {
    try {
      const response = await axios.get('http://0.0.0.0:3200/api/Readimagenew');
      console.log(response);
      setImageData(response.data);
    } catch (error) {
      // Handle the error here
      console.error('Error fetching image:', error);
    }
  };
  // console.log(imageData);

  return (
    <>
      <div>
        <MaterialDropZone
          acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
          files={files}
          showPreviews
          maxSize={5000000}
          filesLimit={4}
          text='Drag and drop image(s) here or click'
        />
      </div>
      <div>
        <button onClick={fetchImage}>Fetch Image</button>
        {imageData && (
          <div>
            <img
              src={`data:image/jpeg;base64,${imageData}`}
              alt='Fetched Image'
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Createfrom;
