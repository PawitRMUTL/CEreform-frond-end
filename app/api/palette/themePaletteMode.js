/** @format */

import lightPalette from './lightPalette';

const themePalette = (color, mode) => {
  if (mode === 'light') {
    return lightPalette[color];
  }
  return lightPalette[color];
};

export default themePalette;
