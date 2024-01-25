import {httpService} from '@kolo/services/httpService/httpService';
import {ApiEndpoint} from 'constants/ApiEndpoint';
import PropTypes from 'prop-types';

const getPricing = (params) =>
  httpService.get(ApiEndpoint.PRICING, {
    params: params,
  });

getPricing.propTypes = {
  billingInterval: PropTypes.oneOf(['month', 'year']),
};

export default getPricing;
