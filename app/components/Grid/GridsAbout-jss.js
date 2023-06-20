/** @format */

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  typing: {
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
    borderColor: '#FE6439',
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
    backgroundColor: '#FE6439',
    width: 130,
    height: 45,
    fontSize: '14px',
    transition: 'transform .3s',
    '&:hover': {
      backgroundColor: '#FE6439',
      transform: 'scale(1.1)',
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
      marginRight: 0,
    },
  },
  BgBox: {
    backgroundColor: '#FE6F41',
    height: 75,
    borderRadius: '10px 10px 0px 0px',
    width: 380,
    [theme.breakpoints.down('md')]: {
      height: 50,
    },
    [theme.breakpoints.down('sm')]: {
      width: 418,
    },
  },
  BgBoxItem: {
    borderRadius: '0px 10px 10px 10px',
    color: '#373737',
    backgroundColor: '#ffffff',
    height: 75,
    display: 'flex',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      lineHeight: '60px',
    },
    [theme.breakpoints.down('sm')]: {
      height: 100,
      flexWrap: 'wrap',
      borderRadius: '0px 0px 10px 10px',
      lineHeight: '50px',
    },
  },
  BgBoxOnlyLastItem: {
    [theme.breakpoints.down('sm')]: {
      borderRight: ' 0px solid #F5F5F5',
      width: '50%',
    },
  },
  BgBoxNormalTtem: {
    borderRight: ' 2px solid #F5F5F5',
    [theme.breakpoints.down('sm')]: {
      borderRight: ' 0px solid #F5F5F5',
      width: '50%',
    },
  },
  BgBoxMiddleSmTtem: {
    borderRight: ' 2px solid #F5F5F5',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },
  },
  buttonstyles: {
    paddingTop: 6,
    marginLeft: theme.spacing(16),
    [theme.breakpoints.down('md')]: {
      paddingTop: 0,
      marginLeft: theme.spacing(0),
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
