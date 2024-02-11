import {IconStyle} from '@kolo/constants/constants';
import {httpService} from '@kolo/services/httpService/httpService';
import {ApiEndpoint} from 'constants/ApiEndpoint';

import getIcon from '../getIcon';

jest.mock('@kolo/services/httpService/httpService', () => {
  return {
    httpService: {
      get: jest.fn(),
    },
  };
});

const ICON_ID = '5d6a87bdef38414cb068e989';

const commonParams = {
  iconId: ICON_ID,
  withTags: 'withTags',
  iconStyle: IconStyle.LINE,
};

const mockResponse = {
  data: {
    name: 'Mobile payment',
    category: {
      name: 'Financial',
      number: 7,
      _id: '5d45660c241234001664820c',
    },
    size: '60px',
    style: 'line',
    _id: ICON_ID,
  },
};

describe('getIcon facade', () => {
  it('should call httpService.get with the correct endpoint and params for getting icon', async () => {
    await getIcon(commonParams);
    expect(httpService.get).toHaveBeenCalledWith(`${ApiEndpoint.ICONS}/${commonParams.iconId}`, {params: commonParams});
  });

  it('should return a successful response of the get request without tags', async () => {
    httpService.get.mockResolvedValue(mockResponse);

    const response = await getIcon({...commonParams, withTags: ''});

    expect(response).toEqual(mockResponse);
  });
});
