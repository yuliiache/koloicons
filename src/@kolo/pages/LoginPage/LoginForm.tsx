import Button from '@kolo/uiKit/Button/Button';
import {ButtonSize, ButtonType} from '@kolo/uiKit/Button/constants';
import {InputType} from '@kolo/uiKit/Input/InputType';
import {FC} from 'react';
import {Form} from 'react-final-form';

import FormInput from './FormInput';
import style from './LoginPage.module.scss';
import {LoginFormValue} from './types/LoginFormValue';
import {initialValues, validateForm} from './validateForm';

const {authorizationForm} = style;

interface OnSubmit {
  onSubmit: (value: LoginFormValue) => void;
}

const LoginForm: FC<OnSubmit> = ({onSubmit}) => {
  return (
    <Form
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={onSubmit}
      render={({handleSubmit}) => (
        <form
          onSubmit={handleSubmit}
          className={authorizationForm}
        >
          <FormInput
            name={'email'}
            inputType={InputType.TEXT}
            id={'email'}
            hasAutoFocus
            label={'Email'}
          />
          <FormInput
            name={'password'}
            inputType={InputType.PASSWORD}
            id={'password'}
            label={'Password'}
          />
          <Button
            text="Sign In"
            type={ButtonType.SUBMIT}
            size={ButtonSize.FULL_WIDTH}
          />
        </form>
      )}
    />
  );
};

export default LoginForm;
