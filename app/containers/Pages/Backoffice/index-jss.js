/** @format */

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  Layout: {
    width: '100%',
    marginTop: '-1%',
    height: '255px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },
  LayoutShowContent: {
    textAlign: 'left',
    width: '800px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    maxHeight: '500px',
    // height: '400px',
  },
  BanerContent: {
    marginTop: '1%',
    height: '50px',
    textAlign: 'center',
    padding: '10px',
  },
  buttonlayout: {
    marginRight: '1%',
    color: '#FE6F41',
    background:
      'linear-gradient(white, white) padding-box, linear-gradient(to right, #FE6F41, #F8BA1C) border-box',
    borderRadius: '50em',
    border: '1px solid transparent',
    '&:hover': {
      background: 'linear-gradient(#FE6F41, #F8BA1C)',
      color: '#FFF',
      // border: 'none',
      animation: 'pulse 1s infinite',
    },
    '@keyframes pulse': {
      '0%': {
        transform: 'scale(1)',
      },
      '50%': {
        transform: 'scale(1.05)',
      },
      '100%': {
        transform: 'scale(1)',
      },
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
