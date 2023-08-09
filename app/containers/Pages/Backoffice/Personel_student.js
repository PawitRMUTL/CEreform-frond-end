import { Typography, Card, Box } from '@mui/material';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dummy from 'dan-api/dummy/dummyContents';
import Avatar from '@mui/material/Avatar';
import DialogStudent from './dialogStudent';
import DialogImageStudent from './dialogImageStudent';
import useStyles from './index-jss';

function Personelstudent(props) {
  const { classes } = useStyles();
  const { idrmutl } = props;
  const [ShowUser, SetShowUser] = useState('');
  const [DATE, SetDATE] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [Dialogimage, setDialogImage] = useState(false);

  //   console.log(username);
  useEffect(() => {
    axios
      .post('http://0.0.0.0:3200/api/ReadStudentByUsername', {
        username: idrmutl,
      })
      .then((data) => {
        SetShowUser(data.data[0]);
        SetDATE(data.data[0].birthday);
      });
  }, [idrmutl]);
  const originalDate = new Date(DATE);
  const convertedDate = originalDate.toLocaleString('th-TH', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  // edit personel
  const handleOpenDialog = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  // upload && edit image
  const handleOpenDialogImage = () => {
    setDialogImage(true);
  };

  const handleCloseDialogImage = () => {
    setDialogImage(false);
  };
  return (
    <>
      <Card className={classes.Layout}>
        <Avatar
          alt={dummy.user.name}
          src={dummy.user.avatar}
          sx={{ width: '100px', height: '100px' }}
        />
        <Typography>สถานะ : {ShowUser.status} </Typography>
        <Typography>
          {ShowUser.prefix} {ShowUser.first_name} {ShowUser.last_name}
        </Typography>
        <Typography>{ShowUser.email}</Typography>
      </Card>
      <Card className={classes.BanerContent}>
        <Typography>ข้อมูลส่วนตัว</Typography>
      </Card>
      <Card sx={{ padding: '2%', marginTop: '1%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <Button className={classes.buttonlayout} onClick={handleOpenDialog}>
            แก้ไขข้อมูลส่วนตัว
          </Button>
          <DialogStudent
            thunmbDate={ShowUser.birthday}
            Status={showDialog}
            prefix={ShowUser.prefix}
            firstname={ShowUser.first_name}
            lastname={ShowUser.last_name}
            idrmutl={ShowUser.id_rmutl}
            email={ShowUser.email}
            status={ShowUser.status}
            curriculum={ShowUser.curriculum}
            section={ShowUser.section}
            birthday={convertedDate}
            gender={ShowUser.gender}
            nationality={ShowUser.nationality}
            religion={ShowUser.religion}
            handleClose={handleCloseDialog}
          />
          <Button
            className={classes.buttonlayout}
            onClick={handleOpenDialogImage}>
            แก้ไขรูปภาพ
            <DialogImageStudent
              Status={Dialogimage}
            idrmutl={ShowUser.id_rmutl}
              handleClose={handleCloseDialogImage}
            />
          </Button>
        </Box>
        <Box className={classes.LayoutShowContent}>
          {ShowUser ? (
            <div>
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
                  รหัสนักศึกษา / Student ID :
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
                  สถานะนักศึกษา / Student Status :
                </Typography>
                <Typography>{ShowUser.status}</Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography sx={{ marginRight: '2px', fontWeight: 600 }}>
                  หลักสูตรวิชา / Curriculum :
                </Typography>
                <Typography>{ShowUser.curriculum}</Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography sx={{ marginRight: '2px', fontWeight: 600 }}>
                  กลุ่มเรียน / Section :
                </Typography>
                <Typography>{ShowUser.section}</Typography>
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
        </Box>
      </Card>
    </>
  );
}
Personelstudent.propTypes = {
  idrmutl: PropTypes.string.isRequired,
};

export default Personelstudent;
