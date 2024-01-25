import {httpService} from '@kolo/services/httpService/httpService';
import {ApiEndpoint} from 'constants/ApiEndpoint';

import {getFeedbacks} from '../getFeedbacks';

import {mockedFeedbacks} from './mockedFeedbacks';

jest.mock('@kolo/services/httpService/httpService', () => {
  return {
    httpService: {
      get: jest.fn(),
    },
  };
});

describe('getFeedbacks', () => {
  it('should return feedbacks', async () => {
    const expectedResponse = {data: mockedFeedbacks};

    httpService.get.mockResolvedValue(expectedResponse);

    const result = await getFeedbacks();

    expect(result).toEqual(expectedResponse);
  });

  it('should call getFeedBacks with correct argument', async () => {
    await getFeedbacks();

    expect(httpService.get).toHaveBeenCalledWith(ApiEndpoint.FEEDBACKS);
  });
});
