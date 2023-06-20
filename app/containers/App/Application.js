/** @format */

import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
import { ThemeContext } from './ThemeWrapper';
import {
  Parent,
  Portal,
  Aboutus,
  DashboardPage,
  BlankPage,
  Form,
  Table,
  Error,
  DemoPage,
  NotFound,
} from '../pageListAsync';

function Application(props) {
  const { history } = props;
  const changeMode = useContext(ThemeContext);
  return (
    <Dashboard history={history} changeMode={changeMode}>
      <Switch>
        <Route exact path='/' component={Portal} />
        <Route exact path='/app/blank-page' component={BlankPage} />
        <Route path='/app/about-us' component={Aboutus} />
        <Route path='/app/pages/dashboard' component={DashboardPage} />
        <Route path='/app/pages/form' component={Form} />
        <Route path='/app/pages/table' component={Table} />
        <Route path='/app/pages/not-found' component={NotFound} />
        <Route path='/app/pages/error' component={Error} />
        <Route exact path='/app/pages' component={Parent} />
        <Route path='/app/pages/demopage' component={DemoPage} />
        <Route component={NotFound} />
      </Switch>
    </Dashboard>
  );
}

Application.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Application;