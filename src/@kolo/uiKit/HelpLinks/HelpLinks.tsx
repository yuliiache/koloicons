
import { AppRoute } from 'constants/AppRoute';
import {FC} from 'react';

import Link from '../Link/Link';
import styles from './HelpLinks.module.scss';

interface HelpLink {
  name: string;
  url: string;
}

export const HELP_LINKS: readonly HelpLink[] = [
  {name: 'Privacy Policy', url: AppRoute.PRIVACY_POLICY},
  {name: 'Terms of Service', url: AppRoute.TERMS_OF_SERVICE},
  {name: 'Cookie Policy', url: AppRoute.COOKIE_POLICY},
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
