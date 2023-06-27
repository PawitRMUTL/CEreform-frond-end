/** @format */

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    height: '100%',
    flexDirection: 'column',
    gap: 2,
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    [theme.breakpoints.down('md')]: {
      overflowX: 'scroll',
      whiteSpace: 'nowrap',
      flexDirection: 'none',
      padding: theme.spacing(2.5),
    },
  },
  showcard: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
      display: 'inline-flex',
      gap: '2rem',
      justifyContent: 'flex-start',
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
