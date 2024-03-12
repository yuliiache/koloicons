import {isAuthenticatedSelector} from '@kolo/pages/LoginPage/selectors';
import {logoutUserStartAction} from '@kolo/pages/LoginPage/slices/loginUserSlice';
import Button from '@kolo/uiKit/Button/Button';
import {ButtonColor} from '@kolo/uiKit/Button/constants';
import {useAppDispatch, useAppSelector} from 'app/hooks';
import {FC} from 'react';

import {Section} from '../Section/Section';

const LogoutButton: FC = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(isAuthenticatedSelector);

  const onButtonClick: () => void = () => {
    if (isAuthenticated) {
      dispatch(logoutUserStartAction());
      console.log('The user has just logged out');
    }
  };

  return (
    <Section title="Logout test button">
      <Button
        onClick={onButtonClick}
        text="Logout button"
        color={ButtonColor.ACCENT}
      />
    </Section>
  );
};

export default LogoutButton;
