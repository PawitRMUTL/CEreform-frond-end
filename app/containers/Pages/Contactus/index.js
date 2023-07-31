/** @format */

import { Typography } from '@mui/material';
import React from 'react';
import './styles.css';

function contactus() {
  return (
    <>
      <header>
        <Typography
          variant='h4'
          sx={{
            textAlign: 'center',
            background:
              'linear-gradient(94deg, rgba(255,155,123,1) 47%, rgba(254,111,65,1) 48%)',
            backgroundClip: 'text',
            color: 'transparent',
            fontWeight: 700,
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))',
          }}>
          ติดต่อเรา
        </Typography>
      </header>
      <section className='section'>
        <article>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.6996324464653!2d98.94960612058641!3d18.811534715875364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a4386eb41f7%3A0xa9be609a97f85204!2z4LiE4LiT4Liw4Lin4Li04Lio4Lin4LiB4Lij4Lij4Lih4LiE4Lit4Lih4Lie4Li04Lin4LmA4LiV4Lit4Lij4LmMIFJNVVRMLg!5e0!3m2!1sth!2sth!4v1690793711189!5m2!1sth!2sth'
            width='600'
            height='450'
            style={{ border: '0px', padding: '2%' }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </article>
      </section>
      <section className='content'>
        <div>
          <Typography fontWeight={500} fontSize={20} sx={{ color: '#FE6F41' }}>
            มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา
          </Typography>
          <div>
            <Typography>
              128 ถ.ห้วยแก้ว ต.ช้างเผือก อ.เมือง จ.เชียงใหม่ 50300
            </Typography>
            <Typography>โทรศัพท์ : 0 5392 1444</Typography>
            <Typography>อีเมลล์ : saraban@rmutl.ac.th</Typography>
          </div>
        </div>
        <div>
          <Typography fontWeight={500} fontSize={20} sx={{ color: '#FE6F41' }}>
            สำนักงานสาขาวิศวกรรมไฟฟ้า
          </Typography>
          <div>content</div>
        </div>
        <div>
          <Typography fontWeight={500} fontSize={20} sx={{ color: '#FE6F41' }}>
            หลักสูตรวิศวกรรมคอมพิวเตอร์
          </Typography>
          <div>content</div>
        </div>
      </section>
    </>
  );
}

export default contactus;
