import Icon from '@kolo/uiKit/Icons';
import classnames from 'classnames';
import React, {MouseEventHandler} from 'react';

import {IconSize} from '../../constants';
import styles from '../../DownloadOptions.module.scss';

interface PNGIconSizeButtonProps {
  text: IconSize;
  requirePro: boolean;
  isSelected: boolean;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}
const PNGIconSizeButton: React.FC<PNGIconSizeButtonProps> = ({text, requirePro, isSelected, handleClick}) => {
  const buttonClasses = classnames(styles.SizeButton, {
    [styles['SizeButton-disabled']]: requirePro,
    [styles['SizeButton-selected']]: isSelected,
  });

  return (
    <button
      className={buttonClasses}
      onClick={handleClick}
      disabled={requirePro}
    >
      {isSelected && <Icon.Check />}
      {requirePro && <Icon.Lock />}
      {text}
    </button>
  );
};

export default PNGIconSizeButton;
