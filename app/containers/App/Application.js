/** @format */

import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
import {
  Parent,
  Portal,
  DashboardPage,
  BlankPage,
  Form,
  Table,
  Error,
  DemoPage,
  NotFound,
  CECourses,
  CalenderStudy,
  allNew,
  ComingSoon,
  personal,
  newdetail,
  Createfrom,
  Coures,
  StrtureOfCoures,
  StrutureCE,
  contactus,
  Backoffice,
  CooperativeFrom,
  newsManagemant,
} from '../pageListAsync';

function Application(props) {
  const { history } = props;
  // const changeMode = useContext(ThemeContext); changeMode={changeMode}
  return (
    <Dashboard history={history}>
      <Switch>
        <Route exact path='/' component={Portal} />
        <Route exact path='/aboutus' component={CECourses} />
        <Route exact path='/personal' component={personal} />
        <Route path='/aboutus/calender-study' component={CalenderStudy} />
        <Route exact path='/aboutus/allNew' component={allNew} />
        <Route path='/aboutus/detail' component={newdetail} />
        <Route path='/Coures' component={Coures} />
        <Route path='/Coures-CPE' component={StrutureCE} />
        <Route path='/Coures-CPE-detail' component={StrtureOfCoures} />
        <Route path='/Contact-us' component={contactus} />
        <Route path='/Backoffice/personel' component={Backoffice} />
        <Route path='/Cooperative' component={CooperativeFrom} />
        <Route path='/Managemant/news' component={newsManagemant} />
        <Route path='/test' component={Createfrom} />
        <Route exact path='/app/blank-page' component={BlankPage} />
        <Route path='/app/pages/dashboard' component={DashboardPage} />
        <Route path='/app/pages/form' component={Form} />
        <Route path='/app/pages/table' component={Table} />
        <Route path='/app/pages/not-found' component={NotFound} />
        <Route path='/app/pages/error' component={Error} />
        <Route exact path='/app/pages' component={Parent} />
        <Route path='/app/pages/demopage' component={DemoPage} />
        <Route path='/app/pages/ComingSoon' component={ComingSoon} />
        <Route component={NotFound} />
      </Switch>
    </Dashboard>
  );
}

Application.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Application;
