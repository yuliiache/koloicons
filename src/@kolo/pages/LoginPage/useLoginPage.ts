import {useAppDispatch, useAppSelector} from 'app/hooks';
import {AppRoute} from 'constants/AppRoute';
import {useEffect} from 'react';
import {useNavigate} from 'react-router';

import {errorCodeSelector, isAuthenticatedSelector} from './selectors';
import {loginUserStartAction} from './slices/loginUserSlice';
import {ErrorCode} from './types/ErrorCode';
import {LoginFormValue} from './types/LoginFormValue';

type HandleSubmit = (value: LoginFormValue) => void;

interface LoginPageHookReturn {
  isAuthenticationError: boolean;
  handleSubmit: HandleSubmit;
}

const useLoginPage = (): LoginPageHookReturn => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(isAuthenticatedSelector);
  const errorCode: ErrorCode = useAppSelector(errorCodeSelector);
  const isAuthenticationError = errorCode === 400;

  useEffect(() => {
    if (isAuthenticated) {
      navigate(AppRoute.ICONS);
    }
  }, [isAuthenticated]);

  const handleSubmit: HandleSubmit = (value) => {
    dispatch(loginUserStartAction(value));
  };

  return {isAuthenticationError, handleSubmit};
};

export default useLoginPage;
