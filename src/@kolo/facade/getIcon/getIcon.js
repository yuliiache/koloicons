import {IconStyle} from '@kolo/constants/constants';
import {httpService} from '@kolo/services/httpService/httpService';
import {ApiEndpoint} from 'constants/ApiEndpoint';

const getIcon = ({iconId, withTags, iconStyle = IconStyle.LINE}) =>
  httpService.get(`${ApiEndpoint.ICONS}/${iconId}`, {
    params: {
      iconId,
      withTags,
      iconStyle,
    },
  });
export default getIcon;
