import { makeStyles } from 'tss-react/mui';
// import { darken } from '@mui/material/styles';
import bg from 'dan-images/petal_bg.svg';

export const gradientBgLight = () => 'linear-gradient(270deg, #478c9b, #dfdfdf, #ff980a)';
export const gradientBgDark = (theme) => `linear-gradient(-45deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 33%, ${theme.palette.secondary.main} 100%);`;

const appFrame = {
  display: 'flex',
  width: '100%',
  minHeight: '100%',
  zIndex: 1,
};

const useStyles = makeStyles()((theme, _params, classes) => ({
  root: {
    width: '100%',
    marginTop: 0,
    zIndex: 1,
    overflow: 'auto',
  },
  blogWrap: {
    color: theme.palette.text.primary,
    position: 'relative',
  },
  appFrameInner: {
    color: theme.palette.text.primary,
    ...appFrame,
  },
  appFrameOuter: {
    color: theme.palette.text.primary,
    ...appFrame,
  },
  appFrameLanding: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    minHeight: 1000,
  },
  appFrameSlider: {
    display: 'flex',
    width: '100%',
    height: '100%',
    color: theme.palette.text.primary,
    [theme.breakpoints.up('lg')]: {
      position: 'absolute',
      overflow: 'hidden',
    },
    // backgroundColor: '#fff',
    backgroundColor: theme.palette.background.default,
  },
  topNav: {
    flexDirection: 'column',
  },
  sideNav: {
    flexDirection: 'row',
  },
  content: {
    width: '100%',
    minHeight: '100%',
    overflow: 'hidden',
  },
  petal: {
    background: `url(${bg}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '100%',
    position: 'fixed',
  },
  outerContent: {
    width: '100%',
    backgroundSize: 'cover',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgWrap: {
    position: 'fixed',
    background: theme.palette.background.default,
    // background: '#fff'
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  headerBg: {},
  halfBg: {},
  fullBg: {},
  bgbar: {
    backgroundAttachment: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    position: 'absolute',
    [`&.${classes.headerBg}`]: {
      height: 64,
    },
    [`&.${classes.halfBg}`]: {
      height: 400,
    },
    [`&.${classes.fullBg}`]: {
      height: '100%',
    },
  },
  gradientBg: {
    backgroundImage: theme.palette.mode === 'dark' ? gradientBgLight(theme) : gradientBgLight(theme),
    backgroundAttachment: 'fixed',
  },
  solidBg: {
    background: 'linear-gradient(270deg, #478c9b, #dfdfdf, #ff980a)',
    animation: 'gradient 40s ease-in-out infinite',
    backgroundSize: '200% 200%',
    height: '100vh',
    '@keyframes gradient': {
      '0%': {
        backgroundPosition: '0% 50%',
      },
      '50%': {
        backgroundPosition: '100% 50%',
      },
      '100%': {
        backgroundPosition: '0% 50%',
      },
    },
  },
  decorationWave: {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    left: -2,
    bottom: -32,
    transform: 'scale(1.1,0.8)',
    transformOrigin: 'bottom',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  decorationPetal: {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  sidebarLayout: {},
  topbarLayout: {},
  mainWrap: {
    height: '100%',
    position: 'relative',
    '& > div': {
      willChange: 'inherit !important', // hack for floating form issue when expaded
    },
    [`&.${classes.sidebarLayout}`]: {
      paddingTop: theme.spacing(8),
    },
    [`&.${classes.topbarLayout}`]: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
  },
  preloader: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    background: 'transparent',
    height: 3,
  },
  materialBg: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    opacity: 0.5,
  },
  contentPaddingLeft: {
    paddingLeft: theme.spacing(10),
  },
  contentPaddingLeftBig: {
    paddingLeft: theme.spacing(2),
  },
  contentPaddingRight: {
    paddingRight: theme.spacing(10),
  },
  hideApp: {
    display: 'none',
  },
  circularProgress: {
    position: 'fixed',
    top: 'calc(50% - 45px)',
    left: 'calc(50% - 45px)',
  },
  brand: {
    height: 54,
    display: 'flex',
    padding: '10px 10px 5px',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
      width: 20,
    },
    '& h3': {
      margin: 0,
      fontSize: 16,
      fontWeight: 500,
      paddingLeft: 10,
      color: theme.palette.common.white,
    },
  },
  light: {},
  pageTitle: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    '& h4': {
      fontWeight: 700,
      textTransform: 'capitalize',
      [theme.breakpoints.down('lg')]: {
        marginBottom: theme.spacing(3),
      },
    },
  },
  darkTitle: {
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.primary.main
        : theme.palette.primary.dark,
  },
  lightTitle: {
    color: theme.palette.common.white,
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
