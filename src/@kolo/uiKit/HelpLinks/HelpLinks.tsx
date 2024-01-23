import {URLS} from '@kolo/constants/constants';
import {FC} from 'react';

import Link from '../Link/Link';
import styles from './HelpLinks.module.scss';

interface HelpLink {
  name: string;
  url: string;
}

export const HELP_LINKS: readonly HelpLink[] = [
  {name: 'Privacy Policy', url: URLS.privacyPolicy},
  {name: 'Terms of Service', url: URLS.termsOfService},
  {name: 'Cookie Policy', url: URLS.cookiePolicy},
];

const HelpLinks: FC = () => {
  return (
    <ul className={styles.helpLinkList}>
      {HELP_LINKS.map(({name, url}: HelpLink) => (
        <li key={name}>
          <Link
            url={url}
            isInNewTab
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HelpLinks;
