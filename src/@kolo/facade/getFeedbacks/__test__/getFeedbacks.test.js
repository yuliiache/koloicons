import {API_ENDPOINTS} from '@kolo/facade/endpoints';
import {httpService} from '@kolo/services/httpService/httpService';

import {getFeedbacks} from '../getFeedbacks';

import {mockedFeddbacks} from './mockedFeddbacks';

jest.mock('@kolo/services/httpService/httpService', () => {
  return {
    httpService: {
      get: jest.fn(),
    },
  };
});

describe('getFeedbacks', () => {
  it('should return feedbacks', async () => {
    const expectedResponse = {data: mockedFeddbacks};

    httpService.get.mockResolvedValue(expectedResponse);

    const result = await getFeedbacks();

    expect(result).toEqual(expectedResponse);
  });

  it('should call getFeedBacks with correct argument', async () => {
    await getFeedbacks();

    expect(httpService.get).toHaveBeenCalledWith(API_ENDPOINTS.FEEDBACKS);
  });
});
