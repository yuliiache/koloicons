import PropTypes from 'prop-types';

import {IMG_URL} from './constants';

export const getImageSrc = (path) => `${IMG_URL}/${path}`;

getImageSrc.propTypes = {
  path: PropTypes.string,
};
