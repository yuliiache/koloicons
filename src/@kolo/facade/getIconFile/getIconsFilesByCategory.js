import {httpService, ICON_SIZES,ICON_STYLES} from '@kolo/services';

export const getIconsFilesByCategory = ({categoryId, userId}) =>
  httpService.get(`/downloads/download-icons-by-category`, {
    params: {categoryId, userId, iconStyle: ICON_STYLES.line, iconSize: ICON_SIZES.detailed},
    responseType: 'blob',
    timeout: 30000,
  });
