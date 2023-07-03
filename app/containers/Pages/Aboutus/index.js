/** @format */

import React, { useState } from 'react';
import axios from 'axios';

function CECourses() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('pdf-file', selectedFile, fileName);
    formData.append('owner', 'admin');
    formData.append('type', 'cooperative');
    formData.append('year', 2562);
    // console.log(formData);
    // console.log('File Name in formData:', formData.get('pdf-file').name); // Logging the file name in formData
    axios
      .post('http://0.0.0.0:3200/api/uploadfilePDF', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>TEST</h2>
      <form onSubmit={handleSubmit}>
        <input type='file' onChange={handleFileChange} accept='.pdf' />
        <button type='submit'>Upload</button>
      </form>
    </div>
  );
}

export default CECourses;
//   .then((data) => {
//     setName(data.data.User);
//     setStatus(data.data.stateRole);
//     console.log('data user : ' + data.data.User);
//     console.log('data role : ' + data.data.stateRole);
//   });
// Axios.post('/api/uploadfilePDF', formData, {
//   headers: {
//     'Content-Type': 'multipart/form-data',
//   },
// })
