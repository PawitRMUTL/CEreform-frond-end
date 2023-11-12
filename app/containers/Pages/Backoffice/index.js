import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import Personelstudent from './Personel_student';
import Personelteacher from './Personel_teacher';
import { hostBackend } from '../../../../env';
function Backoffice() {
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [UserStudent, setUserStudent] = useState(null);
  const [UserTeacher, setUserTeacher] = useState(null);

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
        // set username && Role
        setName(data.data.User);
        setStatus(data.data.stateRole);
      });
  }, []);
  useEffect(() => {
    if (status !== undefined) {
      if (status === 'นักศึกษา') {
        setUserStudent(status);
      }
      if (status === 'อาจารย์') {
        setUserTeacher(status);
      }
    }
  }, [status]);
  return (
    <>
      {UserStudent ? (
        <div style={{ padding: '0px 5% 0px 5%' }}>
          <Personelstudent idrmutl={name} />
        </div>
      ) : null}
      {UserTeacher ? (
        <>
          <Personelteacher idrmutl={name} />
        </>
      ) : null}
    </>
  );
}

export default Backoffice;
