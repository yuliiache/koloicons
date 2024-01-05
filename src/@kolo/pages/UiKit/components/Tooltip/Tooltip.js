import React from 'react';
import PropTypes from 'prop-types';
import RcTooltip from 'rc-tooltip';

import {TOOLTIP_PLACEMENT, TRIGGER_ACTION} from './constants';
import {overlayInnerStyle} from './styles';

import 'rc-tooltip/assets/bootstrap_white.css';

export const Tooltip = ({label, placement = TOOLTIP_PLACEMENT.LEFT, trigger = TRIGGER_ACTION.HOVER, children}) => {
  if (!label) {
    return children;
  }

  return (
    <RcTooltip
      placement={placement}
      overlay={label}
      trigger={trigger}
      overlayInnerStyle={{...overlayInnerStyle}}
    >
      {children}
    </RcTooltip>
  );
};

Tooltip.propTypes = {
  label: PropTypes.string,
  placement: PropTypes.oneOf(Object.values(TOOLTIP_PLACEMENT)),
  trigger: PropTypes.oneOf(Object.values(TRIGGER_ACTION)),
  children: PropTypes.node,
};
