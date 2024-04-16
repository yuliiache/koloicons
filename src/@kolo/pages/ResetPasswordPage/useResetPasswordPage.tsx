import {AppRoute} from 'constants/AppRoute';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router';
import {useSearchParams} from 'react-router-dom';

import {isAuthenticatedSelector} from '../LoginPage/selectors';
import {resetPasswordStartAction} from './slice/resetPasswordSlice';
import {ResetPasswordValue} from './types/ResetPasswordValue';

export interface OnSubmit {
  onSubmit: (value: ResetPasswordValue) => void;
}

const PASSWORD_TOKEN_PARAM = 'passwordResetToken';

export const useResetPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const [searchParams] = useSearchParams();
  const passwordResetToken = searchParams.get(PASSWORD_TOKEN_PARAM);

  const handleSubmit = (value: ResetPasswordValue): void => {
    const {password: newPassword} = value;
    if (newPassword && passwordResetToken) {
      dispatch(resetPasswordStartAction({newPassword, passwordResetToken}));
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(AppRoute.ICONS, {replace: true});
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (!passwordResetToken) {
      navigate(AppRoute.HOME, {replace: true});
    }
  }, [passwordResetToken]);

  return {handleSubmit};
};
