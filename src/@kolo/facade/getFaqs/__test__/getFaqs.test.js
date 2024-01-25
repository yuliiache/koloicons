import {httpService} from '@kolo/services/httpService/httpService';
import {ApiEndpoint} from 'constants/ApiEndpoint';

import getFaqs from '../getFaqs';

jest.mock('@kolo/services/httpService/httpService');

describe('getFaqs', () => {
  it('should make a GET request to the FAQs endpoint', async () => {
    const expectedEndpoint = ApiEndpoint.FAQS;
    await getFaqs();
    expect(httpService.get).toHaveBeenCalledWith(expectedEndpoint);
  });
});
