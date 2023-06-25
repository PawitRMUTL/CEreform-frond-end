/** @format */

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    marginTop: '-11%',
    fontFamily: 'Noto Sans Thai',
    [theme.breakpoints.down('md')]: {
      marginTop: '-14%',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '-25%',
    },
  },
  section: {
    height: '100 vh',
    marginTop: 30,
    // paddingLeft: '1%',
    // paddingRight: '1%',
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
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
