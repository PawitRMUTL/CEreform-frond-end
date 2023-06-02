/** @format */

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: '5%',
    paddingRight: '5%',
    fontFamily: 'Noto Sans Thai',
  },
  rootCounterFull: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    height: 190,
    marginBottom: 6,
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      height: 126,
      marginBottom: -1,
      alignItems: 'flex-end',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    '& > *': {
      padding: '0 5px',
    },
  },
  rootGeneral: {
    padding: theme.spacing(3),
  },
  divider: {
    margin: `${theme.spacing(1.5)} 0`,
    background: 'none',
  },
  sliderWrap: {
    position: 'relative',
    display: 'block',
    boxShadow: theme.shadows[1],
    width: '100%',
    borderRadius: theme.rounded.medium,
    overflow: 'hidden',
  },
  noPadding: {
    paddingTop: '0 !important',
    paddingBottom: '0 !important',
    [theme.breakpoints.up('sm')]: {
      padding: '0 !important',
    },
  },
  Image_width_screen: {
    width: '100%',
    borderStyle: 'solid',
  },
  mumu: {
    width: '100%',
    height: '100%',
    backgroundColor: 'greenyellow',
  },
  // TextProjectStyle: {
  //   textAlign: 'center',
  // },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
