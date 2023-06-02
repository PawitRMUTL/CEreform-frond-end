import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useStyles from './cardStyle-jss';

function VideoCard(props) {
  const { classes } = useStyles();
  const {
    title,
    cover,
    date
  } = props;

  return (
    <Card className={classes.cardSocmed}>
      <CardMedia
        className={classes.media}
        image={cover}
        title={title}
      >
        <IconButton className={classes.playBtn} size="large"><PlayArrowIcon /></IconButton>
      </CardMedia>
      <CardHeader
        avatar={(
          <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
        )}
        action={(
          <IconButton size="large">
            <MoreVertIcon />
          </IconButton>
        )}
        title={title}
        subheader={date}
      />
    </Card>
  );
}

VideoCard.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default VideoCard;
