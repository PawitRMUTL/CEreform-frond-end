/** @format */

import React from 'react';
import { PropTypes } from 'prop-types';
import { Router, Switch, Route } from 'react-router-dom';
import NotFound from 'containers/Pages/Standalone/NotFoundDedicated';
// import Auth from './Auth';
import Application from './Application';
import LoginDedicated from '../Pages/Standalone/LoginDedicated';
import LoginStudent from '../Pages/Standalone/LoginStudent';
import LoginTeacher from '../Pages/Standalone/LoginTeacher';
import LoginAdmin from '../Pages/Standalone/LoginAdmin';
import Portal from '../Pages/Standalone/Portal';
import ThemeWrapper from './ThemeWrapper';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

function App(props) {
  const { history } = props;
  return (
    <ThemeWrapper>
      <Router history={history}>
        <Switch>
          {/* LoginAdmin */}
          <Route path='/loginAdmin' component={LoginAdmin} />
          <Route path='/PortalLogin' component={LoginDedicated} />
          <Route path='/loginStudent' component={LoginStudent} />
          <Route path='/loginTeacher' component={LoginTeacher} />
          <Route path='/Portal' exact component={Portal} />
          <Route path='/' component={Application} />
          {/* <Route component={Auth} /> */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ThemeWrapper>
  );
}

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default App;
