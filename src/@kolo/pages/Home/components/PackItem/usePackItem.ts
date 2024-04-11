import {isAuthenticatedSelector, userIdSelector} from '@kolo/pages/LoginPage/selectors';
import {downloadIconsFilesByCategory} from '@kolo/services/helpers/downloadIcon';
import {useAppSelector} from 'app/hooks';
import {AppRoute} from 'constants/AppRoute';
import {MouseEvent} from 'react';
import {useNavigate} from 'react-router';

interface PackItemHook {
  handleDownloadIcons: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const usePackItem = (categoryId: string): PackItemHook => {
  const isAuthenticated = useAppSelector(isAuthenticatedSelector);
  const navigate = useNavigate();
  const userId = useAppSelector(userIdSelector);

  const handleDownloadIcons = (event: MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation();
    if (!isAuthenticated) {
      navigate(AppRoute.LOGIN);
    } else {
      downloadIconsFilesByCategory({categoryId, userId});
    }
  };

  return {handleDownloadIcons};
};
