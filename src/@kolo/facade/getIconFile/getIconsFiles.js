import {httpService} from '@kolo/services';
import {ApiEndpoint} from 'constants/ApiEndpoint';

export const getIconsFiles = ({iconsList, userId, format = 'png', pngSize, color}) => {
  // TODO remove this logic from here
  // Do not pass category name
  const sanitizedIconsList = {
    line: {'60px': [], '48px': []},
    solid: {'60px': [], '48px': []},
  };

  iconsList.forEach((icon) => {
    // in order to reduce url length
    // TODO: try to send with post method in the body

    // eslint-disable-next-line no-underscore-dangle
    sanitizedIconsList[icon.style][icon.size].push(icon._id);
  });

  return httpService.get(ApiEndpoint.GET_ICONS_FILES, {
    params: {
      format,
      userId,
      pngSize,
      color,
      iconsList: JSON.stringify(sanitizedIconsList),
    },
    responseType: 'blob',
    timeout: 120000,
  });
};
