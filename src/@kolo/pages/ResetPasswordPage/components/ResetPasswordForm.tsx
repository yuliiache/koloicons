import Button from '@kolo/uiKit/Button/Button';
import {ButtonSize, ButtonType} from '@kolo/uiKit/Button/constants';
import {InputType} from '@kolo/uiKit/Input/InputType';
import {FC} from 'react';
import {Form} from 'react-final-form';

import styles from '../ResetPasswordPage.module.scss';
import type {OnSubmit} from '../useResetPasswordPage';
import {initialValues, validateForm} from '../validateForm';
import FormInput from './FormInput';

const ResetPasswordForm: FC<OnSubmit> = ({onSubmit}) => {
  return (
    <>
      <h3 className={styles['reset-password__title']}>Reset Password</h3>
      <div className={styles['reset-password__body']}>
        <Form
          initialValues={initialValues}
          validate={validateForm}
          onSubmit={onSubmit}
          render={({handleSubmit}) => (
            <form
              onSubmit={handleSubmit}
              className={styles['authorization__form']}
            >
              <FormInput
                id="password"
                name="password"
                inputType={InputType.PASSWORD}
                hasAutoFocus
                placeholder="Password"
              />
              <FormInput
                id="confirmPassword"
                name="confirmPassword"
                inputType={InputType.PASSWORD}
                placeholder="Confirm Password"
              />
              <Button
                text="Reset Password"
                type={ButtonType.SUBMIT}
                size={ButtonSize.FULL_WIDTH}
              />
            </form>
          )}
        />
      </div>
    </>
  );
};

export default ResetPasswordForm;
