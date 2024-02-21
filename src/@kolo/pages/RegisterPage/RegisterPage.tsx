import {ButtonColor, ButtonSize} from '@kolo/uiKit/Button/constants';
import ButtonLink from '@kolo/uiKit/ButtonLink/ButtonLink';
import {AppRoute} from 'constants/AppRoute';
import {FC} from 'react';

import RegisterForm from './components/RegisterForm/RegisterForm';
import {RegisterFormValues} from './components/RegisterForm/types/RegisterFormValues';
import styles from './RegisterPage.module.scss';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const trimFormValues = (values: FormValues): FormValues => {
  return {
    firstName: values.firstName.trim(),
    lastName: values.lastName.trim(),
    email: values.email.trim(),
    password: values.password.trim(),
  };
};

const RegisterPage: FC = () => {
  const onFormSubmit = (values: RegisterFormValues) => {
    const trimmedValues = trimFormValues(values);

    console.log('RegisterPage, trimmed user data:', {...values, ...trimmedValues});
  };

  return (
    <main className={styles.main}>
      <section className={styles.registerSection}>
        <div className={styles.registerContainer}>
          <h2 className={styles.registerTitle}>Sign Up</h2>

          <RegisterForm onSubmit={onFormSubmit} />

          <div>
            <p className={styles.registerText}>Already registered?</p>
            <ButtonLink
              text="Sign In"
              size={ButtonSize.FULL_WIDTH}
              color={ButtonColor.BASIC}
              url={AppRoute.LOGIN}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
