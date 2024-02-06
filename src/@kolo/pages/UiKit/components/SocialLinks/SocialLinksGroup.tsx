import SocialLinks from '@kolo/uiKit/SocialLinks/SocialLinks';

import {Section} from '../Section/Section';
import styles from './SocialLinksGroup.module.scss';

const SocialLinksGroup = () => {
  return (
    <Section title="SocialLinks">
      <div className={styles.socialLinksWrap}>
        <SocialLinks />
      </div>
    </Section>
  );
};

export default SocialLinksGroup;
