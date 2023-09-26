/**
 * /* eslint-disable
 *
 * @format
 */
import React from 'react';
import Loading from 'dan-components/Loading';
import loadable from '../utils/loadable';
// newsManagemant
export const newsManagemant = loadable(
  () => import('./Pages/Backoffice/NewsManagement'),
  {
    fallback: <Loading />,
  },
);
// CooperativeFrom
export const CooperativeFrom = loadable(() => import('./Pages/Cooperative'), {
  fallback: <Loading />,
});
// Backoffice
export const Backoffice = loadable(() => import('./Pages/Backoffice'), {
  fallback: <Loading />,
});
// Createfrom
export const Createfrom = loadable(() => import('./Pages/Aboutus/CreateFrom'), {
  fallback: <Loading />,
});
// StrutureCE
export const StrutureCE = loadable(() => import('./Pages/Coures/StrutureCE'), {
  fallback: <Loading />,
});
export const StrtureOfCoures = loadable(
  () => import('./Pages/Coures/Coures_detail_CE'),
  {
    fallback: <Loading />,
  },
);
export const Coures = loadable(() => import('./Pages/Coures'), {
  fallback: <Loading />,
});
export const Portal = loadable(() => import('./Pages/Portal'), {
  fallback: <Loading />,
});
export const CECourses = loadable(() => import('./Pages/Aboutus'), {
  fallback: <Loading />,
});
export const CalenderStudy = loadable(
  () => import('./Pages/Aboutus/CalenderStudy'),
  {
    fallback: <Loading />,
  },
);
export const contactus = loadable(() => import('./Pages/Contactus'), {
  fallback: <Loading />,
});
export const allNew = loadable(() => import('./Pages/Aboutus/ListNew'), {
  fallback: <Loading />,
});
export const personal = loadable(() => import('./Pages/Personal'), {
  fallback: <Loading />,
});
export const newdetail = loadable(() => import('./Pages/Aboutus/Newdetall'), {
  fallback: <Loading />,
});
export const BlankPage = loadable(() => import('./Pages/BlankPage/index'), {
  fallback: <Loading />,
});
export const DashboardPage = loadable(() => import('./Pages/Dashboard'), {
  fallback: <Loading />,
});
export const Form = loadable(() => import('./Pages/Forms/ReduxForm'), {
  fallback: <Loading />,
});
export const Table = loadable(() => import('./Pages/Table/BasicTable'), {
  fallback: <Loading />,
});
export const PortalLogin = loadable(() => import('./Pages/Users/PortalLogin'), {
  fallback: <Loading />,
});
export const Login = loadable(() => import('./Pages/Users/Login'), {
  fallback: <Loading />,
});
export const LoginDedicated = loadable(
  () => import('./Pages/Standalone/LoginDedicated'),
  {
    fallback: <Loading />,
  },
);
export const Register = loadable(() => import('./Pages/Users/Register'), {
  fallback: <Loading />,
});
export const ResetPassword = loadable(
  () => import('./Pages/Users/ResetPassword'),
  {
    fallback: <Loading />,
  },
);
export const NotFound = loadable(() => import('./NotFound/NotFound'), {
  fallback: <Loading />,
});
export const NotFoundDedicated = loadable(
  () => import('./Pages/Standalone/NotFoundDedicated'),
  {
    fallback: <Loading />,
  },
);
export const Error = loadable(() => import('./Pages/Error'), {
  fallback: <Loading />,
});
export const Maintenance = loadable(() => import('./Pages/Maintenance'), {
  fallback: <Loading />,
});
export const ComingSoon = loadable(() => import('./Pages/ComingSoon'), {
  fallback: <Loading />,
});
export const Parent = loadable(() => import('./Parent'), {
  fallback: <Loading />,
});

export const DemoPage = loadable(() => import('./Pages/DemoPage'), {
  fallback: <Loading />,
});
