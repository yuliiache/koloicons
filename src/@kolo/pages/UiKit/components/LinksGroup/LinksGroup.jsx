import {LINK_TYPES} from '@kolo/uiKit/Link/constants';
import {Link} from '@kolo/uiKit/Link/Link';

import style from './LinksGroup.module.scss';

export const LinksGroup = () => {
  return (
    <>
      <h2>Links</h2>
      <div className={style.linksWrap}>
        <Link
          url="/"
          text="Internal link"
          type={LINK_TYPES.MAIN}
        />
        <Link
          url="https://uk-ua.facebook.com/"
          text="External link"
          type={LINK_TYPES.BRAND}
        />
        <Link
          url="https://uk-ua.facebook.com/"
          text="External link"
        />
        <Link
          url="https://uk-ua.facebook.com/"
          text="External link"
          type={LINK_TYPES.ACCENT}
        />
        <Link
          url="https://uk-ua.facebook.com/"
          text="External link"
          type={LINK_TYPES.DEFAULT_RED}
        />
      </div>
    </>
  );
};
