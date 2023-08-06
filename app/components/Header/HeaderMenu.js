/** @format */

import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import { NavLink } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import logo from 'dan-images/logoCPE.png';
import brand from 'dan-api/dummy/brand';
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import dummy from 'dan-api/dummy/dummyContents';
import MenuIcon from '@mui/icons-material/Menu';
import SidebarContent from '../Sidebar/SidebarContent';
import DropListMenu from './DropListMenu';
import MegaMenu from './MegaMenu';
import UserMenu from './UserMenu';
import useStyles from './header-jss';

function HeaderMenu(props) {
  const { classes, cx } = useStyles();
  // const [status, setStatus] = useState(dummy.user.status);
  // const [anchorEl, setAnchorEl] = useState(null);
  const [fixed, setFixed] = useState(false);

  // Initial menu ui
  let flagFixedMenu = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixedMenu = scroll > 64;
    if (flagFixedMenu !== newFlagFixedMenu) {
      setFixed(newFlagFixedMenu);
      flagFixedMenu = newFlagFixedMenu;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const {
    type,
    dataMenu,
    toggleDrawerOpen,
    openMobileNav,
    loadTransition,
    isLogin,
    logoLink,
  } = props;

  const mdDown = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <AppBar
      className={cx(
        classes.appBar,
        classes.attachedbar,
        fixed ? classes.fixed : ''
      )}>
      <div className={classes.appMenu}>
        {!lgUp && (
          <IconButton
            className={classes.menuButton}
            aria-label='Menu'
            onClick={toggleDrawerOpen}
            size='large'>
            <MenuIcon />
          </IconButton>
        )}
        {!mdDown && (
          <div className={classes.position}>
            <Fragment>
              <NavLink to={logoLink} className={classes.brand}>
                <Box sx={{ width: 'auto' }}>
                  <img
                    src={logo}
                    alt={brand.name}
                    style={{
                      width: 120,
                    }}
                  />
                </Box>
              </NavLink>
            </Fragment>
          </div>
        )}
        <div className={classes.searchHeaderMenu}>
          <div className={cx(classes.wrapper, classes.light)}></div>
        </div>
        <Toolbar>
          <UserMenu light />
        </Toolbar>
      </div>
      {!lgDown && type === 'mega-menu' ? (
        <MegaMenu dataMenu={dataMenu} />
      ) : (
        <DropListMenu dataMenu={dataMenu} />
      )}
      {!lgUp && (
        <SwipeableDrawer
          onClose={toggleDrawerOpen}
          onOpen={toggleDrawerOpen}
          open={!openMobileNav}
          anchor='left'>
          <div className={classes.swipeDrawerPaper}>
            <SidebarContent
              drawerPaper
              leftSidebar
              toggleDrawerOpen={toggleDrawerOpen}
              loadTransition={loadTransition}
              dataMenu={dataMenu}
              // status={status}
              // anchorEl={anchorEl}
              // openMenuStatus={handleOpen}
              // closeMenuStatus={handleClose}
              // changeStatus={handleChangeStatus}
              isLogin={isLogin}
            />
          </div>
        </SwipeableDrawer>
      )}
    </AppBar>
  );
}

HeaderMenu.propTypes = {
  type: PropTypes.string.isRequired,
  dataMenu: PropTypes.array.isRequired,
  openMobileNav: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired,
  // changeMode: PropTypes.func.any,
  openGuide: PropTypes.func.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  logoLink: PropTypes.string,
  isLogin: PropTypes.bool,
};

HeaderMenu.defaultProps = {
  isLogin: true,
  logoLink: '/',
};

export default HeaderMenu;
