import {httpService} from '@kolo/services/httpService/httpService';
import {getJwt} from '@kolo/services/jwtService/jwtService';
import {logger} from '@kolo/services/logger/logger';
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
