import {isAuthenticatedSelector, userSelector} from '@kolo/pages/LoginPage/selectors';
import {useAppSelector} from 'app/hooks';
import {FC} from 'react';

import DownloadOptions from '../DownloadOptions/DownloadOptions';
import DownloadModalIcon from './components/DownloadModalIcon/DownloadModalIcon';
import styles from './DownloadModal.module.scss';
import {ModalIconProps} from './types/DownloadModalProps';

const DownloadModal: FC<ModalIconProps> = ({iconId, isFree}) => {
  const {isPro} = useAppSelector(userSelector);
  const isAuthenticated = useAppSelector(isAuthenticatedSelector);

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalMainContent}>
        <div className={styles.modalHeader}>
          <h3>Download Icon</h3>
        </div>
        <div className={styles.modalBody}>
          <DownloadModalIcon
            iconId={iconId}
            isFree={isFree}
          />
          <DownloadOptions
            isAuthenticated={isAuthenticated}
            isPro={isPro}
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;
