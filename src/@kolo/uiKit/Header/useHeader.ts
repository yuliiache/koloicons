import {loadingSelector} from '@kolo/core/common/selectors';
import {userSelector} from '@kolo/pages/LoginPage/selectors';
import {shouldHideNavigationAndMenu} from '@kolo/services/helpers/shouldHideNavigationAndMenu';
import {useAppSelector} from 'app/hooks';
import {useLocation} from 'react-router';

interface headerHookReturn {
  name: string;
  isPro: boolean;
  isLoading: boolean;
  isHidden: boolean;
}

export const useHeader = (): headerHookReturn => {
  const {isLoading} = useAppSelector(loadingSelector);
  const {name, isPro} = useAppSelector(userSelector);

  const location = useLocation();
  const pathname = location.pathname;
  const isHidden = shouldHideNavigationAndMenu(pathname);

  return {name, isPro, isLoading, isHidden};
};
