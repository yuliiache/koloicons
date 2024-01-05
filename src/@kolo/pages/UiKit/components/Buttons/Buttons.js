import React from 'react';
import {Button} from '@kolo/uiKit/Button/Button';
import {BUTTON_COLOR, BUTTON_SIZE, BUTTON_TYPE} from '@kolo/uiKit/Button/constants';

import styles from './Buttons.module.scss';

const buttonParams = {
  color: BUTTON_COLOR.PRIMARY,
  text: 'Default Button',
  onClick: () => {},
  type: BUTTON_TYPE.BUTTON,
  isDisabled: false,
};

const generateButtons = (params) => {
  return Object.values(BUTTON_SIZE).map((buttonSize, index) => (
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
        {generateButtons({...buttonParams, color: BUTTON_COLOR.PRIMARY, text: 'Primary Button'})}
        {generateButtons({...buttonParams, color: BUTTON_COLOR.ACCENT, text: 'Accent Button'})}
        {generateButtons({...buttonParams, color: BUTTON_COLOR.BASIC, text: 'Basic Button'})}
        {generateButtons({
          ...buttonParams,
          color: BUTTON_COLOR.BASIC,
          text: 'Disabled Button',
          isDisabled: true,
        })}
      </div>
    </div>
  );
};
