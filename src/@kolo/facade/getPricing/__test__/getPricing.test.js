import {BillingInterval} from '@kolo/constants/constants';
import {httpService} from '@kolo/services/httpService/httpService';
import {ApiEndpoint} from 'constants/ApiEndpoint';

import getPricing from '../getPricing';

jest.mock('@kolo/services/httpService/httpService', () => {
  return {
    httpService: {
      get: jest.fn(),
    },
  };
});
describe('getPricing', () => {
  it('calls httpService.get with the correct endpoint and params', () => {
    const params = {billingInterval: BillingInterval.MONTH};
    getPricing(params);
    expect(httpService.get).toHaveBeenCalledWith(ApiEndpoint.PRICING, {params});
  });
  it('returns a successful response of the get request', async () => {
    const mockResponse = {data: {price: 10}};
    const mockParams = {billingInterval: BillingInterval.MONTH};

    httpService.get.mockResolvedValue(mockResponse);

    const response = await getPricing(mockParams);

    expect(httpService.get).toHaveBeenCalledWith(expect.any(String), {
      params: mockParams,
    });
    expect(response).toEqual(mockResponse);
  });
});
