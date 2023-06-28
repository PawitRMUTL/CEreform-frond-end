/** @format */

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  card: {
    maxWidth: 375,
    height: 450,
    margin: 'auto',
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
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
