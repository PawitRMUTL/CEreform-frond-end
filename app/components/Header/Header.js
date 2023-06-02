/** @format */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import UserMenu from './UserMenu';
import useStyles from './header-jss';

function Header(props) {
  const { classes, cx } = useStyles();
  const [open] = useState(false);
  const { margin, gradient } = props;
  const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <AppBar
      className={cx(
        classes.appBar,
        classes.floatingBar,
        margin && classes.appBarShift,

        gradient ? classes.gradientBg : classes.solidBg
      )}>
      <Toolbar disableGutters={!open}>
        {!smDown && <span className={classes.separatorV} />}
        <UserMenu />
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  margin: PropTypes.bool.isRequired,
  gradient: PropTypes.bool.isRequired,
};

export default Header;
