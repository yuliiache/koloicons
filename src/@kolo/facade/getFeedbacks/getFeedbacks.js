import {httpService} from '@kolo/services/httpService/httpService';

import {API_ENDPOINTS} from '../endpoints';

export const getFeedbacks = () => httpService.get(API_ENDPOINTS.FEEDBACKS);
