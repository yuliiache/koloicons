import {TOKEN_KEY} from './constants';

export const getJwt = () => localStorage.getItem(TOKEN_KEY);
export const writeJwt = (jwt) => localStorage.setItem(TOKEN_KEY, jwt);
export const removeJwt = () => localStorage.removeItem(TOKEN_KEY);
