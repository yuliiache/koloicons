import {IconSize} from '@kolo/constants/constants';
import {httpService} from '@kolo/services/httpService/httpService';
import PropTypes from 'prop-types';

import {API_ENDPOINTS} from '../endpoints';

export const getPacks = ({
  pageSize = 1,
  currentPage = 1,
  monthPack = false,
  free = false,
  iconSize = IconSize.DETAILED,
}) =>
  httpService.get(API_ENDPOINTS.PACKS, {
    params: {free, iconSize, pageSize, currentPage, monthPack},
  });

getPacks.propTypes = {
  free: PropTypes.bool,
  iconSize: PropTypes.oneOf(Object.values(IconSize)),
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  monthPack: PropTypes.bool,
};
