/** @format */

import React from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { LoginForm } from 'dan-components';
import useStyles from 'dan-components/Forms/user-jss';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
const now = new Date();

// experis 3 minutes Add 3 minutes (in milliseconds) to the current time
// now.setTime(now.getTime() + 3 * 60 * 1000);

// experis 1 day in cookie
now.setDate(now.getDate() + 1);

function Login() {
  // const [login, setIslogin] = React.useState(null);
  const [sucess, setSucess] = React.useState(null);
  const { classes } = useStyles();
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
  const submitForm = (values) => {
    axios
      .post('http://10.21.45.100:3000/api/authentication', {
        username: values.username,
        password: values.password,
        // api/authentication
      })
      .then((data) => {
        if (data.data.statusCode === 404) {
          setSucess(false);
        } else {
          Cookies.set('._jwtUsername', data.data.jwt, {
            expires: now,
            secure: true,
            // httpOnly: true,
          });
          Cookies.set('._jwtRole', data.data.jwtRole, {
            expires: now,
            secure: true,
            // httpOnly: true,
          });
          setSucess(true);
        }
      });
  };

  // -------------------- noti login && check login
  React.useEffect(() => {
    // console.log('state login : ' + login);
    if (sucess === false) {
      Toast.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'username & password is wrong',
      });
      setSucess(null);
    } else if (sucess === true) {
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully',
      });
      // setIslogin(true);
      setSucess(null);
      setTimeout(() => {
        window.location.href = '/Portal';
      }, 1000);
    }
  }, [sucess]);

  const title = brand.name + ' - Login';
  const description = brand.desc;

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='twitter:title' content={title} />
        <meta property='twitter:description' content={description} />
      </Helmet>
      <div className={classes.container}>
        <div className={classes.userFormWrap}>
          <LoginForm onSubmit={(values) => submitForm(values)} />
        </div>
      </div>
    </div>
  );
}

export default Login;
