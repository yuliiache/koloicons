import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {COLORPICKER_DEFAULT_COLOR, COLORPICKER_SIZE, COLORPICKER_TEST_ID} from './constants';

import styles from './ColorPicker.module.scss';

const ColorPicker = ({onChange, size = COLORPICKER_SIZE.BIG, value = COLORPICKER_DEFAULT_COLOR}) => {
  const labelClassName = classNames(styles.label, styles[`${size}`]);

  return (
    <label className={labelClassName}>
      <div
        className={styles.colorPointer}
        style={{backgroundColor: value}}
      />
      <input
        className={styles.colorInput}
        type="color"
        id="colorPicker"
        value={value}
        onChange={onChange}
        data-testid={COLORPICKER_TEST_ID}
      />
    </label>
  );
};

ColorPicker.propTypes = {
  size: PropTypes.oneOf(Object.values(COLORPICKER_SIZE)),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default ColorPicker;
