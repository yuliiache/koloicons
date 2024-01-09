import Tooltip from '@kolo/uiKit/Tooltip/Tooltip';

import styles from './Tooltips.module.scss';

const {tooltipWrapper, tooltipWrapperButton} = styles;

import {TOOLTIP_PLACEMENT, TRIGGER_ACTION} from '@kolo/uiKit/Tooltip/constants';

const tooltipPlacements = Object.values(TOOLTIP_PLACEMENT);

const Tooltips = () => {
  const renderTooltips = (trigger, label = 'label') => {
    if (trigger) {
      return tooltipPlacements.map((placement) => (
        <Tooltip
          label={label}
          key={placement}
          placement={placement}
          trigger={trigger}
        >
          <button className={tooltipWrapperButton}>Trigger Me!</button>
        </Tooltip>
      ));
    }
    return (
      <Tooltip>
        <button className={tooltipWrapperButton}>Trigger Me!</button>
      </Tooltip>
    );
  };

  return (
    <div className={tooltipWrapper}>
      {renderTooltips(TRIGGER_ACTION.HOVER)}
      {renderTooltips(TRIGGER_ACTION.FOCUS)}
      {renderTooltips(TRIGGER_ACTION.CLICK)}
      {renderTooltips()}
    </div>
  );
};

export default Tooltips;
