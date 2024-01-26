import {AppRoute} from 'constants/AppRoute';
import {FC} from 'react';

import {ButtonColor, ButtonSize} from '../Button/constants';
import ButtonLink from '../ButtonLink/ButtonLink';
import styles from '../SignInMessage/SignInMessage.module.scss';
import {SIGN_IN_MESSAGE_TITLE_TEST_ID} from './constants';

interface SignInMessageProps {
  title: string;
}

const SignInMessage: FC<SignInMessageProps> = ({title}) => {
  const URL = AppRoute.LOGIN;

  return (
    <div className={styles.signInMessage}>
      <p className={styles.signInText}>
        Sign In to work with
        <span
          className={styles.signInTitle}
          data-testid={SIGN_IN_MESSAGE_TITLE_TEST_ID}
        >
          {` ${title}`}
        </span>
      </p>
      <ButtonLink
        url={URL}
        text="Sign In"
        color={ButtonColor.BASIC}
        size={ButtonSize.FULL_WIDTH}
      />
    </div>
  );
};

export default SignInMessage;
