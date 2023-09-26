// import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
// Dialog
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
//
import { MaterialDropZoneUser } from '../../../components';

function DialogImageTeacher(props) {
  const {
    Status, handleClose, idrmutl, state
  } = props;
  const [files] = useState([]);
  const [open, setOpen] = useState(false);
  // on Open
  useEffect(() => {
    setOpen(Status);
  }, [Status]);
  // on Close
  const handleCanCel = () => {
    setOpen(!Status);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Upload Image</DialogTitle>
        <DialogContent>
          <DialogContentText>Upload Image Profile</DialogContentText>
          <MaterialDropZoneUser
            idrmutl={idrmutl}
            state={state}
            acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
            files={files}
            showPreviews
            maxSize={5000000}
            filesLimit={1}
            text='Drag and drop image(s) here or click'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCanCel}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

DialogImageTeacher.propstypes = {
  Status: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
export default DialogImageTeacher;
