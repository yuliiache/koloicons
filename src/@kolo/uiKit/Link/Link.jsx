import React from 'react';
import {Link as InternalLink} from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {EXTERNAL_LINK_TEST_ID, INTERNAL_LINK_TEST_ID, LINK_TYPES} from './constants';

import styles from './Link.module.scss';

const Link = ({url, children, type, isInNewTab = false}) => {
  const isInternalUrl = url.startsWith('/');
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

Link.propTypes = {
  url: PropTypes.string.isRequired,
  isInNewTab: PropTypes.bool,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(Object.values(LINK_TYPES)),
};

export default Link;
