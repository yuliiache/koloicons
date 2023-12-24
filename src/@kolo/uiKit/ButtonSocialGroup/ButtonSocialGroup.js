import React from 'react';

import styles from './ButtonSocialGroup.module.scss';

export const ButtonSocialGroup = ({children}) => {
  return (
    <ul className={styles.buttonSocialGroup}>
      {React.Children.map(children, (child) => (
        <li className={styles.buttonSocialGroupItem}>{child}</li>
      ))}
    </ul>
  );
};
