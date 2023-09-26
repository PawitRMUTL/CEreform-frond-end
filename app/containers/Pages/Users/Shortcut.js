/** @format */

import useStyles from 'dan-components/Forms/user-jss';
import React from 'react';
import { PortalShortcut } from 'dan-components';

function Shortcut() {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.userFormWrap}>
            <PortalShortcut />
          </div>
        </div>
      </div>
    </>
  );
}
export default Shortcut;
