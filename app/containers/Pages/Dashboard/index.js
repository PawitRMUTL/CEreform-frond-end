import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Card } from '@mui/material';
// import { Typography } from '@mui/material';
import ShownumberStudent from './ShownumberStudent';
import ShownumberNews from './ShownumberNews';
import ShownumberTeacher from './ShownumberTeacher';
import Report from './Report';
import './styles.css';
function BasicTable() {
  const [Islogin, Setlogin] = useState(false);
  // -------------------- getCookie
  const username = Cookies.get('._jwtUsername');
  const role = Cookies.get('._jwtRole');
  // ===============================
  useEffect(() => {
    axios
      .post('http://0.0.0.0:3200/api/verify_authen', {
        token: username,
        tokenRole: role,
      })
      .then((data) => {
        console.log(data.data.returnCode);
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
  return (
    <div>
      {Islogin ? (
        <div>
          <div className='section'>
            <ShownumberStudent />
            <ShownumberTeacher />
            <ShownumberNews />
          </div>
          <div
            style={{
              padding: ' 1rem 4rem 1rem 3rem',
            }}>
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
