/** @format */

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    transition: 'ease-in-out 2s',
    marginTop: '-4%',
    fontFamily: 'Noto Sans Thai',
    [theme.breakpoints.down('md')]: {
      marginTop: '-14%',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '-10%',
    },
  },
  section: {
    height: '100 vh',
    margin: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1),
    },
    // border: '2px solid red',
  },
  sectionspce: {
    height: '100 vh',
    marginTop: theme.spacing(5),
    // border: '2px solid red',
  },
  stylesGrid: {
    marginTop: theme.spacing(5),
    // border: '4px solid red',
  },
  gotostudyplan: {
    marginTop: '2%',
    width: '100%',
    height: '460px',
    // border: '4px solid red',
    color: '#fff',
  },
  Carousel: {
    width: '100%',
    height: '600px',
    paddingLeft: '10%',
    paddingRight: '10%',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '1px',
      paddingRight: '1px',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1px',
      paddingRight: '1px',
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
