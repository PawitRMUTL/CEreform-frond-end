import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
// Slider nav
import { NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import brand from 'dan-api/dummy/brand';
import logo from 'dan-images/logo.png';
import Cookies from 'js-cookie';
import axios from 'axios';
import MainMenu from './MainMenu';
import useStyles from './sidebar-jss';

function SidebarContent(props) {
  const { classes, cx } = useStyles();
  const [transform, setTransform] = useState(0);
  const [user, setUsername] = useState('');
  const [status, setStatus] = useState('');
  const [showname, setShowname] = useState('');
  const [showstatus, setShowstate] = useState('');
  const [thumbuser, Setthumbuser] = useState([]);
  const [ShowImage, SetShowimage] = useState([]);
  // -------------------- getCookie
  const username = Cookies.get('._jwtUsername');
  const role = Cookies.get('._jwtRole');
  // ---------------------
  // -------------------- verify jwt
  useEffect(() => {
    axios
      .post('http://10.21.45.100:3000/api/verify_authen', {
        token: username,
        tokenRole: role,
      })
      .then((data) => {
        setUsername(data.data.User);
        setStatus(data.data.stateRole);
      });
  }, []);
    // ------------------- Fetch Data FristName Student && Teacher && admin
    useEffect(() => {
      if (user !== undefined) {
        if (status === 'นักศึกษา') {
          axios
            .post('http://10.21.45.100:3000/api/ReadStudent', { username: user })
            .then((data) => {
              Setthumbuser(data.data);
              const setFristName = data.data[0].first_name;
              setShowname(setFristName);
              setShowstate(status);
            });
        }
        if (status === 'อาจารย์') {
          axios
            .post('http://10.21.45.100:3000/api/ReadTeacher', { username: user })
            .then((data) => {
              const setFristName = data.data[0].first_name;
              Setthumbuser(data.data);
              setShowname(setFristName);
              setShowstate(status);
            });
        }
      }
    }, [user, status]);
      // --------------------- set image
  useEffect(() => {
    if (thumbuser !== undefined) {
      if (status === 'นักศึกษา') {
        // let ImageValue;
        const promises = Object.values(thumbuser).map((data) => import(`/Users/baconinhell/Desktop/dandelion-pro_v25/starter-project/image/student/${data.image}`).then((image) => image.default));
        Promise.all(promises).then((imagePaths) => {
          const ImageValue = [];
          imagePaths.forEach((index) => ImageValue.push(index));
          SetShowimage(ImageValue);
        });
      }
      if (status === 'อาจารย์') {
        const promises = Object.values(thumbuser).map((data) => import(`/Users/baconinhell/Desktop/dandelion-pro_v25/starter-project/image/teacher/${data._image}`).then((image) => image.default));
        Promise.all(promises).then((imagePaths) => {
          const ImageValue = [];
          imagePaths.forEach((index) => ImageValue.push(index));
          SetShowimage(ImageValue);
        });
      }
    }
  }, [thumbuser]);
  // ======================= end effect ===============================
  const handleScroll = (event) => {
    const scroll = event.target.scrollTop;
    setTransform(scroll);
  };

  useEffect(() => {
    const mainContent = document.getElementById('sidebar');
    mainContent.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const {
    turnDarker,
    drawerPaper,
    toggleDrawerOpen,
    loadTransition,
    leftSidebar,
    dataMenu,
    // status,
    // anchorEl,
    // openMenuStatus,
    // closeMenuStatus,
    // changeStatus,
    isLogin,
  } = props;

  return (
    <div
      className={cx(
        classes.drawerInner,
        !drawerPaper ? classes.drawerPaperClose : '',
      )}>
      <div className={classes.drawerHeader}>
        <NavLink
          to='/'
          className={cx(
            classes.brand,
            classes.brandBar,
            turnDarker && classes.darker,
          )}>
          <img src={logo} alt={brand.name} />
          <Typography>{brand.name}</Typography>
        </NavLink>
        {username ? (
          <div
            className={cx(classes.profile, classes.user)}
            style={{
              opacity: 1 - transform / 100,
              marginTop: transform * -0.3,
            }}>
            <Avatar
              alt={showname}
              src={ShowImage}
              className={cx(classes.avatar, classes.bigAvatar)}
            />
            <div>
              <Typography>สวัสดีคุณ {showname}</Typography>
              <Typography>สถานะ {showstatus}</Typography>
              {/* <Menu
                id="status-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={closeMenuStatus}
                className={classes.statusMenu}
              >
                <MenuItem onClick={() => changeStatus('online')}>
                  <i className={cx(classes.dotStatus, classes.online)} />
                  Online
                </MenuItem>
                <MenuItem onClick={() => changeStatus('idle')}>
                  <i className={cx(classes.dotStatus, classes.idle)} />
                  Idle
                </MenuItem>
                <MenuItem onClick={() => changeStatus('bussy')}>
                  <i className={cx(classes.dotStatus, classes.bussy)} />
                  Bussy
                </MenuItem>
                <MenuItem onClick={() => changeStatus('offline')}>
                  <i className={cx(classes.dotStatus, classes.offline)} />
                  Offline
                </MenuItem>
              </Menu> */}
            </div>
          </div>
        ) : (null)}
      </div>
      <div
        id='sidebar'
        className={cx(
          classes.menuContainer,
          leftSidebar && classes.rounded,
          isLogin && classes.withProfile,
        )}>
        <MainMenu
          loadTransition={loadTransition}
          dataMenu={dataMenu}
          toggleDrawerOpen={toggleDrawerOpen}
        />
      </div>
    </div>
  );
}

SidebarContent.propTypes = {
  drawerPaper: PropTypes.bool.isRequired,
  turnDarker: PropTypes.bool,
  toggleDrawerOpen: PropTypes.func,
  loadTransition: PropTypes.func,
  leftSidebar: PropTypes.bool.isRequired,
  dataMenu: PropTypes.array.isRequired,
  // status: PropTypes.string.any,
  anchorEl: PropTypes.object,
  // openMenuStatus: PropTypes.func.isRequired,
  // closeMenuStatus: PropTypes.func.isRequired,
  // changeStatus: PropTypes.func.isRequired,
  isLogin: PropTypes.bool,
};

SidebarContent.defaultProps = {
  turnDarker: false,
  toggleDrawerOpen: () => {},
  loadTransition: () => {},
  anchorEl: null,
  isLogin: true,
};

export default SidebarContent;
