import {httpService, ICON_STYLES} from '@kolo/services';

export const getIconFile = ({iconId, userId, format = 'png', pngSize, color}) =>
  httpService.get(`/downloads/${iconId}`, {
    params: {userId, format, pngSize, iconStyle: ICON_STYLES.line, color},
    responseType: 'blob',
    timeout: 30000,
  });
