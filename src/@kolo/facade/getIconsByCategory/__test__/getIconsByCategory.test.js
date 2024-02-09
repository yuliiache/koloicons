import {IconSize, IconStyle} from '@kolo/constants/constants';
import {httpService} from '@kolo/services/httpService/httpService';
import {ApiEndpoint} from 'constants/ApiEndpoint';

import getIconsByCategory from '../getIconsByCategory';

jest.mock('@kolo/services/httpService/httpService', () => {
  return {
    httpService: {
      get: jest.fn(),
    },
  };
});

describe('getIconsByCategory', () => {
  const params = {
    iconStyle: IconStyle.LINE,
    iconSize: IconSize.DETAILED,
    categorySequenceNumber: 1,
    categoriesAmount: 1,
  };
  it('calls httpService.get with correct endpoint and params', async () => {
    await getIconsByCategory(params);

    expect(httpService.get).toHaveBeenCalledWith(ApiEndpoint.GET_ICONS_BY_CATEGORY, {params});
  });
  it('returns a successful response of the get request', async () => {
    const mockResponse = {
      data: {
        category: {name: 'Financial', number: 7},
        name: 'Mobile payment',
        size: '60px',
        style: 'line',
        _id: '5d6a87bdef38414cb068e989',
      },
    };
    httpService.get.mockResolvedValue(mockResponse);

    const response = await getIconsByCategory(params);

    expect(response).toEqual(mockResponse);
  });
});
