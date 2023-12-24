import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation, useNavigate} from 'react-router-dom';
import {CATEGORY_ID, URLS} from '@kolo/constants/constants';
import {addQueryParams} from '@kolo/services/helpers/urls';

import {getMonthPackStart} from './monthPackSlice';
import {monthPackSelector} from './selectors';

const useMonthPack = () => {
  const navigate = useNavigate();
  const {search} = useLocation();
  const monthPack = useSelector(monthPackSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMonthPackStart());
  }, [dispatch]);

  const handlePackItemClick = (categoryId) => {
    navigate({
      pathname: URLS.icons,
      search: addQueryParams(search, {
        [CATEGORY_ID]: categoryId,
      }),
    });
  };

  return {handlePackItemClick, monthPack};
};

export default useMonthPack;
