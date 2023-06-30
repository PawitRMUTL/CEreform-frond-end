/** @format */

import React, { useState } from 'react';
import axios from 'axios';

function CECourses() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      await axios.post('http://0.0.0.0:3200/api/uploadfilePDF', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadStatus('ไฟล์ PDF อัปโหลดเรียบร้อยแล้ว');
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการอัปโหลดไฟล์ PDF:', error);
      setUploadStatus('เกิดข้อผิดพลาดในการอัปโหลดไฟล์ PDF');
    }
  };

  return (
    <div>
      <h2>TEST</h2>
      {uploadStatus && <p>{uploadStatus}</p>}
      <form onSubmit={handleFormSubmit}>
        <input type='file' accept='.pdf' onChange={handleFileChange} />
        <button type='submit'>อัปโหลด</button>
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
