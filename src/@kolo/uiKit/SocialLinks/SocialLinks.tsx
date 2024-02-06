import {FC} from 'react';

import Link from '../Link/Link';
import styles from './SocialLink.module.scss';
import SocialLinksConfig from './SocialLinksConfig';

const SocialLinks: FC = () => {
  return (
    <div className={styles.socialContainer}>
      {SocialLinksConfig.map(({url, IconComponent, id}) => (
        <Link
          key={id}
          url={url}
          isInNewTab={true}
        >
          <IconComponent />
        </Link>
      ))}
    </div>
  );
};
export default SocialLinks;
