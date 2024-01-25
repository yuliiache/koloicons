import {httpService} from '@kolo/services/httpService/httpService';
import {ApiEndpoint} from 'constants/ApiEndpoint';

export const getFeedbacks = () => httpService.get(ApiEndpoint.FEEDBACKS);
