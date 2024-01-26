import React from 'react';
import Button from '@kolo/uiKit/Button/Button';
import {ButtonColor, ButtonSize, ButtonType} from '@kolo/uiKit/Button/constants';

import styles from './Buttons.module.scss';

const buttonParams = {
  color: ButtonColor.PRIMARY,
  text: 'Default Button',
  onClick: () => {},
  type: ButtonType.BUTTON,
  isDisabled: false,
};

const generateButtons = (params) => {
  return Object.values(ButtonSize).map((buttonSize, index) => (
    <Button
      key={index}
      size={buttonSize}
      color={params.color}
      text={params.text}
      onClick={params.onClick}
      type={params.type}
      isDisabled={params.isDisabled}
    />
  ));
};

export const Buttons = () => {
  return (
    <div className={styles.button}>
      <h2>T5-98 Button</h2>
      <div className={styles['button-row']}>
        {generateButtons({...buttonParams, color: ButtonColor.PRIMARY, text: 'Primary Button'})}
        {generateButtons({...buttonParams, color: ButtonColor.ACCENT, text: 'Accent Button'})}
        {generateButtons({...buttonParams, color: ButtonColor.BASIC, text: 'Basic Button'})}
        {generateButtons({
          ...buttonParams,
          color: ButtonColor.BASIC,
          text: 'Disabled Button',
          isDisabled: true,
        })}
      </div>
    </div>
  );
};
