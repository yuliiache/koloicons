import {AUTH_TOKEN_HEADER_KEY} from '@kolo/constants/constants';
import axios from 'axios';

import {logger} from '../logger/logger';

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

http.interceptors.response.use(
  (response) => {
    /**
     * Add logic for successful response
     */

    return response;
  },
  (error) => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

    if (!expectedError) {
      logger('An unexpected error occured.');
    }

    return Promise.reject(error);
  }
);

const addJwtToHeader = (jwt) => {
  http.defaults.headers.common[AUTH_TOKEN_HEADER_KEY] = jwt;
};

const removeJwtFromHeader = () => {
  http.defaults.headers.common[AUTH_TOKEN_HEADER_KEY] = null;
};

export const httpService = {
  ...http,
  addJwtToHeader,
  removeJwtFromHeader,
};
