import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {LABEL_SIZE, LABEL_TEST_ID, LABEL_THEME} from './constants';

import styles from './Label.module.scss';

const Label = ({text, theme = LABEL_THEME.DEFAULT, size = LABEL_SIZE.SMALL}) => {
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

Label.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(Object.values(LABEL_THEME)),
  size: PropTypes.oneOf(Object.values(LABEL_SIZE)),
};

export default Label;
