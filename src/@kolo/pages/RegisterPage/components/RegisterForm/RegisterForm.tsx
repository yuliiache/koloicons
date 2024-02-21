import Button from '@kolo/uiKit/Button/Button';
import {ButtonSize, ButtonType} from '@kolo/uiKit/Button/constants';
import {InputType} from '@kolo/uiKit/Input/InputType';
import Link from '@kolo/uiKit/Link/Link';
import classNames from 'classnames';
import {AppRoute} from 'constants/AppRoute';
import {FC} from 'react';
import {Form, FormRenderProps} from 'react-final-form';

import FormCheckboxField from './components/FormCheckboxField/FormCheckboxField';
import FormInputField from './components/FormInputField/FormInputField';
import {CheckboxDataTestId, REGISTER_FORM_TEST_ID} from './constants';
import styles from './RegisterForm.module.scss';
import {RegisterFormValues} from './types/RegisterFormValues';
import {useRegisterForm} from './useRegisterForm';
import {validateRegisterForm} from './validateRegisterForm';

interface Props {
  onSubmit: (values: RegisterFormValues) => void;
}

const RegisterForm: FC<Props> = ({onSubmit}) => {
  const {initialValues, onFormSubmit} = useRegisterForm(onSubmit);

  return (
    <div data-testid={REGISTER_FORM_TEST_ID}>
      <Form
        onSubmit={onFormSubmit}
        initialValues={initialValues}
        subscription={{submitError: true}}
        validate={validateRegisterForm}
        render={(props: FormRenderProps<RegisterFormValues>) => (
          <form
            className={styles.registerForm}
            onSubmit={props.handleSubmit}
          >
            <FormInputField
              fieldName={'firstName'}
              label={'First name'}
              type={InputType.TEXT}
            />
            <FormInputField
              fieldName={'lastName'}
              label={'Last name'}
              type={InputType.TEXT}
            />
            <FormInputField
              fieldName={'email'}
              label={'Email'}
              type={InputType.TEXT}
            />
            <FormInputField
              fieldName={'password'}
              label={'Password'}
              type={InputType.PASSWORD}
            />

            <div className={styles.checkboxWrapper}>
              <FormCheckboxField
                dataTestId={CheckboxDataTestId.SUBSCRIBE_AGREEMENT_CHECKBOX}
                fieldName="subscribeAgreement"
              />

              <p className={styles.checkboxText}>
                Agree to receive emails from koloicons with discounts or special offers.
              </p>
            </div>

            <div className={styles.checkboxWrapper}>
              <FormCheckboxField
                dataTestId={CheckboxDataTestId.TERMS_AGREEMENT_CHECKBOX}
                fieldName="termsAgreement"
              />

              <p className={classNames(styles.checkboxText, styles.textDesktop)}>
                Agree to KOLO Icons Terms of Use and Privacy Policy.
              </p>
              <p className={classNames(styles.checkboxText, styles.textMobile)}>
                Agree to KOLO Icons{' '}
                <Link url={AppRoute.TERMS_OF_SERVICE}>
                  <span>Terms of Use</span>
                </Link>{' '}
                and{' '}
                <Link url={AppRoute.PRIVACY_POLICY}>
                  <span>Privacy Policy</span>
                </Link>
                .
              </p>
            </div>

            <Button
              size={ButtonSize.FULL_WIDTH}
              text="Sign Up"
              type={ButtonType.SUBMIT}
            />
          </form>
        )}
      />
    </div>
  );
};

export default RegisterForm;
