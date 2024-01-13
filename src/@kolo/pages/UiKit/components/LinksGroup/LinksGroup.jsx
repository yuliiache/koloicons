import {LINK_TYPES} from '@kolo/uiKit/Link/constants';
import Link from '@kolo/uiKit/Link/Link';

import style from './LinksGroup.module.scss';

const LinksGroup = () => {
  return (
    <ul className={style.linksList}>
      <li>
        <Link
          url="/"
          type={LINK_TYPES.MAIN}
        >
          <span>Internal link</span>
        </Link>
      </li>
      <li>
        <Link
          url="/privacy-policy-docs"
          type={LINK_TYPES.ACCENT}
          isInNewTab
        >
          <span>Internal link that opens in a new tab</span>
        </Link>
      </li>
      <li>
        <Link
          url="https://uk-ua.facebook.com/"
          type={LINK_TYPES.BRAND}
          isInNewTab
        >
          <span>External link</span>
        </Link>
      </li>
      <li>
        <Link
          url="https://uk-ua.facebook.com/"
          type={LINK_TYPES.DEFAULT}
          isInNewTab
        >
          <span>External link</span>
        </Link>
      </li>
      <li>
        <Link
          url="https://uk-ua.facebook.com/"
          type={LINK_TYPES.ACCENT}
          isInNewTab
        >
          <span>External link</span>
        </Link>
      </li>
      <li>
        <Link
          url="https://uk-ua.facebook.com/"
          type={LINK_TYPES.DEFAULT_RED}
          isInNewTab
        >
          <span>External link</span>
        </Link>
      </li>
    </ul>
  );
};

export default LinksGroup;
