import ButtonWithIcon from '@kolo/uiKit/Button/ButtonWitIcon/ButtonWithIcon';
import {ButtonSize} from '@kolo/uiKit/Button/constants';
import Icon from '@kolo/uiKit/Icons';
import Tooltip from '@kolo/uiKit/Tooltip/Tooltip';
import React from 'react';

import styles from './PNGDownloadButton.module.scss';

interface PNGButtonProps {
  isAuthenticated: boolean;
  selectedPNGSize: string;
}

const PNGDownloadButton: React.FC<PNGButtonProps> = ({isAuthenticated, selectedPNGSize}) => {
  const handleDownload = (): void => {
    console.log('Initiating PNG download...');
  };

  const tooltipLabel = isAuthenticated ? 'Download' : 'Sign in to download PNG';

  return (
    <Tooltip
      id="png-download"
      label={tooltipLabel}
    >
      <div className={styles.buttonWrapper}>
        <ButtonWithIcon
          isDisabled={!isAuthenticated}
          onClick={handleDownload}
          text="PNG"
          icon={<Icon.Download />}
          additionalText={selectedPNGSize}
          size={ButtonSize.FULL_WIDTH}
        />
      </div>
    </Tooltip>
  );
};
export default PNGDownloadButton;
