import {LinkType} from '@kolo/uiKit/Link/constants';
import Link from '@kolo/uiKit/Link/Link';
import {FC} from 'react';

import style from './LinksGroup.module.scss';

const LinksGroup: FC = () => {
  return (
    <ul className={style.linksList}>
      <li>
        <Link
          url="/"
          type={LinkType.MAIN}
        >
          <span>Internal link</span>
        </Link>
      </li>
      <li>
        <Link
          url="/privacy-policy-docs"
          type={LinkType.ACCENT}
          isInNewTab
        >
          <span>Internal link that opens in a new tab</span>
        </Link>
      </li>
      <li>
        <Link
          url="https://uk-ua.facebook.com/"
          type={LinkType.BRAND}
          isInNewTab
        >
          <span>External link</span>
        </Link>
      </li>
      <li>
        <Link
          url="https://uk-ua.facebook.com/"
          isInNewTab
        >
          <span>External link</span>
        </Link>
      </li>
      <li>
        <Link
          url="https://uk-ua.facebook.com/"
          type={LinkType.ACCENT}
          isInNewTab
        >
          <span>External link</span>
        </Link>
      </li>
      <li>
        <Link
          url="https://uk-ua.facebook.com/"
          type={LinkType.DEFAULT_RED}
          isInNewTab
        >
          <span>External link</span>
        </Link>
      </li>
    </ul>
  );
};

export default LinksGroup;
