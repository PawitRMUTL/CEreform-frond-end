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
import Swal from 'sweetalert2';
import { hostBackend } from '../../../../../env';
function DialogEditNews(props) {
  const {
    Status, handleClose, Data, Username
  } = props;
  const [open, setOpen] = useState();
  const [newsCreate, setNewsCreate] = useState([]);
  const [imageToJson, setImageJson] = useState();
  const [nameCreate, setNameCreate] = useState([]);
  const [newsname, setNewsname] = useState();
  const [newsdate, setNewsdate] = useState();
  const [newsheading, setNewsheading] = useState();
  const [newscontent, setNewscontent] = useState();
  const [newscontent2, setNewscontent2] = useState();
  useEffect(() => {
    setOpen(Status);
  }, [Status]);
  // tempData
  useEffect(() => {
    setNewsname(newsCreate.news_name);
    setNewsheading(newsCreate.news_heading);
    setNewsdate(newsCreate.news_date);
    setNewscontent(newsCreate.news_content);
    setNewscontent2(newsCreate.news_content2);
  }, [newsCreate]);
  //   Read_news_and_image
  useEffect(() => {
    axios
      .post(`${hostBackend}/api/ReadNewsAndImage`, { id: Data.news_id })
      .then((data) => {
        setNewsCreate(data.data[0]);
        setImageJson(JSON.parse(data.data[0].image_filenames));
      });
  }, [open]);
  //   /api/ReadTeacher
  useEffect(() => {
    axios
      .post(`${hostBackend}/api/ReadTeacher`, { username: Username })
      .then((data) => setNameCreate(data.data[0]));
  }, [Username]);
  useEffect(() => {
    if (imageToJson !== undefined) {
      // console.log('imageToJson = ', imageToJson);
    }
  }, [imageToJson]);
  // submit
  const submitForm = (formData) => {
    const CreateBy = nameCreate.first_name + ' ' + nameCreate.last_name;
    setOpen(!Status);
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: 'not save',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios
          .post(`${hostBackend}/api/UpdatenewsByid`, {
            Newsid: newsCreate.news_id,
            Newsname: formData.newsname,
            Newsdate: formData.newsdate,
            Newscontent: formData.newscontent,
            Newscontent2: formData.newscontent2,
            Newsheading: formData.newsheading,
            Createby: CreateBy,
          })
          .then((data) => {
            if (data.status === 200) {
              Swal.fire('Saved!', '', 'success');
                window.location.reload(true);
            }
          });
      } else if (result.isDenied) {
        handleClose;
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm({
      newsname,
      newsheading,
      newsdate,
      newscontent,
      newscontent2,
    });
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
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
              defaultValue={newsCreate.news_name}
              label='ชื่อข่าว'
              type='text'
              onChange={(event) => setNewsname(event.target.value)}
              variant='standard'
              sx={{ m: 1, width: '20ch' }}></TextField>
            {/* birthday */}
            <TextField
              autoFocus
              sx={{ m: 1, width: '20ch' }}
              variant='standard'
              margin='dense'
              id='date-picker'
              label='Select Date'
              type='date'
              helperText={`Default date is ${newsCreate.news_date}`}
              defaultValue={newsCreate.news_date}
              InputLabelProps={{
                shrink: true,
              }}
              // InputProps={{
              //   inputProps: {
              //     max: , // Optional: restrict future dates
              //   },
              // }}
              onChange={(event) => {
                setNewsdate(event.target.value);
                // const formattedDate = formatDate(event.target.value);
                // console.log('Formatted date:', formattedDate);
              }}
            />{' '}
            {/* news_heading */}
            <TextField
              multiline
              margin='dense'
              id='heading_news'
              maxRows={2}
              defaultValue={newsCreate.news_heading}
              label='หัวเรื่อง'
              type='text'
              onChange={(event) => setNewsheading(event.target.value)}
              variant='standard'
              sx={{ m: 1, width: '40ch' }}></TextField>
            {/* contect 1 */}
            <TextField
              multiline
              margin='dense'
              id='contect_news1'
              defaultValue={newsCreate.news_content}
              label='เนื้อหาข่าวคอลัมท์ 1'
              type='text'
              onChange={(event) => setNewscontent(event.target.value)}
              variant='standard'
              sx={{ m: 1, width: '40ch' }}></TextField>
            {/* contect 2 */}
            <TextField
              multiline
              margin='dense'
              id='contect_news2'
              defaultValue={newsCreate.news_content2}
              label='เนื้อหาข่าวคอลัมท์ 2'
              type='text'
              onChange={(event) => setNewscontent2(event.target.value)}
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
