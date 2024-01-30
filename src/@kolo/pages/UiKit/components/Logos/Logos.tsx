import Logo from '@kolo/uiKit/Logo';

import {Section} from '../Section/Section';
import styles from './Logos.module.scss';

const {logos} = styles;

const testConditions = Object.freeze({
  TRUE: true,
  FALSE: false,
});

const isLoading = Object.entries(testConditions);

const Logos = () => {
  return (
    <Section title="Logo">
      <div className={logos}>
        {isLoading.map(([key, value]) => (
          <Logo
            key={key}
            isLoading={value}
          />
        ))}
      </div>
    </Section>
  );
};

export default Logos;
