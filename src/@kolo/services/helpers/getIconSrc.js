import PropTypes from 'prop-types';

import {ICON_URL, IMG_SIZE, IMG_SIZE_WATERMARK, RETINA_RESOLUTION} from './constants';

export const getIconSrc = ({icon, categoryNumber, categoryName, isRetina, withWatermark}) => {
  const {name, style, size} = icon;

  // to prevent error like this:
  // GET https://storage.googleapis.com/koloicons/png//NaN-origin-size/96/1%20/.png 404
  if (!size || !categoryNumber || !categoryName || !name) {
    return '';
  }

  const originSize = parseInt(size, 10);
  const category = encodeURI(`${categoryNumber} ${categoryName}`);
  let retinaSize = isRetina ? IMG_SIZE * RETINA_RESOLUTION : IMG_SIZE;

  if (withWatermark) {
    retinaSize = isRetina ? IMG_SIZE_WATERMARK * RETINA_RESOLUTION : IMG_SIZE_WATERMARK;
  }

  const src = `${ICON_URL}/${style}/${originSize}-origin-size/${retinaSize}/${category}/${encodeURI(name)}.png`;

  return isRetina ? `${src} 2x` : src;
};

getIconSrc.propTypes = {
  icon: PropTypes.shape({
    name: PropTypes.string,
    style: PropTypes.string,
    size: PropTypes.string,
  }),
  categoryNumber: PropTypes.number,
  categoryName: PropTypes.string,
  isRetina: PropTypes.bool,
  withWatermark: PropTypes.bool,
};

getIconSrc.defaultProps = {
  isRetina: false,
};
