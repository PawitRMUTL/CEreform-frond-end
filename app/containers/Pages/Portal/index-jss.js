/** @format */

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  root: {
    marginTop: '-11%',
    fontFamily: 'Noto Sans Thai',
  },
  section: {
    border: '4px solid red',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
