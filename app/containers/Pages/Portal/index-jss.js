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
    border: '4px solid red',
    height: '100 vh',
    marginTop: 30,
    // paddingLeft: '5%',
    // paddingRight: '5%',
    // border: '2px solid red',
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
