import {CATEGORY_ID} from '@kolo/constants/constants';
import {addQueryParams} from '@kolo/services/helpers/urls';
import {ApiEndpoint} from 'constants/ApiEndpoint';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation, useNavigate} from 'react-router-dom';

import {getMonthPackStartAction} from './monthPackSlice';
import {monthPackSelector} from './selectors';

const useMonthPack = () => {
  const navigate = useNavigate();
  const {search} = useLocation();
  const monthPack = useSelector(monthPackSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMonthPackStartAction());
  }, [dispatch]);

  const handlePackItemClick = (categoryId: string): void => {
    navigate({
      pathname: ApiEndpoint.ICONS,
      search: addQueryParams(search, {
        [CATEGORY_ID]: categoryId,
      }),
    });
  };

  return {handlePackItemClick, monthPack};
};

export default useMonthPack;
