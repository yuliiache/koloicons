import {ButtonColor, ButtonSize} from '@kolo/uiKit/Button/constants';
import ButtonLink from '@kolo/uiKit/ButtonLink/ButtonLink';
import classnames from 'classnames';
import {AppRoute} from 'constants/AppRoute';
import {FC} from 'react';

import LoginForm from './LoginForm';
import style from './LoginPage.module.scss';
import useLoginPage from './useLoginPage';

const {main, authorization, headerName, container, containerXs, authorizationFooter, errorMessage} = style;

const LoginPage: FC = () => {
  const {isAuthenticationError, handleSubmit} = useLoginPage();

  return (
    <main className={main}>
      <div className={classnames(container, containerXs)}>
        <section className={authorization}>
          <h2 className={headerName}>Login</h2>
          <LoginForm onSubmit={handleSubmit} />
          <p className={authorizationFooter}>Create an account to use KOLO Icons for free!</p>
          <ButtonLink
            url={AppRoute.REGISTER}
            text="Sign Up"
            color={ButtonColor.BASIC}
            size={ButtonSize.FULL_WIDTH}
          />
          {isAuthenticationError && <span className={errorMessage}>Please, enter a valid email and/or password</span>}
        </section>
      </div>
    </main>
  );
};

export default LoginPage;
