import {getJwt, httpService, logger} from '@kolo/services';
import jwtDecode from 'jwt-decode';

export const login = async ({email, password}) => await httpService.post('/auth', {email, password});

export const getCurrentUser = () => {
  try {
    return jwtDecode(getJwt());
  } catch (error) {
    logger(error);
  }
};
