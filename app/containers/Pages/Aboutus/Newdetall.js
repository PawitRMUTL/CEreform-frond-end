/** @format */

import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import axios from 'axios';
import { AiOutlineEye } from 'react-icons/ai';
import { useLocation } from 'react-router';
// import { useLocation } from 'react-router-dom';
import Sliderimage from './SilderimageNew';
import './styles.css';
import { Footer } from '../../../components';
import { hostBackend } from '../../../../env';
function newdetail() {
  const location = useLocation();
  const [idNews, SetIdNews] = useState();
  const [checkvalue, Setcheckvalue] = useState(false);
  const [dataNew, SetDataNew] = useState([]);
  const [DATE, SetDATE] = useState('');
  let newsid = [];
  useEffect(() => {
    newsid = location.state.news_id;
    SetIdNews(newsid);
  }, [location]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${hostBackend}/api/listnews_detail`,
          {
            id: newsid,
          },
        );
        if (!checkvalue) {
          Setcheckvalue(true);
          SetDataNew(response.data);
          SetDATE(response.data[0].news_date);
        }
      } catch (error) {
        console.log('error fetchData is ', error);
      }
      // console.log('dataNew is ', dataNew);
    };

    fetchData();
  }, [checkvalue]);
  useEffect(() => {
    if (DATE !== undefined) {
      console.log('dataNew', DATE);
    }
  }, [DATE]);
  const originalDate = new Date(DATE);
  const convertedDate = originalDate.toLocaleString('th-TH', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <div>
      <section className='sectionnewdetaill'>
        {/* topic in text */}
        {Object.values(dataNew).map((data) => (
          <div key={data.news_id}>
            <h1>{data.news_name}</h1>
            <div className='newdetaillSubtile'>
              <span>เผยแพร่เมื่อ : {convertedDate}</span>
              <span>
                โดย : {data.created_by} &nbsp; <AiOutlineEye />
                จำนวนคนเข้าชม {data.view} ครั้ง
              </span>
            </div>
          </div>
        ))}

        {/* Image */}
        <div>
          <Sliderimage idNews={idNews} />
        </div>
      </section>
      <section
        className='section'
        style={{
          marginTop: '0',
          paddingLeft: '15%',
          paddingRight: '15%',
          marginBottom: '15%',
        }}>
        <div
          style={{
            width: '100%',
          }}>
          {Object.values(dataNew).map((data) => (
            <div key={data.news_id}>
              <Typography variant='h5'>{data.news_heading}</Typography>
              <Typography style={{ margin: '20px 0px 20px', fontSize: '18px' }}>
                {data.news_content}
              </Typography>
              <Typography style={{ margin: '20px 0px 20px', fontSize: '18px' }}>
                {data.news_content2}
              </Typography>
            </div>
          ))}
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default newdetail;
