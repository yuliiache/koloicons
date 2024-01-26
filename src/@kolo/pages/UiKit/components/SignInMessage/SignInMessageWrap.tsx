import SignInMessage from '@kolo/uiKit/SignInMessage/SignInMessage';
import {FC} from 'react';

import styles from './SignInMessageWrap.module.scss';

const SignInMessageWrap: FC = () => {
  return (
    <div className={styles.signInMessageWrap}>
      <SignInMessage title="Download" />
    </div>
  );
};

export default SignInMessageWrap;
