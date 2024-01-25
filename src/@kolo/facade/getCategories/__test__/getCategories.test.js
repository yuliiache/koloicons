import {IconSize, IconStyle} from '@kolo/constants/constants';
import {API_ENDPOINTS} from '@kolo/facade/endpoints';
import {httpService} from '@kolo/services/httpService/httpService';

import {getCategories} from '../getCategories';

jest.mock('@kolo/services/httpService/httpService', () => {
  return {
    httpService: {
      get: jest.fn(),
    },
  };
});

describe('getCategories', () => {
  const params = {iconSize: IconSize.DETAILED, iconStyle: IconStyle.LINE};

  it('should call httpService.get with the correct endpoint and params', async () => {
    await getCategories(params);

    expect(httpService.get).toHaveBeenCalledWith(API_ENDPOINTS.CATEGORIES, {params});
  });

  it('should return a successful response of the get request', async () => {
    const mockResponse = {
      data: {
        iconsAmount: {size48: 40, size60: 20},
        name: '360 degrees',
        styles: ['solid', 'line'],
        _id: '5d45660c2412340016648231',
      },
    };

    httpService.get.mockResolvedValue(mockResponse);

    const response = await getCategories(params);

    expect(response).toEqual(mockResponse);
  });
});
