/** @format */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ExitToApp from '@mui/icons-material/ExitToApp';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import dummy from 'dan-api/dummy/dummyContents';
import link from 'dan-api/ui/link';
import { Box, Typography } from '@mui/material';
// import useStyles from './header-jss';

function UserMenu() {
  // const { classes, cx } = useStyles();

  // -------------------- getCookie
  const username = Cookies.get('._jwt');
  const role = Cookies.get('._jwt-user');
  // ===============================

  // ======================= use state ================================
  const [isLogin, setIslogin] = useState(false);
  const [menuState, setMenuState] = useState({
    anchorEl: null,
    openMenu: null,
  });
  // -------------------- set username and role !!Nosql
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [showname, setShowname] = useState('');
  const [showstatus, setShowstate] = useState('');
  // ======================== end usestate   ================================

  // ======================== use effect =================================
  // -------------------- verify jwt
  useEffect(() => {
    axios
      .post('http://0.0.0.0:3200/api/verify_authen', {
        token: username,
        tokenRole: role,
      })
      .then((data) => {
        setName(data.data.User);
        setStatus(data.data.stateRole);
        // console.log('data user : ' + data.data.User);
        // console.log('data role : ' + data.data.stateRole);
      });
  }, []);
  // ------------------- set name & role
  useEffect(() => {
    if (name !== '' && status !== '') {
      // console.log('name : ' + name);
      // console.log('status : ' + status);
      if (status === '1') {
        setShowstate('นักเรียน');
        setShowname('สุวิจักษณ์');
      } else if (status === '2') {
        setShowstate('บุคคลกร');
        setShowname('กิตตินันท์');
      }
    }
  }, [name, status]);
  // -------------------- set state switch login
  useEffect(() => {
    if (username !== undefined && role !== undefined) {
      setIslogin(true);
    }
  }, [username]);
  // ======================= end effect ===============================
  const handleMenu = (menu) => (event) => {
    const { openMenu } = menuState;
    setMenuState({
      openMenu: openMenu === menu ? null : menu,
      anchorEl: event.currentTarget,
    });
  };

  const handleClose = () => {
    setMenuState({ anchorEl: null, openMenu: null });
    Cookies.remove('._jwt');
    Cookies.remove('._jwt-user');
    setTimeout(() => {
      setIslogin(false);
    }, 1000);
    window.location.href = '/';
  };
  const { anchorEl, openMenu } = menuState;
  return (
    <div>
      {/* islogin ? (ture) : (false) */}
      {isLogin ? (
        <div
          style={{
            width: 200,
            display: 'flex',
            flexWrap: 'wrap',
          }}>
          <Box
            sx={{
              margin: 'auto',
              textAlign: 'right',
              verticalAlign: 'middle',
            }}>
            <Typography sx={{ fontSize: '14px' }}>
              สวัสดีคุณ {showname}
            </Typography>
            <Typography sx={{ fontSize: '12px', lineHeight: 0.7 }}>
              สถานะ : {showstatus}
            </Typography>
          </Box>
          <Button onClick={handleMenu('user-setting')}>
            <Avatar
              alt={dummy.user.name}
              src={dummy.user.avatar}
              sx={{ width: '50px', height: '50px' }}
            />
          </Button>
        </div>
      ) : (
        <Button
          // onClick={toggle}
          href='/login'
          variant='contained'
          sx={{
            width: 100,
            color: '#11111',
          }}>
          Login
        </Button>
      )}
      <div>
        <Menu
          id='menu-appbar'
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={openMenu === 'user-setting'}
          onClose={handleClose}>
          <MenuItem component={Link} to={link.profile}>
            My Profile
          </MenuItem>
          <MenuItem component={Link} to={link.calendar}>
            My Calendar
          </MenuItem>
          <MenuItem component={Link} to={link.email}>
            My Inbox
          </MenuItem>
          <Divider />
          {/* Login Zone */}
          <MenuItem onClick={handleClose} component={Link}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            Log Out
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default UserMenu;
