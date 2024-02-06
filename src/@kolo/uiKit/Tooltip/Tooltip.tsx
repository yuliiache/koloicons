import 'rc-tooltip/assets/bootstrap_white.css';

import RcTooltip from 'rc-tooltip';
import {FC, ReactElement} from 'react';

import {TooltipPlacement, TriggerAction} from './constants';
import {overlayInnerStyle} from './styles';

interface TooltipProps {
  label: string;
  children: ReactElement;
  placement?: TooltipPlacement;
  trigger?: TriggerAction;
}

const Tooltip: FC<TooltipProps> = ({
  label,
  children,
  placement = TooltipPlacement.LEFT,
  trigger = TriggerAction.HOVER,
}) => {
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

export default Tooltip;
