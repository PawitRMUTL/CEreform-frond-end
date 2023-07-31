/** @format */

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  card: {
    maxWidth: 375,
    height: 450,
  },
  boxlayouttxt: {
    padding: '0px 25px 0px 25px',
    height: '44%',
    overflow: 'hidden',
  },
  imgstytes: {
    Width: 600,
    maxheight: 260,
  },
  textlable: {
    textAlign: 'left',
    lineHeight: '20px',
    width: '100%',
    height: '82px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'normal',
  },
  textdate: {
    textAlign: 'left',
    fontSize: '12px',
    marginLeft: '1px',
  },
  texttitle: {
    // padding: 10,
    fontSize: '18px',
    fontWeight: 500,
    textAlign: 'left',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  divider: {
    border: '1px',
  },
  buttonlayout: {
    color: '#FE6F41',
    background:
      'linear-gradient(white, white) padding-box, linear-gradient(to right, #FE6F41, #F8BA1C) border-box',
    borderRadius: '50em',
    border: '1px solid transparent',
    '&:hover': {
      background: 'linear-gradient(#FE6F41, #F8BA1C)',
      color: '#FFF',
      border: 'none',
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
  thumbnail: {
    width: 800,
    maxHeight: 200,
    display: 'flex',
    flexGrow: 2,
    [theme.breakpoints.down('md')]: {
      overflowX: 'scroll',
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
