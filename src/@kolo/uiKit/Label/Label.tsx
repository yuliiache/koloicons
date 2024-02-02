import classNames from 'classnames';
import React, {FC} from 'react';

import {LABEL_TEST_ID, LabelSize, LabelTheme} from './constants';
import styles from './Label.module.scss';

interface LabelProps {
  text: string;
  theme?: LabelTheme;
  size?: LabelSize;
}

const Label: FC<LabelProps> = ({text, theme = LabelTheme.DEFAULT, size = LabelSize.SMALL}) => {
  const labelClassNames = classNames(styles.label, styles[`${theme}`], styles[`${size}`]);
  return (
    <span
      className={labelClassNames}
      data-testid={LABEL_TEST_ID}
    >
      {text}
    </span>
  );
};

export default Label;
