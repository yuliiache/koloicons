import classNames from 'classnames';
import {FC} from 'react';

import styles from './ColorPicker.module.scss';
import {COLORPICKER_TEST_ID, ColorPickerColor, ColorPickerSize} from './constants';

interface ColorPickerProps {
  onChange: () => void;
  size?: ColorPickerSize;
  value?: ColorPickerColor;
}

const ColorPicker: FC<ColorPickerProps> = ({
  onChange,
  size = ColorPickerSize.BIG,
  value = ColorPickerColor.DEFAULT,
}) => {
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

export default ColorPicker;
