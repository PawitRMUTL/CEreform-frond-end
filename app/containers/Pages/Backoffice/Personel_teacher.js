import { Typography, Card, Box } from '@mui/material';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import { FcPlus } from 'react-icons/fc';
import DialogTeacher from './dialogTeacher';
import DialogEducationTeacher from './dialogEducationTeacher';
import DialogImageTeacher from './dialogImageTeacher';
import DialogSubjectTeacher from './dialogSubjectTeacher';
import useStyles from './index-jss';
function Personelteacher(props) {
  const { classes } = useStyles();
  const { idrmutl } = props;
  const [thumbuser, Setthumbuser] = useState([]);
  const [ShowUser, SetShowUser] = useState([]);
  const [DATE, SetDATE] = useState('');
  // SET DIALOG
  const [showDialog, setShowDialog] = useState(false);
  const [showDialogEducation, setShowDialogEducation] = useState(false);
  const [Dialogimage, setDialogImage] = useState(false);
  const [DialogSubject, Setdialogsubject] = useState(false);
  const [ShowImage, SetShowimage] = useState([]);
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
      .post('http://10.21.45.100:3000/api/ReadTeacherByEmail', {
        email: idrmutl,
      })
      .then((data) => {
        SetThumbid(data.data[0].teacher_id);
        Setthumbuser(data.data);
        SetShowUser(data.data[0]);
        SetDATE(data.data[0].brithday);
      });
  }, [idrmutl]);
  // fetch educate   --------------------------------
  useEffect(() => {
    axios
      .post('http://10.21.45.100:3000/api/ReadEducateTeacherById', {
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
    if (Array.isArray(educationTeacher)) {
      for (let index = 0; index < educationTeacher.length; index++) {
        if (educationTeacher[index].teacher_diploma === 'ปริญญาตรี') {
          SetBachelor(educationTeacher[index]);
        }
        if (educationTeacher[index].teacher_diploma === 'ปริญญาโท') {
          SetMaster(educationTeacher[index]);
        }
        if (educationTeacher[index].teacher_diploma === 'ปริญญาเอก') {
          SetDoctor(educationTeacher[index]);
        }
      }
    }
  }, [educationTeacher]);
  // Set image
  useEffect(() => {
    if (thumbuser !== undefined) {
      // let ImageValue;
      const promises = Object.values(thumbuser).map((data) => import(`/Users/baconinhell/Desktop/dandelion-pro_v25/starter-project/image/teacher/${data._image}`).then((image) => image.default));
      Promise.all(promises).then((imagePaths) => {
        const ImageValue = [];
        imagePaths.forEach((index) => ImageValue.push(index));
        SetShowimage(ImageValue);
      });
    }
  }, [thumbuser]);
  const handleOpenDialogSubject = () => {
    Setdialogsubject(true);
  };
  const handleOpenDialogImage = () => {
    setDialogImage(true);
  };
  const handleOpenDialogEducation = () => {
    setShowDialogEducation(true);
  };
  const handleOpenDialog = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    setShowDialogEducation(false);
    setDialogImage(false);
    Setdialogsubject(false);
  };

  return (
    <>
      <Card className={classes.Layout}>
        <Box sx={{ position: 'relative' }}>
          <Avatar
            alt={ShowUser.firstname}
            src={ShowImage}
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
            }}
            onClick={handleOpenDialogImage}>
            <FcPlus />
            <DialogImageTeacher
              idrmutl={ShowUser.first_name}
              state={ShowUser.status}
              Status={Dialogimage}
              handleClose={handleCloseDialog}
            />
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
              <Button
                className={classes.buttonlayout}
                onClick={handleOpenDialog}>
                แก้ไขข้อมูลส่วนตัว
                <DialogTeacher
                  idteacher={ShowUser.teacher_id}
                  Status={showDialog}
                  handleClose={handleCloseDialog}
                  thunmbDate={ShowUser.brithday}
                  prefix={ShowUser.prefix}
                  firstname={ShowUser.first_name}
                  lastname={ShowUser.last_name}
                  idrmutl={ShowUser.id_rmutl}
                  email={ShowUser._email}
                  status={ShowUser.status}
                  birthday={convertedDate}
                  gender={ShowUser.gender}
                  nationality={ShowUser.nationality}
                  religion={ShowUser.religion}
                  phone={ShowUser._phone}
                />
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
                  <Typography>{ShowUser._email}</Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Typography sx={{ marginRight: '2px', fontWeight: 600 }}>
                    เบอร์โทรศัพท์ / Phone :
                  </Typography>
                  <Typography>{ShowUser._phone}</Typography>
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
          {/* วิชาที่รับชอบ */}
          <Card sx={{ marginTop: '1%', padding: '4%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography fontWeight={600} fontSize={18}>
                วิชาที่รับผิดชอบ
              </Typography>
              <Button
                className={classes.buttonlayout}
                onClick={handleOpenDialogSubject}>
                แก้ไขวิชาที่รับผิดชอบ
                <DialogSubjectTeacher
                  idteacher={ShowUser.teacher_id}
                  Status={DialogSubject}
                  handleClose={handleCloseDialog}
                  Subjectteach1={ShowUser.subject_teach1}
                  Subjectteach2={ShowUser.subject_teach2}
                  Subjectteach3={ShowUser.subject_teach3}
                  Subjectteach4={ShowUser.subject_teach4}
                  Subjectteach5={ShowUser.subject_teach5}
                />
              </Button>
            </Box>
            <Box>
              <ol style={{ listStyleType: 'decimal', paddingLeft: '6%' }}>
                {ShowUser.subject_teach1 ? (
                  <li>
                    <Typography>{ShowUser.subject_teach1}</Typography>
                  </li>
                ) : null}
                {ShowUser.subject_teach2 ? (
                  <li>
                    <Typography>{ShowUser.subject_teach2}</Typography>
                  </li>
                ) : null}
                {ShowUser.subject_teach3 ? (
                  <li>
                    <Typography>{ShowUser.subject_teach3}</Typography>
                  </li>
                ) : null}
                {ShowUser.subject_teach4 ? (
                  <li>
                    <Typography>{ShowUser.subject_teach4}</Typography>
                  </li>
                ) : null}
                {ShowUser.subject_teach5 ? (
                  <li>
                    <Typography>{ShowUser.subject_teach5}</Typography>
                  </li>
                ) : null}
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
            <Button
              className={classes.buttonlayout}
              onClick={handleOpenDialogEducation}>
              แก้ไขวุฒิการศึกษา
              <DialogEducationTeacher
                Status={showDialogEducation}
                handleClose={handleCloseDialog}
                Bachelor={Bachelor}
                Master={Master}
                Doctor={Doctor}
              />
            </Button>
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
