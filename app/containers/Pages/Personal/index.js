/** @format */

import React, { useEffect, useState } from 'react';
import { Box, Card, Backdrop } from '@mui/material';
import axios from 'axios';
import Button from '@mui/material/Button';
// import Fade from '@mui/material/Fade';
// import Dialog from '@mui/material/Dialog';
import Modal from '@mui/material/Modal';
import email from 'dan-images/email.png';
import telephone from 'dan-images/telephone.png';
import { GrClose } from 'react-icons/Gr';
import './styles.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 480,
  height: 800,
  borderRadius: '50px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  fontFamily: 'Noto Sans Thai',
};

function personal() {
  const [teacherData, Setteacherdata] = useState([]);
  const [imageDATA, setImageDATA] = useState([]);
  const [checkvalue, Setcheckvalue] = useState(false);
  const [tumbdata, Settumbdata] = useState([]);
  const [tumbid, Settumbid] = useState(0);
  const [tumbteacher, Settumbteacher] = useState([]);
  // DiplomaTeacher
  const [Bachelor, SetBachelor] = useState([]);
  const [Master, SetMaster] = useState([]);
  const [Doctor, SetDoctor] = useState([]);
  // Modal Zone
  const [open, setOpen] = useState(false);
  const handleOpen = (imagevalues, id) => {
    Settumbdata(imagevalues);
    Settumbid(id);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  // API SELECT teacher by id
  useEffect(() => {
    if (tumbid !== undefined) {
      axios
        .post('http://0.0.0.0:3200/api/ReadTeacherByID', { id: tumbid })
        .then((response) => Settumbteacher(response.data))
        .catch((error) => {
          console.log(error);
        });
    }
  }, [tumbid]);
  // API Read Teacher list
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://0.0.0.0:3200/api/Teacher_list'
        );
        if (!checkvalue) {
          Setcheckvalue(true);
          Setteacherdata(response.data);
        }
      } catch (error) {
        console.log('error fetchData is ', error);
      }
    };
    fetchData();
  }, [checkvalue]);
  // Load image
  useEffect(() => {
    if (teacherData !== undefined) {
      // let ImageValue;
      const promises = Object.values(teacherData).map((data) => import(`/Users/baconinhell/Desktop/dandelion-pro_v25/starter-project/image/teacher/${data._image}`).then((image) => image.default));
      Promise.all(promises).then((imagePaths) => {
        const ImageValue = [];
        imagePaths.forEach((index) => ImageValue.push(index));
        setImageDATA(ImageValue);
      });
    }
  }, [teacherData]);

  useEffect(() => {
    if (tumbteacher === undefined) {
      console.log('undefined');
    }
    SetBachelor(tumbteacher[0]);
    SetMaster(tumbteacher[1]);
    SetDoctor(tumbteacher[2]);
  }, [tumbteacher]);

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
          คณะอาจารย์ในหลักสูตรวิศวกรรมคอมพิวเตอร์
        </Box>
      </header>

      <section className='section'>
        <article>
          {Object.values(teacherData).map((data, index) => (
            <div key={data.teacher_id}>
              <Card className='Card'>
                <img src={imageDATA[index]} />
                <h2>
                  {data.prefix_english} {data.first_name_english}{' '}
                  {data.last_name_english}{' '}
                </h2>
                <h4>
                  {data.prefix} {data.first_name} {data.last_name}
                  <br />
                  {data._email}
                </h4>
                <div>
                  <Button
                    type='button'
                    onClick={() => handleOpen(imageDATA[index], data.teacher_id)}
                    sx={{
                      color: '#FE6F41',
                      background:
                        'linear-gradient(white, white) padding-box, linear-gradient(to right, #FE6F41, #F8BA1C) border-box',
                      borderRadius: '50em',
                      border: '1px solid transparent',
                      '&:hover': {
                        background: 'linear-gradient(#FE6F41, #F8BA1C)',
                        color: '#FFF',
                        border: '1px solid',
                      },
                    }}>
                    อ่านเพิ่มเติม
                  </Button>
                </div>
              </Card>
            </div>
          ))}
          <Modal
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 900,
              },
            }}>
            <div>
              {Object.values(tumbteacher).map((data) => (
                <div key={data.teacher_id}>
                  <Box sx={style} className='ModalLayout'>
                    <div className='ModalCloseIcon' onClick={handleClose}>
                      <GrClose />
                    </div>
                    <img
                      src={tumbdata}
                      style={{
                        boxShadow: ' 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                      }}
                    />
                    <span className='Modaltitle' style={{ marginTop: '2rem' }}>
                      {data.prefix} {data.first_name} {data.last_name}
                    </span>
                    <span className='Modaltitle'>
                      {data.prefix_english} {data.first_name_english}{' '}
                      {data.last_name_english}
                    </span>
                    <span className='ModalEmail'>{data._email}</span>
                    <div className='ModalSubject'>
                      <span>คณะ {data.section} </span>
                      <span>สาขาวิชา {data.major}</span>
                    </div>
                    <span
                      style={{
                        color: '#000',
                        textAlign: 'left',
                        fontSize: '18px',
                        fontWeight: 700,
                        width: '100%',
                        marginBottom: '1%',
                      }}>
                      คุณวุฒิ
                    </span>
                    <div className='ModalEducation'>
                      <span>{Bachelor?.teacher_diploma} { Bachelor?.graduates_years }</span>
                      <span>{ Bachelor?.university }</span>
                      <span>{Master?.teacher_diploma} { Master?.graduates_years }</span>
                      <span>{Master?.university}</span>
                      <span>{Doctor?.teacher_diploma} { Doctor?.graduates_years }</span>
                      <span>{ Doctor?.university }</span>
                    </div>
                    <span
                      style={{
                        color: '#000',
                        textAlign: 'left',
                        fontSize: '18px',
                        fontWeight: 700,
                        width: '100%',
                        marginBottom: '1%',
                      }}>
                      รายวิชาที่รับผิดชอบ
                    </span>
                    <div className='ModalSujectForTeccher'>
                      <ui>
                        <li>{data.subject_teach1}</li>
                        <li>{data.subject_teach2}</li>
                        <li>{data.subject_teach3}</li>
                        <li>{data.subject_teach4}</li>
                        <li>{data.subject_teach5}</li>
                      </ui>
                    </div>
                    <div className='Modalicon'>
                      <div>
                        <img src={email} />
                        <span>{data._email}</span>
                      </div>
                      <div>
                        <img src={telephone} />
                        <span>{data._phone}</span>
                      </div>
                    </div>
                  </Box>
                </div>
              ))}
            </div>
          </Modal>
        </article>
      </section>
    </>
  );
}
export default personal;
