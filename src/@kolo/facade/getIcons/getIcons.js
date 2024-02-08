import {IconSize, IconStyle} from '@kolo/constants/constants';
import {httpService} from '@kolo/services/httpService/httpService';
import {ApiEndpoint} from 'constants/ApiEndpoint';
import {PropTypes} from 'prop-types';

export const getIcons = ({
  currentPage,
  pageSize,
  categoryId,
  searchQuery,
  isFree = '',
  iconSize = IconSize.DETAILED,
  iconStyle = IconStyle.LINE,
}) =>
  httpService.get(ApiEndpoint.ICONS, {
    params: {
      currentPage,
      pageSize,
      categoryId,
      searchQuery,
      isFree,
      iconSize,
      iconStyle,
    },
  });

getIcons.propTypes = {
  currentPage: PropTypes.string,
  pageSize: PropTypes.string,
  categoryId: PropTypes.string,
  searchQuery: PropTypes.string,
  isFree: PropTypes.string,
  iconSize: PropTypes.oneOf(Object.values(IconSize)),
  iconStyle: PropTypes.oneOf(Object.values(IconStyle)),
};
