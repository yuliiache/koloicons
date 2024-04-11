import Tooltip from '@kolo/uiKit/Tooltip/Tooltip';
import React from 'react';

import SVGButton from './SVGButton';
import styles from './SVGDownloadButton.module.scss';

interface SVGButtonProps {
  isAuthenticated: boolean;
  isPro: boolean;
}

const SVGDownloadButton: React.FC<SVGButtonProps> = ({isAuthenticated, isPro}) => {
  const handleDownload = (): void => {
    console.log('Initiating SVG download...');
  };

  const tooltipLabel = !isAuthenticated ? 'Sign in to download SVG' : isPro ? 'Download' : 'Only for PRO users';

  return (
    <Tooltip
      id="svg-download"
      label={tooltipLabel}
    >
      <div className={styles.buttonWrapper}>
        {
          <SVGButton
            isPro={isPro}
            handleDownload={handleDownload}
          />
        }
      </div>
    </Tooltip>
  );
};
export default SVGDownloadButton;
