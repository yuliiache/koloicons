import {IconSize, IconStyle} from '@kolo/constants/constants';
import {httpService} from '@kolo/services/httpService/httpService';
import PropTypes from 'prop-types';

import {API_ENDPOINTS} from '../endpoints';

export const getCategories = ({iconSize = IconSize.DETAILED, iconStyle = IconStyle.LINE}) =>
  httpService.get(API_ENDPOINTS.CATEGORIES, {
    params: {iconSize, iconStyle},
  });

getCategories.PropTypes = {
  iconSize: PropTypes.oneOf(Object.values(IconSize)),
  iconStyle: PropTypes.oneOf(Object.values(IconStyle)),
};
