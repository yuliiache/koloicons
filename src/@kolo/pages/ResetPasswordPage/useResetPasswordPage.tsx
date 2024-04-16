import {AppRoute} from 'constants/AppRoute';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router';
import {useSearchParams} from 'react-router-dom';

import {isAuthenticatedSelector} from '../LoginPage/selectors';
import {ResetPasswordValue} from './types/ResetPasswordValue';

export interface OnSubmit {
  onSubmit: (value: ResetPasswordValue) => void;
}

const PASSWORD_TOKEN_PARAM = 'passwordResetToken';

export const useResetPasswordPage = () => {
  const navigate = useNavigate();

  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const [searchParams] = useSearchParams();

  const handleSubmit = (value: ResetPasswordValue): void => {
    console.log(value);
  };

  const resetPassword = searchParams.get(PASSWORD_TOKEN_PARAM);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(AppRoute.ICONS, {replace: true});
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (!resetPassword) {
      navigate(AppRoute.HOME, {replace: true});
    }
  }, [resetPassword]);

  return {handleSubmit};
};
