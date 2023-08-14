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
import { AiOutlinePlus } from 'react-icons/ai';
import Cookies from 'js-cookie';
import axios from 'axios';
import Swal from 'sweetalert2';

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
];

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
  const { classes } = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => { setPage(newPage); };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

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
              <Typography> xx records</Typography>
              <Typography fontSize={10}>
                Last Update
                <Typography fontSize={12}>dd/mm/yy</Typography>
              </Typography>
            </Box>
          </Card>
          <Box marginTop={'2%'}>
            <Box
              display={'flex'}
              justifyContent={'space-evenly'}
              textAlign={'center'}
              width={120}
              borderRadius={30}
              padding={'10px'}
              sx={{ color: '#fff', backgroundColor: '#000' }}>
              <AiOutlinePlus />
              <Typography fontSize={12}> Adds News</Typography>
            </Box>
          </Box>
          <Box border={'2px solid red'} marginTop={'2%'}>
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
                        <TableCell>ชื่อข่าว</TableCell>
                        <TableCell align='center'>วันที่ลงข่าว</TableCell>
                        <TableCell align='right'>แก้ไข</TableCell>
                        <TableCell align='right'>ลบ</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage,
                        )
                        .map((row, index) => {
                          const labelId = `enhanced-table-checkbox-${index}`;
                          return (
                            <TableRow hover tabIndex={-1} key={row.name}>
                              <TableCell
                                component='th'
                                id={labelId}
                                scope='row'>
                                {row.name}
                              </TableCell>
                              <TableCell align='center'>
                                {row.calories}
                              </TableCell>
                              <TableCell align='right'>{row.fat}</TableCell>
                              <TableCell align='right'>{row.carbs}</TableCell>
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
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </div>
          </Box>
        </div>
      ) : null}
    </div>
  );
}

export default newsManagemant;
