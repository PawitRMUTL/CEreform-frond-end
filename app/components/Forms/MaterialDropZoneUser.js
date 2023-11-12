/** @format */

import React, { useState, useCallback } from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import axios from 'axios';
import Button from '@mui/material/Button';
import FileIcon from '@mui/icons-material/Description';
import ActionDelete from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import CloudUpload from '@mui/icons-material/CloudUpload';
import 'dan-styles/vendors/react-dropzone/react-dropzone.css';
import isImage from './helpers/helpers.js';
import { hostBackend } from '../../../env.js';

const useStyles = makeStyles()((theme) => ({
  dropItem: {
    borderColor: theme.palette.divider,
    background: theme.palette.background.default,
    borderRadius: theme.rounded.medium,
    color: theme.palette.text.disabled,
    textAlign: 'center',
  },
  uploadIconSize: {
    display: 'inline-block',
    '& svg': {
      width: 72,
      height: 72,
      fill: theme.palette.secondary.main,
    },
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
    '& svg': {
      fill: theme.palette.common.white,
    },
  },
  button: {
    marginTop: 20,
  },
}));

function MaterialDropZoneUser(props) {
  const [openSnackBar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [files, setFiles] = useState(props.files); // eslint-disable-line
  const [acceptedFiles] = useState(props.acceptedFiles); // eslint-disable-line
  const { classes, cx } = useStyles();
  const {
    state, idrmutl, showPreviews, maxSize, text, filesLimit, ...rest
  } = props;
  const onDrop = useCallback(
    (filesVal) => {
      let oldFiles = files;
      const filesLimitVal = filesLimit || '3';
      oldFiles = oldFiles.concat(filesVal);
      if (oldFiles.length > filesLimit) {
        setOpenSnackbar(true);
        setErrorMessage(`Cannot upload more than ${filesLimitVal} items.`);
      } else {
        setFiles(oldFiles);
      }
    },
    [files, filesLimit],
  );
  const onDropRejected = () => {
    setOpenSnackbar(true);
    setErrorMessage('File too big, max size is 3MB');
  };

  const handleRequestCloseSnackBar = () => {
    setOpenSnackbar(false);
  };
  const onSucsessForm = () => {
    setOpenSnackbar(true);
    setErrorMessage('image is already to upload');
    <Snackbar
      open={openSnackBar}
      message={errorMessage}
      autoHideDuration={4000}
      onClose={handleRequestCloseSnackBar}
    />;
  };
  const handleRemove = useCallback(
    (file, fileIndex) => {
      // This is to prevent memory leaks.
      window.URL.revokeObjectURL(file.preview);

      setFiles((thisFiles) => {
        const tempFiles = [...thisFiles];
        tempFiles.splice(fileIndex, 1);
        return tempFiles;
      });
    },
    [files],
  );

  const fileSizeLimit = maxSize || 3000000;
  const DeleteBtn = (
    { file, index }, // eslint-disable-line
  ) => (
    <div className='middle'>
      <IconButton onClick={() => handleRemove(file, index)} size='large'>
        <ActionDelete className='removeBtn' />
      </IconButton>
    </div>
  );

  DeleteBtn.propTypes = {
    file: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
  };

  const Previews = ({ filesArray }) => filesArray.map((file, index) => {
      const base64Img = URL.createObjectURL(file);
      // console.log(base64Img);
      if (isImage(file)) {
        return (
          <div key={index.toString()}>
            <div className='imageContainer col fileIconImg'>
              <figure className='imgWrap'>
                <img
                  className='smallPreviewImg'
                  src={base64Img}
                  alt='preview'
                />
              </figure>
              <DeleteBtn file={file} index={index} />
            </div>
          </div>
        );
      }
      return (
        <div key={index.toString()}>
          <div className='imageContainer col fileIconImg'>
            <FileIcon className='smallPreviewImg' alt='preview' />
            <DeleteBtn file={file} index={index} />
          </div>
        </div>
      );
    });

  Previews.propTypes = {
    filesArray: PropTypes.array.isRequired,
  };

  const uploadfile = (event) => {
    if (files.length === 0) {
      setOpenSnackbar(true);
      setErrorMessage('Plase Insert image min 1 image');
      <Snackbar
        open={openSnackBar}
        message={errorMessage}
        autoHideDuration={4000}
        onClose={handleRequestCloseSnackBar}
      />;
    } else {
      event.preventDefault();
      if (state === 'อาจารย์' || state === 'หัวหน้าหลักสูตร' || state === 'รองหัวหน้าหลักสูตร') {
        const formData = new FormData();
        files.forEach((file, index) => {
          const modifiedFile = new File([file], `_${idrmutl}.png`, {
            type: file.type,
          });
          formData.append(`image${index}`, modifiedFile);
          console.log(`Appended image${index}:`, modifiedFile);
        });
        formData.append('owner', idrmutl);
        axios
          .post(`${hostBackend}/api/uploadimageTeacher`, formData)
          .then((response) => {
            onSucsessForm(response);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        // ถ้านักศึกษา upload image
        const formData = new FormData();
        files.forEach((file, index) => {
          const modifiedFile = new File([file], `stu_${idrmutl}.jpg`, {
            type: file.type,
          });
          formData.append(`image${index}`, modifiedFile);
          // console.log(`Appended image${index}:`, modifiedFile);
          // formData.append(`image${index}`, file);
          // console.log(`Appended image${index}:`, file);
        });
        formData.append('owner', idrmutl);
        axios
          .post(`${hostBackend}/api/uploadimageStudent`, formData)
          .then((response) => {
            onSucsessForm(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };
  return (
    <div>
      <Dropzone
        accept={acceptedFiles.join(',')}
        onDrop={onDrop}
        onDropRejected={onDropRejected}
        acceptClassName='stripes'
        rejectClassName='rejectStripes'
        maxSize={fileSizeLimit}
        {...rest}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className={cx(classes.dropItem, 'dropZone')}>
            <div className='dropzoneTextStyle'>
              <input {...getInputProps()} />
              <p className='dropzoneParagraph'>{text}</p>
              <div className={classes.uploadIconSize}>
                <CloudUpload />
              </div>
            </div>
          </div>
        )}
        {/* end */}
      </Dropzone>
      <Button
        className={classes.button}
        fullWidth
        variant='contained'
        onClick={uploadfile}
        color='secondary'>
        upload file(s)
        <span className={classes.rightIcon}>
          <CloudUpload />
        </span>
      </Button>
      <div className='row preview'>
        {showPreviews && <Previews filesArray={files} />}
      </div>
      <Snackbar
        open={openSnackBar}
        message={errorMessage}
        autoHideDuration={4000}
        onClose={handleRequestCloseSnackBar}
      />
    </div>
  );
}

MaterialDropZoneUser.propTypes = {
  state: PropTypes.string,
  idrmutl: PropTypes.string,
  files: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
  acceptedFiles: PropTypes.array,
  showPreviews: PropTypes.bool.isRequired,
  maxSize: PropTypes.number.isRequired,
  filesLimit: PropTypes.number.isRequired,
};

MaterialDropZoneUser.defaultProps = {
  acceptedFiles: [],
  showButton: false,
};

export default MaterialDropZoneUser;
