import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { hostBackend } from '../../../../env';

function DialogSubjectTeacher(props) {
  const {
    idteacher,
    Status,
    handleClose,
    Subjectteach1,
    Subjectteach2,
    Subjectteach3,
    Subjectteach4,
    Subjectteach5,
  } = props;

  const [selecteSubjectteach1, SetChageSubject1] = useState('');
  const [selecteSubjectteach2, SetChageSubject2] = useState('');
  const [selecteSubjectteach3, SetChageSubject3] = useState('');
  const [selecteSubjectteach4, SetChageSubject4] = useState('');
  const [selecteSubjectteach5, SetChageSubject5] = useState('');

  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(Status);
  }, [Status]);
  // Set Defalt Subject
  useEffect(() => {
    SetChageSubject1(Subjectteach1);
    SetChageSubject2(Subjectteach2);
    SetChageSubject3(Subjectteach3);
    SetChageSubject4(Subjectteach4);
    SetChageSubject5(Subjectteach5);
  }, [open]);
  const submitForm = (formData) => {
    axios
      .post(`${hostBackend}/api/UpdateTeacherSubject`, {
        id: idteacher,
        Subjectteach1: formData.selecteSubjectteach1,
        Subjectteach2: formData.selecteSubjectteach2,
        Subjectteach3: formData.selecteSubjectteach3,
        Subjectteach4: formData.selecteSubjectteach4,
        Subjectteach5: formData.selecteSubjectteach5,
      })
      .then((data) => {
        if (data.status === 200) {
          setOpen(!Status);
        }
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm({
      selecteSubjectteach1,
      selecteSubjectteach2,
      selecteSubjectteach3,
      selecteSubjectteach4,
      selecteSubjectteach5,
    });
  };

  const handleCanCel = () => {
    setOpen(!Status);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>แก้ไขรายวิชาที่รับผิดชอบ</DialogTitle>
          <DialogContent>
            <DialogContentText>
              โปรดใส่ข้อมูลที่เป็นจริง และ ถูกต้อง / Please Insert real data .
            </DialogContentText>
            {/* วิชาที่ 1 */}
            <TextField
              id='Sub1'
              autoFocus
              multiline
              maxRows={4}
              label='Subject 1'
              defaultValue={Subjectteach1}
              variant='standard'
              sx={{ m: 1, width: '25ch' }}
              onChange={(event) => SetChageSubject1(event.target.value)}
            />
            {/* วิชาที่ 2 */}
            <TextField
              id='Sub2'
              autoFocus
              multiline
              maxRows={4}
              label='Subject 2'
              defaultValue={Subjectteach2}
              variant='standard'
              sx={{ m: 1, width: '25ch' }}
              onChange={(event) => SetChageSubject2(event.target.value)}
            />
            {/* วิชาที่ 3 */}
            <TextField
              id='Sub3'
              autoFocus
              multiline
              maxRows={4}
              label='Subject 3'
              defaultValue={Subjectteach3}
              variant='standard'
              sx={{ m: 1, width: '20ch' }}
              onChange={(event) => SetChageSubject3(event.target.value)}
            />
            {/* วิชาที่ 4 */}
            <TextField
              id='Sub4'
              autoFocus
              multiline
              maxRows={4}
              label='Subject 4'
              defaultValue={Subjectteach4}
              variant='standard'
              sx={{ m: 1, width: '20ch' }}
              onChange={(event) => SetChageSubject4(event.target.value)}
            />
            {/* วิชาที่ 5 */}
            <TextField
              id='Sub5'
              autoFocus
              multiline
              maxRows={4}
              label='Subject 5'
              defaultValue={Subjectteach5}
              variant='standard'
              sx={{ m: 1, width: '20ch' }}
              onChange={(event) => SetChageSubject5(event.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCanCel}>Cancel</Button>
            <Button type='submit'>Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
DialogSubjectTeacher.propTypes = {
  Status: PropTypes.bool,
  handleClose: PropTypes.func,
  idteacher: PropTypes.string,
  Subjectteach1: PropTypes.string,
  Subjectteach2: PropTypes.string,
  Subjectteach3: PropTypes.string,
  Subjectteach4: PropTypes.string,
  Subjectteach5: PropTypes.string,
};
export default DialogSubjectTeacher;
