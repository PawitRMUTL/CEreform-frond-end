/** @format */

import { makeStyles } from 'tss-react/mui';
const orange = '#FE6F41';
const useStyles = makeStyles()((theme) => ({
  setting: {
    fontFamily: 'Noto Sans Thai',
    width: '100%',
    height: '380px',
    overflow: 'hidden',
    display: 'flex',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  imgbackground: {
    width: '100%',
    height: '100%',
    zIndex: 0,
    position: 'absolute',
    display: 'block',
    objectFit: 'cover',
  },
  imgbackgroundCurri: {
    // border: '2px solid red',
    objectFit: 'cover',
    width: '100%',
    position: 'absolute',
    zIndex: 0,
    height: '100%',
    overflow: 'hidden',
  },
  underimg: {
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    zIndex: 1,
    position: 'absolute',
    display: 'block',
    opacity: 0.8,
  },
  underimgstudyplan: {
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    zIndex: 1,
    position: 'absolute',
    display: 'block',
    opacity: 0.7,
  },
  settinggab: {
    marginTop: '10%',
    [theme.breakpoints.down('md')]: {
      marginTop: '6%',
    },
  },
  txtpayterm: {
    display: 'flex',
    flexDirection: 'column',
    // flexWrap: 'wrap',
    zIndex: 2,
    width: '20%',
    height: '50%',
    textAlign: 'right',
    margin: 'auto',
    padding: 20,
    // border: '2px solid red',
    color: '#FFF',
    [theme.breakpoints.down('md')]: {
      padding: 10,
      width: '75%',
      textAlign: 'center',
    },
  },
  setboxtext: {
    fontSize: '36px',
    fontWeight: '600',
    zIndex: 2,
    width: '75%',
    height: '30%',
    margin: 'auto',
    textAlign: 'center',
    padding: 20,
    color: '#FFF',
    // border: '2px solid red',
    [theme.breakpoints.down('md')]: {
      padding: 20,
      height: '45%',
      width: '100%',
      fontSize: '28px',
      display: 'flex',
      justifyContent: 'center', // Horizontally center the content
      alignItems: 'center', // Vertically center the content
      gap: '1rem', // Add a gap between Typography components
      flexDirection: 'column',
    },
    [theme.breakpoints.down('sm')]: {
      padding: 20,
      fontSize: '20px',
    },
  },
  buttonRegis: {
    padding: 4,
    top: '70%',
    left: '41%',
    [theme.breakpoints.down('md')]: {
      left: '32%',
      top: '65%',
    },
  },
  buttonstyles: {
    fontFamily: 'Noto Sans Thai',
    fontSize: '22px',
    backgroundColor: `${orange}`,
    color: '#FFFFFF',
    borderRadius: '50px',
    transition: 'transform .3s',
    '&:hover': {
      backgroundColor: `${orange}`,
      transform: 'scale(1.1)',
    },
    [theme.breakpoints.down('md')]: {
      backgroundColor: 'rgba(0, 0, 0, 0);',
      color: `${orange}`,
      textDecoration: 'underline',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0);',
        transform: 'scale(1.1)',
      },
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      backgroundColor: 'rgba(0, 0, 0, 0);',
      color: `${orange}`,
      textDecoration: 'underline',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0);',
        transform: 'scale(1.1)',
      },
    },
  },
  buttonstyles1: {
    fontFamily: 'Noto Sans Thai',
    fontSize: '14px',
    backgroundColor: `${orange}`,
    color: '#FFFFFF',
    borderRadius: '50px',
    transition: 'transform .3s',
    '&:hover': {
      backgroundColor: `${orange}`,
      transform: 'scale(1.1)',
    },
    [theme.breakpoints.down('md')]: {
      backgroundColor: 'rgba(0, 0, 0, 0);',
      color: `${orange}`,
      textDecoration: 'underline',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0);',
        transform: 'scale(1.1)',
      },
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      backgroundColor: 'rgba(0, 0, 0, 0);',
      color: `${orange}`,
      textDecoration: 'underline',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0);',
        transform: 'scale(1.1)',
      },
    },
  },
  subtxtpayterm: {
    fontSize: '12px',
    // lineHeight: 5,
    color: '#A4A4A4',
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '12px',
    },
  },
  titlepayterm: {
    fontSize: '22px',
    fontWeight: 500,
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },
  /// BannerCuuri
  bannercurriroot: {
    fontFamily: 'Noto Sans Thai',
    height: '770px',
    position: 'relative',
    // overflow:'hie
  },
  layout: {
    padding: 5,
    zIndex: 2,
    display: 'flex',
    // border: '2px solid red',
    position: 'absolute',
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
      padding: 2,
    },
  },
  layoutleft: {
    // border: '3px solid red',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '40%',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      flexDirection: 'colum',
      alignContent: 'flex-start',
      justifyContent: 'flex-start',
      height: '50%',
    },
  },
  layoutright: {
    // border: '3px solid red',
    width: '60%',
    height: '100%',
    color: 'white',
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'center', // Horizontally center the content
    alignItems: 'center', // Vertically center the content
    gap: '1rem', // Add a gap between Typography components
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '50%',
    },
  },
  txttitle: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: '32px',
    background:
      'linear-gradient(94deg, rgba(255,255,255,1) 44%,rgba(254,111,65,1) 43%)',
    backgroundClip: 'text',
    color: 'transparent',
    [theme.breakpoints.down('sm')]: {
      fontWeight: 500,
      fontSize: '24px',
    },
  },
  subtitle: {
    width: '550px',
    fontSize: '22px',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      width: '350px',
    },
  },
  cours: {
    margin: 'auto',
    alignContent: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      margin: '0px 0px 0px 0px',
      flexDirection: 'none',
      display: 'flex',
      padding: theme.spacing(0),
    },
  },
  layoutgotostudyplan: {
    width: '100%',
    height: '100%',
    // textAlign: 'center',
    display: 'flex',
    justifyContent: 'right', // Horizontally center the content
    alignItems: 'center', // Vertically center the content
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  stylesgotostudyplan: {
    zIndex: 2,
    width: '50%',
    padding: theme.spacing(2),
    textAlign: 'right',
    // display: 'flex',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  titlegotostudyplan: {
    fontSize: '30px',
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
    },
  },
  imgbackgroundlogin: {
    objectFit: 'cover',
    width: '100%',
    position: 'absolute',
    zIndex: 0,
    height: '100%',
    overflow: 'hidden',
  },
  buttonstylesgotostudtplan: {
    margin: theme.spacing(2),
    textTransform: 'uppercase',
    fontSize: '14px',
    backgroundColor: `${orange}`,
    color: '#FFFFFF',
    borderRadius: '50px',
    transition: 'transform .3s',
    '&:hover': {
      backgroundColor: `${orange}`,
      transform: 'scale(1.1)',
    },
    [theme.breakpoints.down('md')]: {
      backgroundColor: 'rgba(0, 0, 0, 0);',
      color: `${orange}`,
      textDecoration: 'underline',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0);',
        transform: 'scale(1.1)',
      },
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      backgroundColor: 'rgba(0, 0, 0, 0);',
      color: `${orange}`,
      textDecoration: 'underline',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0);',
        transform: 'scale(1.1)',
      },
    },
  },
  textCountSection: {
    // border: '1px solid red',
    zIndex: 2,
    width: '100%',
    height: '55%',
    margin: 'auto',
    textAlign: 'center',
    padding: 20,
    color: '#FFF',
    [theme.breakpoints.down('md')]: {
      padding: 40,
    },
    [theme.breakpoints.down('sm')]: {
      padding: 20,
    },
    [theme.breakpoints.down('xs')]: {
      padding: 10,
    },
  },
  texts: {
    fontSize: '48px',
    fontWeight: 500,
    [theme.breakpoints.down('md')]: {
      fontSize: '32px',
    },
    [theme.breakpoints.down('sm')]: { fontSize: '24px' },
  },
  layouttext: {
    marginTop: 6,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      gap: 6,
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-around',
    },
  },
  timelinebutton: {
    fontFamily: 'Noto Sans Thai',
    width: '100px',
    height: '30px',
    padding: 6,
    textDecoration: 'none',
    fontSize: '12px',
    marginTop: '20px',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: `${orange}`,
    color: '#FFF',
    borderRadius: '20px',
    transition: 'transform .3s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
}));
export default useStyles;
