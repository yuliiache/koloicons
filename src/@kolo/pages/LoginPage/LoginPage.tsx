import {ButtonColor, ButtonSize} from '@kolo/uiKit/Button/constants';
import ButtonLink from '@kolo/uiKit/ButtonLink/ButtonLink';
import classnames from 'classnames';
import {AppRoute} from 'constants/AppRoute';
import {FC} from 'react';

import LoginForm from './LoginForm';
import style from './LoginPage.module.scss';

const {authorization, headerName, container, containerXs, authorizationFooter} = style;

export interface Value {
  email: string;
  password: string;
}

const LoginPage: FC = () => {
  const handleSubmit = (value: Value) => {
    console.log(value);
  };

  return (
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
      </section>
    </div>
  );
};

export default LoginPage;
