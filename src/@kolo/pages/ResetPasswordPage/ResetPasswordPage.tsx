import {useAppSelector} from 'app/hooks';

import ResetPasswordForm from './components/ResetPasswordForm';
import SuccessResetPassword from './components/SuccessResetPassword';
import styles from './ResetPasswordPage.module.scss';
import {isSuccessfullyResetPasswordSelector} from './selector';
import {useResetPasswordPage} from './useResetPasswordPage';

const ResetPasswordPage = () => {
  const {handleSubmit} = useResetPasswordPage();
  const isResetPassword = useAppSelector(isSuccessfullyResetPasswordSelector);

  const content = isResetPassword ? <SuccessResetPassword /> : <ResetPasswordForm onSubmit={handleSubmit} />;

  return (
    <div className={styles['reset-password']}>
      <div className={styles['reset-password__container']}>{content}</div>
    </div>
  );
};

export default ResetPasswordPage;
