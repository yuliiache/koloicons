import {SEARCH_QUERY} from '@kolo/constants/constants';
import {AppRoute} from 'constants/AppRoute';
import {useLocation, useNavigate} from 'react-router';

import {addQueryParams} from '../helpers/urls';

interface NavigateOnSearchHookReturn {
  onSearch: (value: string) => void;
}

const useNavigateOnSearch = (page: AppRoute): NavigateOnSearchHookReturn => {
  const navigate = useNavigate();
  const {search} = useLocation();

  const onSearch: (value: string) => void = (value) => {
    navigate({
      pathname: page,
      search: addQueryParams(search, {
        [SEARCH_QUERY]: value,
      }),
    });
  };

  return {onSearch};
};

export default useNavigateOnSearch;
