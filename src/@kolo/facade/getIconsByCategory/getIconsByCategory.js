import {IconSize, IconStyle} from '@kolo/constants/constants';
import {httpService} from '@kolo/services/httpService/httpService';
import {ApiEndpoint} from 'constants/ApiEndpoint';
import PropTypes from 'prop-types';

const getIconsByCategory = ({
  iconStyle = IconStyle.LINE,
  iconSize = IconSize.DETAILED,
  categorySequenceNumber = 1,
  categoriesAmount = 1,
}) =>
  // : Props
  httpService.get(ApiEndpoint.GET_ICONS_BY_CATEGORY, {
    params: {iconStyle, iconSize, categorySequenceNumber, categoriesAmount},
  });

export default getIconsByCategory;

getIconsByCategory.PropTypes = {
  iconSize: PropTypes.oneOf(Object.values(IconSize)),
  iconStyle: PropTypes.oneOf(Object.values(IconStyle)),
  categorySequenceNumber: PropTypes.number,
  categoriesAmount: PropTypes.number,
};
