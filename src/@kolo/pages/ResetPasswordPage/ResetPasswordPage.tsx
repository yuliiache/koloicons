import ResetPasswordForm from './ResetPasswordForm';
import styles from './ResetPasswordPage.module.scss';
import {useResetPasswordPage} from './useResetPasswordPage';

const ResetPasswordPage = () => {
  const {handleSubmit} = useResetPasswordPage();

  return (
    <div className={styles['reset-password']}>
      <div className={styles['reset-password__container']}>
        <h3 className={styles['reset-password__title']}>Reset Password</h3>
        <div className={styles['reset-password__body']}>
          <ResetPasswordForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
