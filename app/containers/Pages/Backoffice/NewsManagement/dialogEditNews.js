import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import axios from 'axios';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
function DialogEditNews(props) {
  const {
Status, handleClose, Data, Username
} = props;
  const [open, setOpen] = useState();
  const [newsCreate, setNewsCreate] = useState([]);
  const [imageToJson, setImageJson] = useState();
  const [nameCreate, setNameCreate] = useState([]);
  useEffect(() => {
    setOpen(Status);
  }, [Status]);
  //   Read_news_and_image
  useEffect(() => {
    axios
      .post('http://0.0.0.0:3200/api/ReadNewsAndImage', { id: Data.news_id })
      .then((data) => {
        setNewsCreate(data.data);
        setImageJson(JSON.parse(data.data[0].image_filenames));
      });
  }, [open]);
  //   /api/ReadTeacher
  useEffect(() => {
    axios
      .post('http://0.0.0.0:3200/api/ReadTeacher', { username: Username })
      .then((data) => setNameCreate(data.data[0]));
  }, [Username]);
  useEffect(() => {
    if (newsCreate !== undefined) {
      console.log('newsCreate = ', newsCreate);
    }
  }, [newsCreate]);
  useEffect(() => {
    if (nameCreate !== undefined) {
      console.log('nameCreate = ', nameCreate);
    }
  }, [nameCreate]);
  useEffect(() => {
    if (imageToJson !== undefined) {
      console.log('imageToJson = ', imageToJson);
    }
  }, [imageToJson]);
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <form>
          <DialogTitle>แก้ไขข้อมูลข่าวสาร และ ประชาสัมพันธ์</DialogTitle>
          <DialogContent>
            <DialogContentText>
              โปรดใส่ข้อมูลที่เป็นจริง และ ถูกต้อง / Please Insert real data .
            </DialogContentText>
            {/* name_news */}
            <TextField
              multiline
              margin='dense'
              id='name_news'
              maxRows={2}
              defaultValue={''}
              label='ชื่อข่าว'
              type='text'
              //   onChange={(event) => SetChagePrefix(event.target.value)}
              variant='standard'
              sx={{ m: 1, width: '20ch' }}></TextField>
            {/* news_heading */}
            <TextField
              multiline
              margin='dense'
              id='heading_news'
              maxRows={2}
              defaultValue={''}
              label='หัวเรื่อง'
              type='text'
              //   onChange={(event) => SetChagePrefix(event.target.value)}
              variant='standard'
              sx={{ m: 1, width: '20ch' }}></TextField>
            {/* contect 1 */}
            <TextField
              multiline
              margin='dense'
              id='contect_news1'
              defaultValue={''}
              label='เนื้อหาข่าวคอลัมท์ 1'
              type='text'
              //   onChange={(event) => SetChagePrefix(event.target.value)}
              variant='standard'
              sx={{ m: 1, width: '40ch' }}></TextField>
            {/* contect 2 */}
            <TextField
              multiline
              margin='dense'
              id='contect_news2'
              defaultValue={''}
              label='เนื้อหาข่าวคอลัมท์ 2'
              type='text'
              //   onChange={(event) => SetChagePrefix(event.target.value)}
              variant='standard'
              sx={{ m: 1, width: '40ch' }}></TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type='submit'>Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
DialogEditNews.propTypes = {
  Username: PropTypes.any,
  Status: PropTypes.any,
  handleClose: PropTypes.func,
  Data: PropTypes.any,
};
export default DialogEditNews;
