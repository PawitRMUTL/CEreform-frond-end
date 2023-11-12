/** @format */

import React, { useState } from 'react';
import axios from 'axios';

import { MaterialDropZone } from '../../../components';
import { hostBackend } from '../../../../env';
function Createfrom() {
  const [files] = useState([]);
  const [imageData, setImageData] = useState();
  // const [checkvalue, Setcheckvalue] = useState(false);

  const fetchImage = async () => {
    try {
      const response = await axios.get(`${hostBackend}/api/Readimagenew`);
      console.log(response);
      setImageData(response.data);
    } catch (error) {
      // Handle the error here
      console.error('Error fetching image:', error);
    }
  };
  // console.log(imageData);

  // const [imageName, setImageName] = useState('image1.png'); // Default image name

  // const handleChangeImage = (event) => {
  //   setImageName(event.target.value);
  // };

  // // Import the image dynamically based on the imageName variable
  // const image = require(`../images/'${imageName}'`);

  return (
    <>
      {/* <div> */}
      {/* <img src={image.default} alt='Image' /> */}

      {/* Input field to change the dynamic part of the image name */}
      {/* <input type='text' value={imageName} onChange={handleChangeImage} /> */}
      {/* </div> */}
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
