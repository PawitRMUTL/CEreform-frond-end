/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import useStyles from './cardStyle-jss';

function ProductCard(props) {
  const { classes } = useStyles();
  const {
    thumbnail,
    name,
    desc,
    date
  } = props;

  return (
    <Card sx={{ display: 'flex', width: '100%', padding: 5 }}>
      <Box sx={{ width: '50%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography
            noWrap
            gutterBottom
            variant='h5'
            className={classes.title}
            sx={{ overflowWrap: 'break-word' }}
            component='h2'>
            {name}
          </Typography>
          <Typography component='p' className={classes.desc}>
            {desc}
          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ width: '50%' }}>
        <CardMedia
          sx={{ height: 200, borderRadius: 3 }}
          image={thumbnail}
          title={name}
        />
        <Typography sx={{ textAlign: 'end' }}>{date}</Typography>
      </Box>
    </Card>
  );
}

ProductCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  date: PropTypes.string,
};

export default ProductCard;
