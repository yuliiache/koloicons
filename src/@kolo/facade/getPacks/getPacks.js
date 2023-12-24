import {ICON_SIZES} from '@kolo/constants/constants';
import {httpService} from '@kolo/services/httpService/httpService';
import PropTypes from 'prop-types';

import {API_ENDPOINTS} from '../endpoints';

export const getPacks = ({
  free = false,
  iconSize = ICON_SIZES.detailed,
  pageSize = 1,
  currentPage = 1,
  monthPack = false,
}) =>
  httpService.get(API_ENDPOINTS.PACKS, {
    params: {free, iconSize, pageSize, currentPage, monthPack},
  });

getPacks.propTypes = {
  free: PropTypes.bool,
  iconSize: PropTypes.string,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  monthPack: PropTypes.bool,
};
