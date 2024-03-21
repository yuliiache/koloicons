import {useAppDispatch, useAppSelector} from 'app/hooks';
import {AppRoute} from 'constants/AppRoute';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import {isAuthenticatedSelector} from '../LoginPage/selectors';
import {registerUserStartAction} from '../LoginPage/slices/loginUserSlice';
import {RegisterFormValues} from './components/RegisterForm/types/RegisterFormValues';

type HandleSubmit = (value: RegisterFormValues) => void;

interface useRegisterPageReturn {
  handleSubmit: HandleSubmit;
}

const useRegisterPage = (): useRegisterPageReturn => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector(isAuthenticatedSelector);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(AppRoute.ICONS);
    }
  }, [isAuthenticated]);

  const handleSubmit: HandleSubmit = (value) => {
    dispatch(registerUserStartAction(value));
  };

  return {handleSubmit};
};

export default useRegisterPage;
