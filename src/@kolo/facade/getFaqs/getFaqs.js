import {httpService} from '@kolo/services/httpService/httpService';
import {ApiEndpoint} from 'constants/ApiEndpoint';

const getFaqs = () => httpService.get(ApiEndpoint.FAQS);

export default getFaqs;
