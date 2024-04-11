import {IconSize} from '@kolo/constants/constants';
import {isAuthenticatedSelector} from '@kolo/pages/LoginPage/selectors';
import {useAppSelector} from 'app/hooks';
import {AppRoute} from 'constants/AppRoute';
import {useNavigate} from 'react-router';

import {Pack} from '../types/Pack';
import {freePacksSelector} from './selectors';

interface FreePacksHook {
  freePacks: Pack[];
  handleCategoryRedirect: (route: AppRoute, categoryId: string, size: IconSize) => void;
  isAuth: boolean | null;
}

const useFreePacks = (): FreePacksHook => {
  const navigate = useNavigate();
  const freePacks = useAppSelector(freePacksSelector);
  const isAuth = useAppSelector(isAuthenticatedSelector);
  const handleCategoryRedirect = (route: AppRoute, categoryId: string, size: IconSize) => {
    navigate(`${route}?category=${categoryId}&size=${size}`);
  };

  return {freePacks, isAuth, handleCategoryRedirect};
};

export default useFreePacks;
