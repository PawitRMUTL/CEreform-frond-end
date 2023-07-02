/** @format */

import React from 'react';
import { Box, Card, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { makeStyles } from 'tss-react/mui';
import Modal from '@mui/material/Modal';

import './index-css.css';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles()((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function personal() {
  const { classes } = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id='simple-modal-title'>Text in a modal</h2>
      <p id='simple-modal-description'>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

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
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 2, sm: 8, md: 12 }}>
              {Array.from(Array(16)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Card className='Card'>
                    <img src='/images/avatars/pp_boy2.svg' />
                    <h2>John Dose </h2>
                    <h4>
                      จอน เดดด <br />
                      Johndo@gmail.com
                    </h4>
                    <div>
                      <Button
                        type='button'
                        onClick={handleOpen}
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
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby='simple-modal-title'
                        aria-describedby='simple-modal-description'>
                        {body}
                      </Modal>
                    </div>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </article>
      </section>
    </>
  );
}
export default personal;
