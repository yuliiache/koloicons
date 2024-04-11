import {IconStyle} from '@kolo/constants/constants';
import {httpService} from '@kolo/services/httpService/httpService';
import {ApiEndpoint} from 'constants/ApiEndpoint';

export const getIconFile = ({iconId, userId, format = 'png', pngSize, color}) =>
  httpService.get(`${ApiEndpoint.GET_ICONS_FILES}/${iconId}`, {
    params: {userId, format, pngSize, iconStyle: IconStyle.LINE, color},
    responseType: 'blob',
    timeout: 30000,
  });
