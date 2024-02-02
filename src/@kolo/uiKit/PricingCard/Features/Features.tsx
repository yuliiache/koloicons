import {FC} from 'react';

import styles from './Features.module.scss';

interface FeatureProps {
  planFeatures: string[];
}

const Features: FC<FeatureProps> = ({planFeatures}) => {
  return (
    <ul className={styles.planFeatures}>
      {planFeatures.map((feature, index) => (
        <li key={index}>
          <strong>{feature}</strong>
        </li>
      ))}
    </ul>
  );
};

export default Features;
