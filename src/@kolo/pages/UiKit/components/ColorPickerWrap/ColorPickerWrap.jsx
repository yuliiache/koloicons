import React, {useState} from 'react';
import ColorPicker from '@kolo/uiKit/ColorPicker/ColorPicker';
import {COLORPICKER_SIZE} from '@kolo/uiKit/ColorPicker/constants';

import {Section} from '../Section/Section';

import styles from './ColorPickerWrap.module.scss';

const ColorPickerWrap = () => {
  const [colorBig, setColorBig] = useState();
  const [colorSmall, setColorSmall] = useState();

  const onChangeColorBig = (e) => {
    setColorBig(e.target.value);
  };

  const onChangeColorSmall = (e) => {
    setColorSmall(e.target.value);
  };

  return (
    <Section title="ColorPicker">
      <ul className={styles['list']}>
        <li className={styles['list__item']}>
          <h3 className={styles['list__title']}>Big</h3>
          <ColorPicker
            value={colorBig}
            onChange={onChangeColorBig}
          />
        </li>
        <li className={styles['list__item']}>
          <h3 className={styles['list__title']}>Small</h3>
          <ColorPicker
            size={COLORPICKER_SIZE.SMALL}
            value={colorSmall}
            onChange={onChangeColorSmall}
          />
        </li>
      </ul>
    </Section>
  );
};

export default ColorPickerWrap;
