import {IconSize, IconStyle} from '@kolo/constants/constants';
import {httpService} from '@kolo/services/httpService/httpService';
import {ApiEndpoint} from 'constants/ApiEndpoint';
import PropTypes from 'prop-types';

export const getCategories = ({iconSize = IconSize.DETAILED, iconStyle = IconStyle.LINE}) =>
  httpService.get(ApiEndpoint.CATEGORIES, {
    params: {iconSize, iconStyle},
  });

getCategories.PropTypes = {
  iconSize: PropTypes.oneOf(Object.values(IconSize)),
  iconStyle: PropTypes.oneOf(Object.values(IconStyle)),
};
