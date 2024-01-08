import React from 'react';
import {LABEL_SIZE, LABEL_THEME} from '@kolo/uiKit/Label/constants';
import Label from '@kolo/uiKit/Label/Label';

import {Section} from '../Section/Section';

import styles from './LabelGroup.module.scss';

 const LabelGroup = () => {
  return (
    <Section title="Label">
      <ul className={styles.list}>
        <li>
          <Label text="Default" />
        </li>
        <li>
          <Label
            size={LABEL_SIZE.LARGE}
            theme={LABEL_THEME.SUCCESS}
            text="Success"
          />
        </li>
        <li>
          <Label
            size={LABEL_SIZE.LARGE}
            theme={LABEL_THEME.PRIMARY}
            text="Primary"
          />
        </li>
        <li>
          <Label
            size={LABEL_SIZE.LARGE}
            theme={LABEL_THEME.WARNING}
            text="Warning"
          />
        </li>
      </ul>
    </Section>
  );
};

export default LabelGroup;
