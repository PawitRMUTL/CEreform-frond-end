/** @format */
import React from 'react';
import { Box } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import aboutData from '../../api/dummy/aboutData';
import useStyles from './GridsAbout-jss';

function ImageListabout() {
  const { classes } = useStyles();

  return (
    <Box className={classes.imageListRespontive}>
      <ImageList variant='woven' cols={2} gap={8}>
        {Object.values(aboutData).map((idx) => (
          <ImageListItem key={idx.id}>
            <img
              src={`${idx.imgPath}?w=
                164&h=164&fit=crop&auto=format`}
              srcSet={`${idx.imgPath}?w=
                164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={idx.imgPath}
              loading='lazy'
              style={{ borderRadius: 8 }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default ImageListabout;
