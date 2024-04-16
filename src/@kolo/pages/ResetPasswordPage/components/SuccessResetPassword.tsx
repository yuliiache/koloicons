import {Image} from '@kolo/uiKit/Image/Image';
import {AppRoute} from 'constants/AppRoute';
import {NavLink} from 'react-router-dom';

import styles from '../ResetPasswordPage.module.scss';
import image from './success.png';

const SuccessResetPassword = () => {
  return (
    <>
      <div className={styles['reset-password__success-icon']}>
        <Image
          src={image}
          alt="success"
        />
      </div>
      <h3 className={styles['reset-password__title']}>Password Updated!</h3>
      <div className={styles['reset-password__message']}>
        Your password has been changed successfully.
        <br />
        Use your new password to <NavLink to={AppRoute.HOME}>log in</NavLink>.
      </div>
    </>
  );
};

export default SuccessResetPassword;
