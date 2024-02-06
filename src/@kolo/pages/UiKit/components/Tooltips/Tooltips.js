import Tooltip from '@kolo/uiKit/Tooltip/Tooltip';

import styles from './Tooltips.module.scss';

const {tooltipWrapper, tooltipWrapperButton} = styles;

import {TooltipPlacement, TriggerAction} from '@kolo/uiKit/Tooltip/constants';

const tooltipPlacements = Object.values(TooltipPlacement);

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
      {renderTooltips(TriggerAction.HOVER)}
      {renderTooltips(TriggerAction.FOCUS)}
      {renderTooltips(TriggerAction.CLICK)}
      {renderTooltips()}
    </div>
  );
};

export default Tooltips;
