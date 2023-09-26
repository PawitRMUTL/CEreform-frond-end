import { Box, Card, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AiOutlinePlus, AiOutlineEdit, AiFillDelete } from 'react-icons/ai';
import Cookies from 'js-cookie';
import axios from 'axios';
import Swal from 'sweetalert2';
import DialogEditNews from './dialogEditNews';
import DialogAddnews from './dialogAddnews';
const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
}));
function newsManagemant() {
  const username = Cookies.get('._jwtUsername');
  const role = Cookies.get('._jwtRole');
  const history = useHistory();
  const [user, setUsername] = useState('');
  const [status, setStatus] = useState('');
  const [islogin, setIslogin] = useState(false);
  const [DataNews, setDataNews] = useState([]);
  const [DataUpdate, setDateUpdate] = useState([]);
  const [NewsDate, setNewsdate] = useState([]);
  const [DialogEdit, setDialogEdit] = useState(false);
  const [DialogNews, setDialogNews] = useState(false);

  // -------------------- verify jwt
  useEffect(() => {
    axios
      .post('http://0.0.0.0:3200/api/verify_authen', {
        token: username,
        tokenRole: role,
      })
      .then((data) => {
        setUsername(data.data.User);
        setStatus(data.data.stateRole);
      });
  }, []);
  //   ------------------- อาจารย์ only
  useEffect(() => {
    if (user !== undefined) {
      if (status === 'อาจารย์') {
        setIslogin(true);
      }
    }
  }, [user, status]);
  //   --------------------- !login show dialog
  useEffect(() => {
    if (user === undefined) {
      let timerInterval;
      Swal.fire({
        title: 'กรุณาก่อน login ทุกครั้ง',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector('b');
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          history.push('/loginTeacher');
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer');
        }
      });
    }
  }, [user]);
  //   ==================== fetch Data news
  useEffect(() => {
    axios.get('http://0.0.0.0:3200/api/GetNews').then((data) => {
      setDataNews(data.data);
      setNewsdate(data.data[0].news_date);
    });
  }, []);
  const { classes } = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, DataNews.length - page * rowsPerPage);
  const handleCloseDialog = () => {
    setDialogEdit(false);
    setDialogNews(false);
  };
  const clickid = (id) => {
    const thunmbid = id - 1;
    setDialogEdit(true);
    setDateUpdate(DataNews[thunmbid]);
  };
  const Addnews = () => {
    console.log('Click Add news');
    setDialogNews(true);
  };
  const isDelete = (Id) => {
    if (Id !== undefined) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger',
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            axios
              .post('http://0.0.0.0:3200/api/DeleteNews', { id: Id })
              .then((data) => {
                if (data.status === 200) {
                  swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success',
                  );
                  window.location.reload(true);
                }
              });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              'Cancelled',
              'Your News file is safe :)',
              'error',
            );
          }
        });
    }
  };

  return (
    <div>
      {islogin ? (
        <div
          style={{ paddingLeft: '2%', paddingRight: '2%', marginTop: '-1%' }}>
          {/* tag show management */}
          <Card
            sx={{
              width: '300px',
              padding: '2%',
              color: '#fff',
              backgroundColor: '#000',
            }}>
            <Typography>News Management</Typography>
            <Box display={'flex'} justifyContent={'space-between'}>
              <Typography> {DataNews?.length} records</Typography>
              <Typography fontSize={10}>
                Last Update
                <Typography fontSize={12}>{NewsDate}</Typography>
              </Typography>
            </Box>
          </Card>
          {/* button add news */}
          <Box marginTop={'2%'}>
            <Box
              display={'flex'}
              justifyContent={'space-evenly'}
              textAlign={'center'}
              width={120}
              borderRadius={30}
              padding={'10px'}
              sx={{
                color: '#fff',
                backgroundColor: '#000',
                cursor: 'pointer',
              }}
              onClick={Addnews}>
              <AiOutlinePlus />
              <Typography fontSize={12}> Adds News</Typography>
            </Box>
          </Box>
          <Box marginTop={'2%'}>
            <div className={classes.root}>
              <Paper className={classes.paper}>
                <TableContainer>
                  <Table
                    className={classes.table}
                    aria-labelledby='tableTitle'
                    size='medium'
                    aria-label='enhanced table'>
                    <TableHead>
                      <TableRow>
                        <TableCell align='left'>ลำดับที่</TableCell>
                        <TableCell align='left'>ชื่อข่าว</TableCell>
                        <TableCell align='center'>วันที่ลงข่าว</TableCell>
                        {/* view */}
                        <TableCell align='center'>ยอดเข้าชม</TableCell>
                        <TableCell align='right'>แก้ไข</TableCell>
                        <TableCell align='right'>ลบ</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {DataNews.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage,
                      ).map((data, index) => {
                        const labelId = `enhanced-table-checkbox-${index}`;
                        return (
                          <TableRow hover tabIndex={-1} key={data.news_id}>
                            <TableCell component='th' id={labelId} scope='row'>
                              {data.news_id}
                            </TableCell>
                            <TableCell align='left'>{data.news_name}</TableCell>
                            <TableCell align='center'>
                              {data.news_date}
                            </TableCell>
                            <TableCell align='center'>{data.view}</TableCell>
                            <TableCell align='right'>
                              <Box
                                onClick={() => clickid(data.news_id)}
                                style={{ cursor: 'pointer' }}>
                                <AiOutlineEdit />
                              </Box>
                            </TableCell>
                            {/* button delete */}
                            <TableCell align='right'>
                              <Box style={{ cursor: 'pointer' }}>
                                <AiFillDelete
                                  onClick={() => isDelete(data.news_id)}
                                />
                              </Box>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                      {emptyRows > 0 && (
                        <TableRow>
                          <TableCell colSpan={6} />
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component='div'
                  count={DataNews.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </div>
          </Box>
          {DialogEdit && (
            <DialogEditNews
              //   id={selectedId}
              Username={user}
              Status={DialogEdit}
              handleClose={handleCloseDialog}
              Data={DataUpdate}
            />
          )}
          {DialogNews && (
            <DialogAddnews
              Username={user}
              Status={DialogNews}
              handleClose={handleCloseDialog}
            />
          )}
        </div>
      ) : null}
    </div>
  );
}

export default newsManagemant;
