import React from 'react';

import {IconSize} from '../../constants';
import styles from '../../DownloadOptions.module.scss';
import {IconSizeData} from '../../IconSizeData';
import PNGIconSizeButton from './PNGIconSizeButton';

const {IconSizeWrapper} = styles;

interface PNGSizeOptionsProps {
  isPro: boolean;
  isAuthenticated: boolean;
  selectedPNGSize: IconSize;
  handleClick: (value: IconSize) => void;
}

const PNGSizeOptions: React.FC<PNGSizeOptionsProps> = ({isPro, isAuthenticated, selectedPNGSize, handleClick}) => {
  if (!isAuthenticated) return null;

  return (
    <div className={IconSizeWrapper}>
      {IconSizeData.map(({id, size, requirePro}) => {
        const buttonRequirePro: boolean = !isPro && requirePro;
        const ButtonSelected: boolean = selectedPNGSize === size;

        return (
          <PNGIconSizeButton
            key={id}
            text={size}
            requirePro={buttonRequirePro}
            isSelected={ButtonSelected}
            handleClick={() => handleClick(size)}
          />
        );
      })}
    </div>
  );
};
export default PNGSizeOptions;
