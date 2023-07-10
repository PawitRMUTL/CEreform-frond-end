/** @format */

import React from 'react';
import { Typography } from '@mui/material';
import imagebanner from '../../../../public/images/rootbanner.svg';
import { Basicsubject, Footer, FutureCareerSubport } from '../../../components';
import './styles.css';
function CECourses() {
  return (
    <>
      <header>
        <Typography
          variant='h4'
          sx={{
            textAlign: 'center',
            background:
              'linear-gradient(94deg, rgba(255,155,123,1) 44%, rgba(254,111,65,1) 48%)',
            backgroundClip: 'text',
            color: 'transparent',
            fontWeight: 700,
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))',
          }}>
          สาขาวิศวกรรมคอมพิวเตอร์ ?
        </Typography>
      </header>
      <section
        style={{
          marginTop: '2%',
          padding: '0px 5% 0px 5%',
          // border: '2px solid red',
          textAlign: 'center',
        }}>
        <Typography
          style={{ fontSize: '20px', fontWeight: 400, marginBottom: '30px' }}>
          วิศวกรรมคอมพิวเตอร์เป็นสาขาวิชาที่เกี่ยวข้องกับการสร้างและออกแบบระบบคอมพิวเตอร์
          <br />
          รวมถึงการดูแลรักษาความปลอดภัยทางระบบเครือข่าย
        </Typography>
        <img src={imagebanner} className='imgsyles' />
        <Typography style={{ fontSize: '16px', marginTop: '30px' }}>
          มีทั้งด้านฮาร์ดแวร์ ซอฟต์แวร์
          และการสื่อสารควบคู่กับความรู้ทางด้านวิศวกรรมหลักสูตรการเรียนการ
          <br />
          สอนจะมุ่งเน้นทางด้านทฤษฎี และการฝึกฝนปฏิบัติของทางด้านวิศวกรรมไฟฟ้า
          คณิตศาสตร์ และวิทยาศาสตร์ รวมถึงการประยุกต์เข้า
          <br />
          กับปัญหาทางด้านการออกแบบคอมพิวเตอร์
          และอุปกรณ์ที่ใช้คอมพิวเตอร์ให้สามารถทำงานร่วมกันได้อย่างมีประสิทธิภาพ
        </Typography>
        <Typography
          style={{
            color: '#FE6F41',
            fontWeight: 700,
            fontSize: '20px',
            margin: '50px 0px 50px',
          }}>
          เนื้อหาสาระสำคัญที่จะได้เรียนจากสาขานี้มีอยู่หลากหลาย
        </Typography>
        <div style={{ fontSize: '16px', fontFamily: 'Noto Sans Thai' }}>
          <ul style={{ textAlign: 'center' }}>
            <li> • ฮาร์ดแวร์และระบบฝังตัว (hardware and embedded systems)</li>
            <li>
              • ระบบฐานข้อมูลและวิศวกรรมข้อมูล (database systems and data
              engineering)
            </li>
            <li>
              • ระบบเครือข่ายและความปลอดภัยของข้อมูล (networks and information
              security)
            </li>
          </ul>
        </div>
        <Typography style={{ margin: '30px 0px 30px' }}>
          ก่อนที่จะสามารถเรียนและเข้าใจในเนื้อหาก็ควรมีพื้่นฐานก่อน
          การมีพื้่นฐานที่ดีนั้นจะช่วยให้การเรียนรู้ทักษะ
          <br />
          และความรู้ใหม่ๆเป็นไปได้ดีมากขึ้น ซึ่งพื้นฐานที่ว่านั้นได้แก่
          คณิตศาสตร์ ,ภาษาอังกฤษ
        </Typography>
        <Typography style={{ margin: '30px 0px 30px' }}>
          ทำไมถึงเป็นสองวิชานี้?
          เพราะคณิตศาสตร์จะช่วยให้เราสามารถเข้าใจลอจิกในการทำงานของระบบคอมพิวเตอร์
          <br />
          และการเขียนโปรแกรม จะช่วยให้จับแนวในการศึกษาต่อได้ง่ายยิ่งขึ้น
        </Typography>
        <Typography>
          ส่วนภาษาอังกฤษนั้นสำคัญยังไง?
          ไม่ได้หมายความว่าคนที่ไม่เก่งภาษาอังกฤษจะเรียนวิศวคอมไม่ได้ แต่การ{' '}
          <br />
          ที่มีพื้นฐานด้านภาษาอังกฤษที่ดีจะช่วยให้เราสามารถศึกษานอกเวลา นอกตำรา{' '}
          <br />
          และสืบค้นวิธีแก้ไขปัญหาต่างๆในเว็บไซต์ต่างประเทศได้
          เพราะส่วนใหญ่แล้วคอมมูนิตี้ต่างประเทศ
          <br />
          จะกว้างขวางกว่าทำให้คนที่เก่งอังกฤษมีมุมมองและวิธีแก้ไขปัญหาหรือช่องทางการหาวิธีแก้ปัญหาได้มากกว่าคน
          <br />
          ที่ไม่เก่งภาษาอังกฤษนั่นเอง
        </Typography>
        {/* tab 2 */}
        <div style={{ margin: '30px 0px 40px' }}>
          <Typography
            sx={{
              fontSize: '32px',
              textAlign: 'center',
              background: 'linear-gradient(94deg, #8C8C8C 44%, #6F6F6F 48%)',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: 700,
              filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))',
            }}>
            วิชาเรียนพื้นฐาน
          </Typography>
        </div>
        <div>
          <Basicsubject />
        </div>
        {/* tab3 */}
        <div style={{ margin: '50px 0px 40px' }}>
          <Typography
            sx={{
              fontSize: '32px',
              textAlign: 'center',
              background: 'linear-gradient(94deg, #8C8C8C 44%, #6F6F6F 48%)',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: 700,
              filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))',
            }}>
            อาชีพที่รองรับ
          </Typography>
          <div>
            <FutureCareerSubport />
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default CECourses;
