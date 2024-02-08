import {IconSize, IconStyle} from '@kolo/constants/constants';
import {httpService} from '@kolo/services/httpService/httpService';
import {ApiEndpoint} from 'constants/ApiEndpoint';

import {getIcons} from '../getIcons';

jest.mock('@kolo/services/httpService/httpService', () => {
  return {
    httpService: {
      get: jest.fn(),
    },
  };
});

const defaultParams = {
  pageSize: '',
  currentPage: '',
  categoryId: '',
  searchQuery: '',
  isFree: '',
  iconSize: IconSize.DETAILED,
  iconStyle: IconStyle.LINE,
};

describe('getIcons', () => {
  it('should call httpService.get with the correct endpoint and params for getting all icons', async () => {
    await getIcons(defaultParams);

    expect(httpService.get).toHaveBeenCalledWith(ApiEndpoint.ICONS, {params: defaultParams});
  });

  it('should call httpService.get with the correct endpoint and params for getting icons by category id', async () => {
    const params = {
      ...defaultParams,
      categoryId: '5d45660c2412340016648231',
    };

    await getIcons(params);

    expect(httpService.get).toHaveBeenCalledWith(ApiEndpoint.ICONS, {params});
  });

  it('should call httpService.get with the correct endpoint and params for getting icons by query', async () => {
    const params = {
      ...defaultParams,
      pageSize: '1',
      currentPage: '1',
      searchQuery: 'world',
    };

    await getIcons(params);

    expect(httpService.get).toHaveBeenCalledWith(ApiEndpoint.ICONS, {params});
  });

  it('should call httpService.get with the correct endpoint and params for getting 24 free icons per page', async () => {
    const params = {
      ...defaultParams,
      pageSize: '1',
      currentPage: '1',
      isFree: 'true',
    };

    await getIcons(params);

    expect(httpService.get).toHaveBeenCalledWith(ApiEndpoint.ICONS, {params});
  });

  it('should return a successful response of the get request', async () => {
    const mockResponse = {
      data: {
        icons: [
          {
            isFree: 'true',
            categories: {
              name: '360 degrees',
              number: '28',
            },
            name: 'Image control',
            size: '60px',
            style: 'line',
            _id: '5d6a88c9ef38414cb068f181',
          },
        ],
        iconsLength: '1',
      },
    };

    httpService.get.mockResolvedValue(mockResponse);

    const response = await getIcons(defaultParams);

    expect(response).toEqual(mockResponse);
  });
});
