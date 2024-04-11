import {FC, ReactNode} from 'react';
import {Tooltip as ReactTooltip} from 'react-tooltip';

import {CLOSE_ACTION_TRIGGER, OPEN_ACTION_TRIGGER, TOOLTIP_TEST_ID, TooltipPlacement} from './constants';
import {createEventObject} from './helpers/createEventObject';
import styles from './Tooltip.module.scss';

interface Props {
  children: ReactNode;
  id?: string;
  label?: string;
  openTrigger?: string;
  closeTrigger?: string;
  placement?: TooltipPlacement;
}

// id and label are required for rendering the Tooltip
const Tooltip: FC<Props> = ({
  id,
  label,
  children,
  openTrigger = OPEN_ACTION_TRIGGER,
  closeTrigger = CLOSE_ACTION_TRIGGER,
  placement = TooltipPlacement.LEFT,
}) => {
  const tooltipId = `tooltip-${id}`;

  if (!label && !id) {
    return <>{children}</>;
  }

  return (
    <div
      data-testid={TOOLTIP_TEST_ID}
      id={tooltipId}
      className={styles.tooltipWrapper}
    >
      {children}
      <ReactTooltip
        anchorSelect={`#${tooltipId}`}
        className={styles.tooltip}
        content={label}
        place={placement}
        openEvents={createEventObject(openTrigger)}
        closeEvents={createEventObject(closeTrigger)}
      />
    </div>
  );
};

export default Tooltip;
