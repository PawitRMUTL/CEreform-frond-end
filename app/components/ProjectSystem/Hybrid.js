/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function ShowHybrid(props) {
  const {
    englishName, thaiName, type, link, year
  } = props;
  return (
    <>
      <div className='container'>
        <a className='card3' href={link}>
          <div>
            <div className='title'>{englishName}</div>
            <span className='small'>{thaiName}</span>
            <span className='year'>ปีการศึกษา {year}</span>
          </div>
          <div className='go-corner-Hybrid' href='#'>
            <div className='go-arrow'>{type}</div>
          </div>
        </a>
      </div>
    </>
  );
}
ShowHybrid.propTypes = {
  englishName: PropTypes.string.isRequired,
  thaiName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};
export default ShowHybrid;
