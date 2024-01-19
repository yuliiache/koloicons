import {httpService} from '@kolo/services/httpService/httpService';

import {API_ENDPOINTS} from '../../endpoints';
import getFaqs from '../getFaqs';

jest.mock('@kolo/services/httpService/httpService');

describe('getFaqs', () => {
  it('should make a GET request to the FAQs endpoint', async () => {
    const expectedEndpoint = API_ENDPOINTS.FAQS;
    await getFaqs();
    expect(httpService.get).toHaveBeenCalledWith(expectedEndpoint);
  });
});
