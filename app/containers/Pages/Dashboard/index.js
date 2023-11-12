import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Card, Typography } from '@mui/material';
// import { Typography } from '@mui/material';
import ShownumberStudent from './ShownumberStudent';
import ShownumberNews from './ShownumberNews';
import ShownumberTeacher from './ShownumberTeacher';
import Report from './Report';
import './styles.css';
import { hostBackend } from '../../../../env';

function BasicTable() {
  const [Islogin, Setlogin] = useState(false);
  const [MaxStudent, Setmaxstu] = useState();
  const [MaxTeacher, Setmaxtec] = useState();
  const [MaxNews, Setmaxnews] = useState();
  // -------------------- getCookie
  const username = Cookies.get('._jwtUsername');
  const role = Cookies.get('._jwtRole');
  // ===============================
  useEffect(() => {
    axios
      .post(`${hostBackend}/api/verify_authen`, {
        token: username,
        tokenRole: role,
      })
      .then((data) => {
        if (data.data.returnCode === '0') {
          Swal.fire({
            title: 'Oops...',
            text: 'Please login ก่อนใช้งานทุกครั้ง',
            icon: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'login',
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = '/PortalLogin';
            }
          });
        }
        if (data.data.returnCode === '1') {
          Setlogin(true);
        }
      });
  }, []);
  // ========== Read Dashborad
  useEffect(() => {
    axios.post(`${hostBackend}/api/dashboard`).then((data) => {
      Setmaxnews(data.data[2].max_id);
      Setmaxstu(data.data[0].max_id);
      Setmaxtec(data.data[1].max_id);
    });
  }, []);

  return (
    <div>
      {Islogin ? (
        <div>
          <div className='section'>
            <ShownumberStudent numberstu={MaxStudent} />
            <ShownumberTeacher numbertac={MaxTeacher} />
            <ShownumberNews numberNews={MaxNews} />
          </div>
          <div
            style={{
              padding: ' 1rem 4rem 1rem 3rem',
            }}>
            <Typography variant='h5' sx={{ marginBottom: '1%' }}>
              รายงานบัณฑิต
            </Typography>
            <Card className='Report_Box'>
              <Report />
            </Card>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default BasicTable;
