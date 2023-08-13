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
function newdetail() {
  const location = useLocation();
  const [idNews, SetIdNews] = useState();
  const [checkvalue, Setcheckvalue] = useState(false);
  const [dataNew, SetDataNew] = useState([]);
  let newsid = [];

  useEffect(() => {
    newsid = location.state.news_id;
    SetIdNews(newsid);
  }, [location]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'http://0.0.0.0:3200/api/listnews_detail',
          {
            id: newsid,
          }
        );
        if (!checkvalue) {
          Setcheckvalue(true);
          SetDataNew(response.data);
        }
      } catch (error) {
        console.log('error fetchData is ', error);
      }
      // console.log('dataNew is ', dataNew);
    };

    fetchData();
  }, [checkvalue]);

  return (
    <div>
      <section className='sectionnewdetaill'>
        {/* topic in text */}
        {Object.values(dataNew).map((data) => (
          <div key={data.news_id}>
            <h1>{data.news_name}</h1>
            <div className='newdetaillSubtile'>
              <span>เผยแพร่เมื่อ : 17 05 2565</span>
              <span>
                โดย : ณัฏฐ์พัฒน์ คนมีฉลาด &nbsp; <AiOutlineEye />
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
