import {httpService, ICON_SIZES, ICON_STYLES} from '@kolo/services';
import {ApiEndpoint} from 'constants/ApiEndpoint';

export const getIconsFilesByCategory = ({categoryId, userId}) =>
  httpService.get(ApiEndpoint.GET_ICONS_FILES_BY_CATEGORY, {
    params: {categoryId, userId, iconStyle: ICON_STYLES.line, iconSize: ICON_SIZES.detailed},
    responseType: 'blob',
    timeout: 30000,
  });
