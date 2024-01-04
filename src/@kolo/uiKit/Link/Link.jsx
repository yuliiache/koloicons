import React from 'react';
import {Link as InternalLink} from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {EXTERNAL_LINK_TEST_ID, INTERNAL_LINK_TEST_ID, LINK_TYPES} from './constants';

import styles from './Link.module.scss';

export const Link = ({url, text, type = LINK_TYPES.DEFAULT}) => {
  const isInternalUrl = url.startsWith('/');
  const linksClasses = classNames(styles.link, styles[`link--${type}`]);

  if (isInternalUrl) {
    return (
      <InternalLink
        className={linksClasses}
        data-testid={INTERNAL_LINK_TEST_ID}
        to={url}
      >
        {text}
      </InternalLink>
    );
  }

  return (
    <a
      className={linksClasses}
      href={url}
      data-testid={EXTERNAL_LINK_TEST_ID}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      {text}
    </a>
  );
};

Link.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(LINK_TYPES)),
};
