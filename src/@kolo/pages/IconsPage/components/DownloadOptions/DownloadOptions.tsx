import UnlockAllFormats from '@kolo/pages/IconsPage/components/DownloadOptions/components/UnlockAllFormats/UnlockAllFormats';
import SignInMessage from '@kolo/uiKit/SignInMessage/SignInMessage';
import React from 'react';

import PNGDownloadSection from './components/PNGSection/PNGDownloadSection';
import SVGDownloadButton from './components/SVGButton/SVGDownloadButton';
import styles from './DownloadOptions.module.scss';

interface DownloadOptionsProps {
  isAuthenticated: boolean;
  isPro: boolean;
}

const DownloadOptions: React.FC<DownloadOptionsProps> = ({isAuthenticated, isPro}) => {
  return (
    <div className={styles.DownloadPage}>
      {!isPro && <UnlockAllFormats price={2.5} />}
      <PNGDownloadSection
        isAuthenticated={isAuthenticated}
        isPro={isPro}
      />
      <SVGDownloadButton
        isPro={isPro}
        isAuthenticated={isAuthenticated}
      />
      {!isAuthenticated && <SignInMessage title="Download" />}
    </div>
  );
};

export default DownloadOptions;
