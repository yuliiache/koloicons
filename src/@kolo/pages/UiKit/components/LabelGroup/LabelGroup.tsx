import {LabelSize, LabelTheme} from '@kolo/uiKit/Label/constants';
import Label from '@kolo/uiKit/Label/Label';
import { FC } from 'react';

import {Section} from '../Section/Section';
import styles from './LabelGroup.module.scss';

 const LabelGroup:FC = () => {
  return (
    <Section title="Label">
      <ul className={styles.list}>
        <li>
          <Label text="Default" />
        </li>
        <li>
          <Label
            size={LabelSize.LARGE}
            theme={LabelTheme.SUCCESS}
            text="Success"
          />
        </li>
        <li>
          <Label
            size={LabelSize.LARGE}
            theme={LabelTheme.PRIMARY}
            text="Primary"
          />
        </li>
        <li>
          <Label
            size={LabelSize.LARGE}
            theme={LabelTheme.WARNING}
            text="Warning"
          />
        </li>
      </ul>
    </Section>
  );
};

export default LabelGroup;
