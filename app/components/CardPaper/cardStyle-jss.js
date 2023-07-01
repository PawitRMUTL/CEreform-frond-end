/** @format */

import { makeStyles } from 'tss-react/mui';
import { alpha, darken } from '@mui/material/styles';
import roundedThumbLight from 'dan-images/decoration/roundedThumbLight.png';
import roundedThumbDark from 'dan-images/decoration/roundedThumbDark.png';

const useStyles = makeStyles()((theme, _params, classes) => ({
  subtitleplan: {
    textAlign: 'center',
    fontSize: '18px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
  card: {
    minWidth: 275,
    minHeight: 100,
  },
  mediaProduct: {
    height: 1,
    paddingTop: '60.25%', // 16:9
  },
  cardMedia: {
    position: 'relative',
    marginBottom: theme.spacing(3),
  },
  gutterBottom: {
    marginBottom: theme.spacing(3),
  },
  landscapeCard: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  desc: {
    height: 45,
    overflow: 'hidden',
  },
  chipDiscount: {
    background: theme.palette.primary.light,
    color: theme.palette.primary.dark,
  },
  contentProfile: {
    flex: '1 0 auto',
    textAlign: 'center',
    marginTop: -70,
  },
  mediaProfile: {
    height: 0,
    paddingTop: '66.25%',
    borderRadius: '50%',
    width: '120%',
    left: '-10%',
    position: 'relative',
    top: -70,
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    boxShadow: theme.shadows[7],
  },
  avatarBig: {
    width: 80,
    height: 80,
    margin: '-56px auto 10px',
    background: theme.palette.secondary.dark,
    boxShadow: theme.shadows[7],
  },
  name: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonProfile: {
    margin: 20,
  },
  bottomLink: {
    width: '100%',
  },
  price: {
    padding: `${theme.spacing(1)} ${theme.spacing(2)} ${theme.spacing(3)}`,
  },
  verified: {
    fontSize: 16,
    color: theme.palette.primary.main,
  },
  cardList: {
    display: 'flex',
    justifyContent: 'space-between',
    [`& .${classes.buttonAddList}`]: {
      display: 'inline-block',
    },
    [`& .${classes.floatingButtonWrap}`]: {
      flex: 1,
    },
    [`& .${classes.buttonAdd}`]: {
      display: 'none',
    },
    [`& .${classes.status}`]: {
      right: 'auto',
      left: 0,
    },
    [`& .${classes.mediaProduct}`]: {
      width: 300,
      paddingTop: '21.25%',
    },
    [`& .${classes.price}`]: {
      flexDirection: 'column',
      justifyContent: 'center',
      '& button': {
        marginTop: 20,
      },
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    position: 'relative',
  },
  playBtn: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 64,
    height: 64,
    transform: 'translate(-50%, -50%)',
    '& svg': {
      color: theme.palette.common.white,
      fontSize: 64,
    },
  },
  newsList: {
    display: 'flex',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  newsListContent: {
    padding: theme.spacing(2),
    flex: 1,
    overflow: 'hidden',
  },
  mediaNews: {
    [theme.breakpoints.up('sm')]: {
      width: 150,
    },
    height: 150,
  },
  extraRounded: {},
  roundedMedia: {
    height: 0,
    paddingTop: '86.25%',
    borderRadius: '50%',
    width: '120%',
    left: '-10%',
    position: 'relative',
    top: -70,
    backgroundPosition: '45% 60px',
    backgroundSize: '85%',
    marginBottom: -70,
    [`&.${classes.extraRounded}`]: {
      left: '-30%',
      width: '160%',
      top: -100,
      marginBottom: -100,
      [theme.breakpoints.up('sm')]: {
        top: -200,
        marginBottom: -200,
      },
    },
  },
  roundedThumb: {
    position: 'relative',
    paddingTop: '50%',
    backgroundPosition: 'center',
    [theme.breakpoints.up('sm')]: {
      width: '70%',
      '&:after': {
        content: '""',
        right: -1,
        top: 0,
        position: 'absolute',
        backgroundSize: '100% 100%',
        height: '100%',
        width: 40,
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'transparent',
        backgroundImage:
          theme.palette.mode === 'dark'
            ? `url(${roundedThumbDark})`
            : `url(${roundedThumbLight})`,
      },
    },
  },
  priceHead: {
    height: 300,
    position: 'relative',
    borderRadius: '50%',
    width: '150%',
    left: '-25%',
    paddingTop: 120,
    marginBottom: -60,
    top: -70,
    textAlign: 'center',
    background: alpha(theme.palette.common.white, 0.3),
    color: theme.palette.common.white,
    '& h5': {
      color: theme.palette.common.white,
    },
    '& h4': {
      textShadow: '0 0 22px #a0a0a0',
      fontWeight: 'bold',
      color: theme.palette.common.white,
      marginTop: theme.spacing(3),
    },
  },
  featureList: {
    padding: 0,
    textAlign: 'center',
    color: theme.palette.common.white,
    '& li': {
      lineHeight: '32px',
    },
  },
  lightButton: {
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,
  },
  free: {
    background: theme.palette.secondary.main,
  },
  cheap: {
    background: theme.palette.primary.main,
  },
  expensive: {
    background: darken(theme.palette.primary.dark, 0.2),
  },
  moreExpensive: {
    background: darken(theme.palette.secondary.dark, 0.7),
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    overflow: 'hidden',
  },
  mainFeaturedPostContent: {
    padding: theme.spacing(2),
    minHeight: 200,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      display: 'flex',
    },
  },
  imageFull: {
    position: 'relative',
    width: '100%',
    '&:hover': {
      zIndex: 1,
      [`& .${classes.imageBackdrop}`]: {
        opacity: 0.15,
      },
    },
  },
  imageButton: {
    zIndex: 1,
    position: 'relative',
    top: 0,
    bottom: 0,
    color: theme.palette.common.white,
    whiteSpace: 'normal',
    textAlign: 'left',
    [theme.breakpoints.down('lg')]: {
      '& h1': {
        fontSize: 32,
        lineHeight: '42px',
      },
      '& p': {
        fontSize: 16,
      },
    },
    [theme.breakpoints.only('sm')]: {
      '& h1': {
        width: '60%',
      },
    },
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  calenderCard: {
    display: 'flex',
    width: 400,
    margin: 3,
  },
  calenderText: {
    textalign: 'justify',
    wordBreak: 'break-word',
    padding: 10,
    marginTop: 20,
  },
  bannerRoot: {
    position: 'relative',
    textAlign: 'left',
  },
  TopleftText: {
    position: 'absolute',
    top: '50%',
    left: '30%',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  },
  ButtonRightWhatislooking: {
    position: 'absolute',
    top: '750px',
    // top: '450px',
    right: 0,
    height: 150,
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '80px',
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      top: '700px',
      right: 0,
      // transform: 'translate(-50%, -50%)',
    },
  },
  BgBox: {
    backgroundColor: '#FE6F41',
    height: 75,
  },
  BgBoxItem: {
    color: '#373737',
    backgroundColor: '#ffffff',
    height: 75,
    display: 'flex',
    textAlign: 'center',
  },
  // studyplan
  rootsplan: {
    // width: '100%',
    //   border: '5px solid red',
    display: 'flex',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-around',
    gap: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      gap: theme.spacing(8),
    },
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      gap: theme.spacing(5),
    },
  },
  styletxt: {
    // border: '3px solid red',
    justifyContent: 'center', // Horizontally center the content
    alignItems: 'center', // Vertically center the content
    wordBreak: 'break-word',
  },
  setborder: {
    width: '400px',
    padding: theme.spacing(4),
    backgroundColor: '#FFF',
    borderRadius: '30px',
    border: '2px solid #FE6F41',
    position: 'relative',
  },
  setlightborder: {
    // borderRadius: '30px',
    width: 54,
    height: 1,
    borderTop: '2px solid #FFF',
    position: 'absolute',
    top: -2,
    left: 34,
    // bottom: 0,
  },
  imgstyles: {
    width: '60px',
    position: 'absolute',
    top: -34,
    padding: 8,
    filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0,0.5))',
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
