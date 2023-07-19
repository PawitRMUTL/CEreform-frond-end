/** @format */

import { makeStyles } from 'tss-react/mui';
const useStyles = makeStyles()((theme) => ({
  typing: {
    fontSize: '36px',
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      fontSize: '26px',
    },
  },
  imageListRespontive: {
    width: 580,
    [theme.breakpoints.down('md')]: {
      width: 400,
    },
    [theme.breakpoints.down('sm')]: {
      width: 350,
    },
  },
  divider: {
    paddingTop: 10,
    marginRight: 5,
    border: 0,
    borderColor: '#FE6F41',
    borderBottomWidth: '4px',
    borderTopWidth: 0,
    display: 'inline-block',
    width: '80px',
    height: 0,
    borderStyle: 'solid',
  },
  txtstyle: {
    fontSize: '16px',
    fontWeight: '500',
  },
  position: {
    color: '#373737',
    wordWrap: 'break-word',
    width: '40%',
    marginLeft: '3%',
    // border: '5px solid red',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginTop: '2%',
      // margin: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '3%',
    },
  },
  Button: {
    fontFamily: 'Noto Sans Thai',
    backgroundColor: '#FE6F41',
    width: 130,
    height: 45,
    fontSize: '14px',
    transition: 'transform .3s',
    borderRadius: 20,
    color: '#FFF',
    '&:hover': {
      backgroundColor: '#FE6F41',
      transform: 'scale(1.1)',
    },
    [theme.breakpoints.down('md')]: {
      backgroundColor: 'rgba(0, 0, 0, 0);',
      color: '#FE6F41',
      textDecoration: 'underline',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0);',
        transform: 'scale(1.1)',
      },
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      backgroundColor: 'rgba(0, 0, 0, 0);',
      color: '#FE6F41',
      textDecoration: 'underline',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0);',
        transform: 'scale(1.1)',
      },
    },
  },
  ButtonRightWhatislooking: {
    position: 'relative',
    marginTop: -115,
    maxWidth: 740,
    height: 150,
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '80px',
    marginRight: 20,
    [theme.breakpoints.down('lg')]: {
      width: 500,
      marginRight: 0,
    },
    [theme.breakpoints.down('md')]: {
      marginTop: -90,
      width: 800,
      marginRight: 5,
      marginBottom: '2%',
      lineHeight: '50px',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: -30,
      // marginLeft: '2%',
      overflow: 'hidden',
      // marginRight: 0,
      width: '100%',
    },
  },
  BgBox: {
    backgroundColor: '#FE6F41',
    height: 90,
    borderRadius: '10px 10px 0px 0px',
    width: 380,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      height: 90,
    },
    [theme.breakpoints.down('sm')]: {
      height: 50,
      fontSize: '12px',
    },
  },
  BgBoxItem: {
    borderRadius: '0px 10px 10px 10px',
    color: '#373737',
    backgroundColor: '#ffffff',
    height: 90,
    width: '100%',
    display: 'flex',
    textAlign: 'left',
    // border: '3px solid red',
    [theme.breakpoints.down('md')]: {
      height: 100,
      lineHeight: '60px',
    },
    [theme.breakpoints.down('sm')]: {
      overflowY: 'scroll',
      // flexWrap: 'wrap',
      zIndex: 1,
    },
  },
  BgBoxNormalTtem: {
    width: '25%',
    position: 'relative',
    lineHeight: 1,
    padding: theme.spacing(2),
    borderRight: ' 2px solid #F5F5F5',
    [theme.breakpoints.down('sm')]: {
      borderRight: ' 0px solid #F5F5F5',
      width: '50%',
    },
  },
  BgBoxMiddleSmTtem: {
    width: '25%',
    position: 'relative',
    lineHeight: 1,
    padding: theme.spacing(2),
    borderRight: ' 2px solid #F5F5F5',

    [theme.breakpoints.down('sm')]: {
      width: '52%',
      borderRight: ' 0px solid #F5F5F5',
    },
  },
  BgBoxOnlyLastItem: {
    width: '25%',
    position: 'relative',
    lineHeight: 1,
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      borderRight: ' 0px solid #F5F5F5',
      width: '50%',
    },
  },
  buttonstyles: {
    paddingTop: 6,
    marginLeft: theme.spacing(0),
    [theme.breakpoints.down('md')]: {
      paddingTop: 0,
      marginLeft: theme.spacing(0),
    },
  },
  iconstlye: {
    width: '64px',
    height: '64px',
    position: 'absolute',
    right: 2,
    bottom: 0,
    opacity: 0.1,
    padding: 10,
    '&hover :': {
      width: '80px',
      height: '80px',
      overflow: 'hidden',
    },
  },
  waltxtstlye: {
    height: '22px',
    width: '140px',
    overflow: 'hidden',
  },
  whatare: {
    padding: theme.spacing(3),
    color: 'white',
    fontSize: '32px',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
      fontSize: '24px',
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
