/** @format */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Outer from '../Templates/Outer';
import {
  // Login,
  Register,
  ResetPassword,
  ComingSoon,
  // Maintenance,
  NotFound,
  PortalLogin,
} from '../pageListAsync';

function Auth() {
  return (
    <Outer>
      <Switch>
        <Route path='/Portallogin' component={PortalLogin} />
        <Route path='/register' component={Register} />
        <Route path='/reset-password' component={ResetPassword} />
        {/* <Route path="/maintenance" component={Maintenance} /> */}
        <Route path='/coming-soon' component={ComingSoon} />
        <Route component={NotFound} />
      </Switch>
    </Outer>
  );
}

export default Auth;
