import { Typography, Card, Box } from '@mui/material';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import { FcPlus } from 'react-icons/fc';
import useStyles from './index-jss';
function Personelteacher(props) {
  const { classes } = useStyles();
  const { idrmutl } = props;
  const [thumbuser, Setthumbuser] = useState([]);
  const [ShowUser, SetShowUser] = useState([]);
  const [DATE, SetDATE] = useState('');
  // const [showDialog, setShowDialog] = useState(false);
  // const [Dialogimage, setDialogImage] = useState(false);
  // const [ShowImage, SetShowimage] = useState([]);
  // SENT ID
  const [thunbID, SetThumbid] = useState([]);
  // ===============================
  const [educationTeacher, SetEducat] = useState([]);
  // ===============================
  // DiplomaTeacher
  const [Bachelor, SetBachelor] = useState([]);
  const [Master, SetMaster] = useState([]);
  const [Doctor, SetDoctor] = useState([]);
  const originalDate = new Date(DATE);
  const convertedDate = originalDate.toLocaleString('th-TH', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  // fectch Data teacher  --------------------------------
  useEffect(() => {
    axios
      .post('http://0.0.0.0:3200/api/ReadTeacherByEmail', {
        email: idrmutl,
      })
      .then((data) => {
        SetThumbid(data.data[0].teacher_id);
        Setthumbuser(data.data);
        SetShowUser(data.data[0]);
        SetDATE(data.data[0].birthday);
      });
  }, [idrmutl]);
  // fetch educate   --------------------------------
  useEffect(() => {
    axios
      .post('http://0.0.0.0:3200/api/ReadEducateTeacherById', {
        id: thunbID,
      })
      .then((data) => {
        SetEducat(data.data);

        // console.log('Education Teacher is ', data.data[0]);
      });
  }, [thunbID]);
  // Set Education ----------------------------
  useEffect(() => {
    if (educationTeacher === undefined) {
      console.log('educationTeacher undefined', educationTeacher);
    }
    SetBachelor(educationTeacher[2]);
    SetMaster(educationTeacher[1]);
    SetDoctor(educationTeacher[0]);
  }, [educationTeacher]);
  // Log Data  --------------------------------
  useEffect(() => {
    if (thumbuser !== undefined) {
      console.log('thumbuser', thumbuser);
      // console.log('ShowUser', ShowUser);
    }
  }, [thumbuser]);

  return (
    <>
      <Card className={classes.Layout}>
        <Box sx={{ position: 'relative' }}>
          <Avatar
            alt={ShowUser.firstname}
            // src={ShowImage}
            sx={{ width: '100px', height: '100px' }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '1%',
              right: '3%',
              cursor: 'pointer', // Adding cursor property for pointer
              '&:hover': {
                cursor: 'pointer', // Changing cursor on hover
              },
            }}>
            <FcPlus />
          </Box>
        </Box>
        <Typography>สถานะ : {ShowUser.status} </Typography>
        <Typography>
          {ShowUser.prefix} {ShowUser.first_name} {ShowUser.last_name}
        </Typography>
        <Typography>{ShowUser._email}</Typography>
      </Card>
      <Card className={classes.BanerContent}>
        <Typography fontSize={22} fontWeight={500}>
          ข้อมูลส่วนตัว
        </Typography>
      </Card>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          padding: '1%',
        }}>
        <Box
          sx={{
            padding: '1%',
            MaxWidth: '500px',
          }}>
          {/* ข้อมูลส่วนตัว */}
          <Card
            sx={{
              maxHeight: '350px',
              padding: '4%',
              overflowY: 'hidden',
            }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography fontWeight={600} fontSize={18}>
                ข้อมูลส่วนตัว
              </Typography>
              <Button className={classes.buttonlayout}>
                แก้ไขข้อมูลส่วนตัว
              </Button>
            </Box>
            {ShowUser ? (
              <div style={{ padding: '2%', width: '500px' }}>
                <Box sx={{ display: 'flex' }}>
                  <Typography sx={{ marginRight: '2px', fontWeight: 600 }}>
                    ชื่อ - นามสกุล :
                  </Typography>
                  <Typography>
                    {ShowUser.prefix} {ShowUser.first_name} {ShowUser.last_name}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Typography sx={{ marginRight: '2px', fontWeight: 600 }}>
                    รหัสอาจารย์ / Teacher ID :
                  </Typography>
                  <Typography>{ShowUser.id_rmutl}</Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Typography sx={{ marginRight: '2px', fontWeight: 600 }}>
                    RMUTL Email :
                  </Typography>
                  <Typography>{ShowUser.email}</Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Typography sx={{ marginRight: '2px', fontWeight: 600 }}>
                    สถานะ / Status :
                  </Typography>
                  <Typography>{ShowUser.status}</Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Typography sx={{ marginRight: '2px', fontWeight: 600 }}>
                    วันเกิด / birthday :
                  </Typography>
                  <Typography>{convertedDate}</Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Typography sx={{ marginRight: '2px', fontWeight: 600 }}>
                    เพศ / Gender :
                  </Typography>
                  <Typography>{ShowUser.gender}</Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Typography sx={{ marginRight: '2px', fontWeight: 600 }}>
                    สัญชาติ / Nationality :
                  </Typography>
                  <Typography>{ShowUser.nationality}</Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Typography sx={{ marginRight: '2px', fontWeight: 600 }}>
                    ศาสนา / Religion :
                  </Typography>
                  <Typography>{ShowUser.religion}</Typography>
                </Box>
              </div>
            ) : null}
          </Card>
          <Card sx={{ marginTop: '1%', padding: '4%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography fontWeight={600} fontSize={18}>
                วิชาที่รับผิดชอบ
              </Typography>
              <Button className={classes.buttonlayout}>
                แก้ไขวิชาที่รับผิดชอบ
              </Button>
            </Box>
            <Box>
              <ol style={{ listStyleType: 'decimal', paddingLeft: '6%' }}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ol>
            </Box>
          </Card>
        </Box>
        {/* วุฒิการศึกษา */}
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '600px' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '1%',
              marginBottom: '1%',
            }}>
            <Typography
              fontWeight={600}
              fontSize={22}
              sx={{ margin: '1% 0px 1% 0px' }}>
              วุฒิการศึกษา
            </Typography>
            <Button className={classes.buttonlayout}>แก้ไขวุฒิการศึกษา</Button>
          </Box>
          <Box>
            {Doctor ? (
              <>
                <Card sx={{ padding: '4%' }}>
                  <Typography fontWeight={600} fontSize={18}>
                    {Doctor?.teacher_diploma} ( Doctor degree )
                  </Typography>
                  <Box sx={{ marginTop: '1%', marginLeft: '4%' }}>
                    <Box sx={{ display: 'flex' }}>
                      <Typography sx={{ marginRight: '2px', fontWeight: 500 }}>
                        มหาวิทยาลัย / University :
                      </Typography>
                      <Typography>{Doctor?.university}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                      <Typography sx={{ marginRight: '2px', fontWeight: 500 }}>
                        กลุ่มสาขา :
                      </Typography>
                      <Typography>{Doctor?.subject_eng}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                      <Typography sx={{ marginRight: '2px', fontWeight: 500 }}>
                        สาขา :
                      </Typography>
                      <Typography>{Doctor?.subject}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                      <Typography sx={{ marginRight: '2px', fontWeight: 500 }}>
                        สำเร็จการศึกษา :
                      </Typography>
                      <Typography>{Doctor?.graduates_years}</Typography>
                    </Box>
                  </Box>
                </Card>
              </>
            ) : null}
          </Box>
          <Box>
            {Master ? (
              <>
                <Card sx={{ padding: '4%', marginTop: '2%' }}>
                  <Typography fontWeight={600} fontSize={18}>
                    {Master?.teacher_diploma} ( Master degree )
                  </Typography>
                  <Box sx={{ marginTop: '1%', marginLeft: '4%' }}>
                    <Box sx={{ display: 'flex' }}>
                      <Typography
                        sx={{
                          marginRight: '2px',
                          fontWeight: 500,
                        }}>
                        มหาวิทยาลัย / University :
                      </Typography>
                      <Typography>{Master?.university}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                      <Typography sx={{ marginRight: '2px', fontWeight: 500 }}>
                        กลุ่มสาขา :
                      </Typography>
                      <Typography>{Master?.subject_eng}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                      <Typography sx={{ marginRight: '2px', fontWeight: 500 }}>
                        สาขา :
                      </Typography>
                      <Typography>{Master?.subject}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                      <Typography sx={{ marginRight: '2px', fontWeight: 500 }}>
                        สำเร็จการศึกษา :
                      </Typography>
                      <Typography>{Master?.graduates_years}</Typography>
                    </Box>
                  </Box>
                </Card>
              </>
            ) : null}
          </Box>
          <Box>
            {Bachelor ? (
              <>
                <Card sx={{ padding: '4%', marginTop: '2%' }}>
                  <Typography fontWeight={600} fontSize={18}>
                    {Bachelor?.teacher_diploma} ( Bachelor degree )
                  </Typography>
                  <Box sx={{ marginTop: '1%', marginLeft: '4%' }}>
                    <Box sx={{ display: 'flex' }}>
                      <Typography sx={{ marginRight: '2px', fontWeight: 500 }}>
                        มหาวิทยาลัย / University :
                      </Typography>
                      <Typography>{Bachelor?.university}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                      <Typography sx={{ marginRight: '2px', fontWeight: 500 }}>
                        กลุ่มสาขา :
                      </Typography>
                      <Typography>{Bachelor?.subject_eng}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                      <Typography sx={{ marginRight: '2px', fontWeight: 500 }}>
                        สาขา :
                      </Typography>
                      <Typography>{Bachelor?.subject}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                      <Typography sx={{ marginRight: '2px', fontWeight: 500 }}>
                        สำเร็จการศึกษา :
                      </Typography>
                      <Typography>{Bachelor?.graduates_years}</Typography>
                    </Box>
                  </Box>
                </Card>
              </>
            ) : null}
          </Box>
        </Box>
      </Box>
    </>
  );
}
Personelteacher.PropTypes = {
  idrmutl: PropTypes.string.isRequired,
};

export default Personelteacher;
