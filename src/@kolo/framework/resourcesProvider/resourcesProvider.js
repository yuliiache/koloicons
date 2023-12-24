import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {httpService} from '@kolo/services/httpService/httpService';
import {getJwt} from '@kolo/services/jwtService/jwtService';

import {refreshJWT} from './actions';

export const ResourcesProvider = ({children}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getJwt();
    token && httpService.addJwtToHeader(token);

    if (token) dispatch(refreshJWT());
  });

  return children;
};
