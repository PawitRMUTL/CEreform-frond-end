/** @format */
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
    padding: '60px 120px 0px 120px',
    backgroundColor: '#D9D9D9',
    // border: '1px solid green',
    [theme.breakpoints.down('md')]: {
      padding: '60px 60px 10px 60px',
    },
  },
  blackspece: {
    width: '373px',
    height: '108px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '200px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100px',
    },
  },
  footerdata: {
    [theme.breakpoints.down('sm')]: {
      zIndex: 1,
      marginRight: theme.spacing(10),
    },
  },
  abouttxt: {
    zIndex: 1,
    // border: '2px solid red',
    width: '580px',
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2),
    },
  },
  styleabouttxt: {
    zIndex: 1,
    textAlign: 'left',
    lineHeight: 2,
    fontWeight: '400',
    fontSize: '16px',
    color: '#323232',
    [theme.breakpoints.down('md')]: {
      fontWeight: '450',
      fontSize: '18px',
    },
  },
  txtfaculty: {
    zIndex: 1,
    marginTop: theme.spacing(6),
    width: 450,
    paddingTop: 2,
    [theme.breakpoints.down('md')]: {
      width: 800,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      paddingTop: 0,
    },
  },
  txticon: {
    zIndex: 1,
    width: 350,
    // border: '2px solid red',
    paddingTop: 2,
    [theme.breakpoints.down('md')]: {
      width: 350,
    },
  },
  txtstlye: {
    zIndex: 1,
    lineHeight: 1.5,
    fontWeight: 350,
    fontSize: '18px',
    [theme.breakpoints.down('md')]: {
      fontSize: '22px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
  txtHeading: {
    zIndex: 1,

    lineHeight: 2,
    fontWeight: 600,
    fontSize: '22px',
    [theme.breakpoints.down('md')]: {
      fontWeight: 500,
      fontSize: '24px',
    },
    [theme.breakpoints.down('sm')]: {
      fontWeight: 500,
      fontSize: '16px',
    },
  },
  logostlye: {
    zIndex: 1,
    width: '40px',
    height: '40px',
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 10,
  },
  txtLogo: {
    zIndex: 1,
    lineHeight: 1.5,
    fontWeight: 400,
    fontSize: '16px',
    marginLeft: 8,
    paddingTop: theme.spacing(1),
  },
  copyrighttxt: {
    zIndex: 'auto',
    textAlign: 'center',
    padding: 10,
    fontSize: '14px',
    color: '#A9A9A9',
  },
  imglogo: {
    position: 'absolute',
    zIndex: 1,
    width: '373px',
    height: '108px',
    [theme.breakpoints.down('md')]: {
      width: '500px',
      height: '150px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '260px',
      height: '80px',
    },
  },
  gradiant: {
    zIndex: 0,
    left: 20,
    position: 'absolute',
    transform: 'skewX(-20deg)',
    width: '500px',
    height: '300px',
    background:
      'linear-gradient(0deg, rgba(237,236,236,0) 0%, rgba(245,245,245,0.3) 100%)',
  },
  gradiant2: {
    zIndex: 0,
    right: 180,
    bottom: 0,
    position: 'absolute',
    transform: 'skewX(-20deg)',
    width: '300px',
    height: '400px',
    background:
      'linear-gradient(0deg, rgba(245,245,245,0.3) 0%, rgba(237,236,236,0) 30%)',
    [theme.breakpoints.down('md')]: {
      background:
        'linear-gradient(0deg, rgba(245,245,245,0) 0%, rgba(237,236,236,0) 0%)',
    },
  },
  gradiant3: {
    zIndex: 0,
    right: 80,
    bottom: 0,
    position: 'absolute',
    transform: 'skewX(-20deg)',
    width: '30px',
    height: '400px',
    background:
      'linear-gradient(0deg, rgba(245,245,245,0.2) 0%, rgba(237,236,236,0) 30%)',
    [theme.breakpoints.down('md')]: {
      background:
        'linear-gradient(0deg, rgba(245,245,245,0) 0%, rgba(237,236,236,0) 0%)',
    },
  },
}));
export default useStyles;
