/** @format */

import useStyles from 'dan-components/Forms/user-jss';
import React from 'react';
import { PortalForm } from 'dan-components';

function PortalLogin() {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.userFormWrap}>
            <PortalForm />
          </div>
        </div>
      </div>
    </>
  );
}
export default PortalLogin;
