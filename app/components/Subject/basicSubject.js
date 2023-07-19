/** @format */
import React from 'react';
import './styles.css';
import iconsub1 from '../../../public/images/basicsubject/001-Basic.png';
import iconsub2 from '../../../public/images/basicsubject/002-mathCom.png';
import iconsub3 from '../../../public/images/basicsubject/003-Micro.png';
import iconsub4 from '../../../public/images/basicsubject/004-data structure.png';
import iconsub5 from '../../../public/images/basicsubject/005-archittec.png';
import iconsub6 from '../../../public/images/basicsubject/006-comnet.png';
import iconsub7 from '../../../public/images/basicsubject/007-Datasecurity.png';
import iconsub8 from '../../../public/images/basicsubject/008-SA.png';
import iconsub9 from '../../../public/images/basicsubject/009-operatingSystem.png';

function Basicsubject() {
  return (
    <>
      <div className='rootbasicsubject'>
        <div className='stylesbasicsubject'>
          <img src={iconsub1} />
          <div className='txtstyles'>
            <span>Basic Programming</span>
            <span>พื้นฐานการเขียนโปรแกรม</span>
          </div>
        </div>
        <div className='stylesbasicsubject'>
          <img src={iconsub2} />
          <div className='txtstyles'>
            <span>Mathematical for Computer</span>
            <span>คณิตศาสตร์ทางคอมพิวเตอร์</span>
          </div>
        </div>
        <div className='stylesbasicsubject'>
          <img src={iconsub3} />
          <div className='txtstyles'>
            <span>Digital Circuits and Logic Design</span>
            <span>วงจรดิจิทัลและการออกแบบลอจิก</span>
          </div>
        </div>
      </div>
      <div className='rootbasicsubject'>
        <div className='stylesbasicsubject'>
          <img src={iconsub4} />
          <div className='txtstyles'>
            <span>Data Structures and Algorithms</span>
            <span>โครงสร้างข้อมูลและอัลกอริทึม</span>
          </div>
        </div>
        <div className='stylesbasicsubject'>
          <img src={iconsub5} />
          <div className='txtstyles'>
            <span>Computer architecture </span>
            <span>สถาปัตยกรรมคอมพิวเตอร์</span>
          </div>
        </div>
        <div className='stylesbasicsubject'>
          <img src={iconsub6} />
          <div className='txtstyles'>
            <span>Computer Network</span>
            <span>เครือข่ายคอมพิวเตอร์</span>
          </div>
        </div>
      </div>
      <div className='rootbasicsubject'>
        <div className='stylesbasicsubject'>
          <img src={iconsub7} />
          <div className='txtstyles'>
            <span>Computer Securitys</span>
            <span>ความมั่นคงปลอดภัยของคอมพิวเตอร์</span>
          </div>
        </div>
        <div className='stylesbasicsubject'>
          <img src={iconsub8} />
          <div className='txtstyles'>
            <span>System Analysis and Design</span>
            <span>การวิเคราะห์และออกแบบระบบ</span>
          </div>
        </div>
        <div className='stylesbasicsubject'>
          <img src={iconsub9} />
          <div className='txtstyles'>
            <span>Operating System</span>
            <span>ระบบปฏิบัติการ</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Basicsubject;
