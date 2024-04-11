import {IconSize, IconStyle} from '@kolo/constants/constants';
import {httpService} from '@kolo/services/httpService/httpService';
import {ApiEndpoint} from 'constants/ApiEndpoint';

export const getIconsFilesByCategory = ({categoryId, userId}) =>
  httpService.get(ApiEndpoint.GET_ICONS_FILES_BY_CATEGORY, {
    params: {categoryId, userId, iconStyle: IconStyle.LINE, iconSize: IconSize.DETAILED},
    responseType: 'blob',
    timeout: 30000,
  });
