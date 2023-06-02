/** @format */

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  imageCard: {
    objectFit: 'cover',
    height: 400,
    backgroundImage:
      'url(https://images.pexels.com/photos/3943719/pexels-photo-3943719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
    textAlign: 'center',
  },
  card: {
    width: '200px',
    height: '350px',
    backgroundImage:
      'url(https://images.pexels.com/photos/7046975/pexels-photo-7046975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    objectFit: 'cover',
    margin: 'auto',
    position: 'relative',
    overflow: 'hidden',
    zIndex: '1',
  },
  fon: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'hsla(000,000%,10%,0.3)',
    zIndex: '2',
    transition: 'opacity 200ms',
  },
  Add: {
    borderRadius: 20,
    position: 'absolute',
    bottom: -200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#FFFFFF',
    height: '60%',
    width: '100%',
    textAlign: 'center',
    padding: '40px 0 0',
    zIndex: 4,
    transition: 'bottom 0.22s',
    '&:hover': {
      bottom: 0,
      borderRadius: '20px 20px 0px 0px',
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
