/** @format */

import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';
import brand from 'dan-api/dummy/brand';
import logo from 'dan-images/logoCPE.png';
import { TextFieldRedux } from './ReduxFormMUI';
import useStyles from './user-jss';

// validation functions
const required = (value) => (value === null ? 'Required' : undefined);

function LoginForm(props) {
  const { classes, cx } = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const mdDown = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const {
    handleSubmit, pristine, submitting, deco
   } = props;
  return (
    <Fragment>
      {!mdUp && (
        <NavLink to='/' className={cx(classes.brand, classes.outer)}>
          <img src={logo} alt={brand.name} />
          {brand.name}
        </NavLink>
      )}
      <Paper className={cx(classes.paperWrap, deco && classes.petal)}>
        {!mdDown && (
          <div className={classes.topBar}>
            <NavLink to='/' className={classes.brand}>
              <img src={logo} alt={brand.name} style={{ width: 180 }} />
            </NavLink>
          </div>
        )}
        <Typography variant='h4' sx={{ textTransform: 'uppercase' }}>
          Login Student
        </Typography>
        <section className={classes.formWrap}>
          <Divider />
          <form onSubmit={handleSubmit}>
            <div>
              <FormControl variant='standard' className={classes.formControl}>
                <Field
                  name='username'
                  component={TextFieldRedux}
                  placeholder='00000000000-0'
                  helperText='โปรดระบุรหัสนักศึกษาของ RMUTL มี - ด้วย'
                  label='Username'
                  required
                  className={classes.field}
                />
              </FormControl>
            </div>
            <div>
              <FormControl variant='standard' className={classes.formControl}>
                <Field
                  name='password'
                  component={TextFieldRedux}
                  type={showPassword ? 'text' : 'password'}
                  helperText='โปรดระบุ ปี/เดือน/วัน เกิดของท่าน (พ.ศ.)  เช่น 20280704'
                  label='Your Password'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='Toggle password visibility'
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          size='large'>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  required
                  validate={required}
                  className={classes.field}
                />
              </FormControl>
            </div>
            <div>
              <Button
                variant='contained'
                // color='primary'
                size='large'
                type='submit'>
                Continue
                <ArrowForward
                  className={cx(classes.rightIcon, classes.iconSmall)}
                  disabled={submitting || pristine}
                />
              </Button>
            </div>
          </form>
        </section>
      </Paper>
    </Fragment>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  deco: PropTypes.bool.isRequired,
};

const LoginFormReduxed = reduxForm({
  form: 'loginForm',
  enableReinitialize: true,
})(LoginForm);

const FormInit = connect((state) => ({
  force: state,
  initialValues: state.login.usersLogin,
  deco: state.ui.decoration,
}))(LoginFormReduxed);

export default FormInit;
