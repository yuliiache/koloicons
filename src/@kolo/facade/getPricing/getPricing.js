import {httpService} from '@kolo/services/httpService/httpService';
import PropTypes from 'prop-types';

import {API_ENDPOINTS} from '../endpoints';

const getPricing = (params) =>
  httpService.get(API_ENDPOINTS.PRICING, {
    params: params,
  });

getPricing.propTypes = {
  billingInterval: PropTypes.oneOf(['month', 'year']),
};

export default getPricing;
