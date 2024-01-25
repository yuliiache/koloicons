import {getJwt, httpService, logger} from '@kolo/services';
import {ApiEndpoint} from 'constants/ApiEndpoint';
import jwtDecode from 'jwt-decode';

export const login = async ({email, password}) => await httpService.post(ApiEndpoint.AUTH, {email, password});

export const getCurrentUser = () => {
  try {
    return jwtDecode(getJwt());
  } catch (error) {
    logger(error);
  }
};
