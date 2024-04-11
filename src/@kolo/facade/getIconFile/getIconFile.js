import {httpService, ICON_STYLES} from '@kolo/services';
import {ApiEndpoint} from 'constants/ApiEndpoint';

export const getIconFile = ({iconId, userId, format = 'png', pngSize, color}) =>
  httpService.get(`${ApiEndpoint.GET_ICONS_FILES}/${iconId}`, {
    params: {userId, format, pngSize, iconStyle: ICON_STYLES.line, color},
    responseType: 'blob',
    timeout: 30000,
  });
