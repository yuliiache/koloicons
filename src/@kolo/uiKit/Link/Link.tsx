import classNames from 'classnames';
import {FC} from 'react';
import {Link as InternalLink} from 'react-router-dom';

import {EXTERNAL_LINK_TEST_ID, INTERNAL_LINK_TEST_ID, LinkType} from './constants';
import styles from './Link.module.scss';

interface Props {
  url: string;
  children: React.ReactNode;
  type?: LinkType;
  isInNewTab?: boolean;
}

const Link: FC<Props> = ({url, children, type = LinkType.DEFAULT, isInNewTab = false}) => {
  const isInternalUrl: boolean = url.startsWith('/');
  const linksClasses = classNames(styles.link, styles[`link--${type}`]);

  if (isInternalUrl) {
    return (
      <InternalLink
        className={linksClasses}
        data-testid={INTERNAL_LINK_TEST_ID}
        to={url}
        target={isInNewTab ? '_blank' : undefined}
        rel={isInNewTab ? 'noopener noreferrer' : undefined}
      >
        {children}
      </InternalLink>
    );
  }

  return (
    <a
      className={linksClasses}
      href={url}
      data-testid={EXTERNAL_LINK_TEST_ID}
      target={isInNewTab ? '_blank' : undefined}
      rel="noopener noreferrer nofollow"
    >
      {children}
    </a>
  );
};

export default Link;
