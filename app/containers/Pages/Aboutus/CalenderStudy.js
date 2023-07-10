/** @format */

import React, { useEffect, useState } from 'react';

import { Box, Card, Typography } from '@mui/material';
import axios from 'axios';
import './styles.css';
import PDF from '../../../../public/images/pdf.png';

function CalenderStudy() {
  const [namefile, Setnamefile] = useState([]);
  const [checkvalue, Setcheckvalue] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://0.0.0.0:3200/api/GetfilePFD');
        if (!checkvalue) {
          Setcheckvalue(true);
          Setnamefile(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [checkvalue]);

  const FileTypeNormal = namefile.filter((data) => data.type === 'normal');
  const FileTypeCooper = namefile.filter((data) => data.type === 'cooperative');

  const slicedFileTypeNormal = FileTypeNormal.slice(0, 4);
  const slicedFileTypeCooper = FileTypeCooper.slice(0, 2);

  const Submit = (filename) => {
    // using Java Script method to get PDF file
    fetch(filename).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        const alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = filename;
        alink.click();
      });
    });
  };

  return (
    <>
      <header>
        <Box
          sx={{
            textAlign: 'center',
            background:
              'linear-gradient(94deg, rgba(255,155,123,1) 46%, rgba(254,111,65,1) 50%)',
            backgroundClip: 'text',
            color: 'transparent',
            fontWeight: 600,
            filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1))',
            fontSize: '32px',
          }}>
          ปฎิทินการศึกษา
        </Box>
      </header>
      <section className='section'>
        <Typography variant='h6'>ดาวน์โหลดปฏิทินการศึกษา</Typography>
        <article>
          {slicedFileTypeNormal && Object.values(slicedFileTypeNormal).map((data) => (
              <Card className='Card' key={data.id}>
                <div className='Cardpart1'>
                  <img src={PDF} />
                </div>
                <div className='Cardpart2'>
                  {/* <Typography>{data.file_name}</Typography> */}
                  <Typography>
                    ปฎิทินการศึกษาประจำปีการศึกษา {data.year}
                  </Typography>
                  <button onClick={() => Submit(data.file_name)}>
                    Download file
                  </button>
                </div>
              </Card>
            ))}
        </article>
      </section>
      <section className='section'>
        <Typography variant='h6'>
          ดาวน์โหลดปฏิทินการโครงการพัฒนาทักษะวิชาชีพของนักศึกษา
        </Typography>
        <article>
          {slicedFileTypeCooper && Object.values(slicedFileTypeCooper).map((data) => (
              <Card className='Card' key={data.id}>
                <div className='Cardpart1'>
                  <img src={PDF} />
                </div>
                <div className='Cardpart2'>
                  {/* <Typography>{data.file_name}</Typography> */}
                  <Typography>
                    ปฎิทินการโครงการพัฒนาทักษะวิชาชีพของนักศึกษาประจำปีการศึกษา
                    {data.year}
                  </Typography>
                  <button onClick={() => Submit(data.file_name)}>
                    Download file
                  </button>
                </div>
              </Card>
            ))}
        </article>
      </section>
    </>
  );
}
export default CalenderStudy;
