import {httpService} from '@kolo/services/httpService/httpService';

import {API_ENDPOINTS} from '../endpoints';

const getFaqs = () => httpService.get(API_ENDPOINTS.FAQS);

export default getFaqs;
