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
function DialogAddnews(props) {
  const { Status, handleClose, Username } = props;
  const [open, setOpen] = useState();
  const [nameCreate, setNameCreate] = useState([]);
  const [newsname, setNewsname] = useState();
  const [newsdate, setNewsdate] = useState();
  const [newsheading, setNewsheading] = useState();
  const [newscontent, setNewscontent] = useState();
  const [newscontent2, setNewscontent2] = useState();
  useEffect(() => {
    setOpen(Status);
  }, [Status]);
  //   /api/ReadTeacher
  useEffect(() => {
    axios
      .post(`${hostBackend}/api/ReadTeacher`, { username: Username })
      .then((data) => setNameCreate(data.data[0]));
  }, [Username]);

  useEffect(() => {
    if (nameCreate !== undefined) {
      console.log('nameCreate', nameCreate);
    }
  }, [nameCreate]);
  // submit
  const submitForm = (formData) => {
    const CreateBy = nameCreate.first_name + ' ' + nameCreate.last_name;
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Add it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('AddNews!', 'Your Newspaper has been added', 'success');
        axios
          .post(`${hostBackend}/api/Addnews`, {
            Newsname: formData.newsname,
            Newsdate: formData.newsdate,
            Newscontent: formData.newscontent,
            Newscontent2: formData.newscontent2,
            Newsheading: formData.newsheading,
            Createby: CreateBy,
          })
          .then((data) => {
            if (data.status === 200) {
              console.log('succesfully');
              window.location.reload(true);
            }
          });
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
    setOpen(false);
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>เพิ่มข้อมูลข่าวสาร และ ประชาสัมพันธ์</DialogTitle>
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
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => {
                setNewsdate(event.target.value);
              }}
            />{' '}
            {/* news_heading */}
            <TextField
              multiline
              margin='dense'
              id='heading_news'
              maxRows={2}
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
DialogAddnews.propTypes = {
  Username: PropTypes.any,
  Status: PropTypes.any,
  handleClose: PropTypes.func,
};
export default DialogAddnews;
