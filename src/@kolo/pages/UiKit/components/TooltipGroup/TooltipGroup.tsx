import {TooltipPlacement} from '@kolo/uiKit/Tooltip/constants';
import Tooltip from '@kolo/uiKit/Tooltip/Tooltip';
import {nanoid} from '@reduxjs/toolkit';

import {Section} from '../Section/Section';
import styles from './TooltipGroup.module.scss';

const tooltipPlacements = Object.values(TooltipPlacement);

const renderTooltip = (text: string, placement: TooltipPlacement) => {
  const tooltipId = nanoid();

  return (
    <Tooltip
      id={tooltipId}
      label={`Tooltip on the ${placement}`}
      placement={placement}
    >
      <button className={styles.tooltipButton}>{text} me!</button>
    </Tooltip>
  );
};

const TooltipGroup = () => {
  return (
    <Section title="Tooltip">
      <h3 className={styles.blockTitle}>Trigger on hover</h3>
      <ul className={styles.tooltipList}>
        {tooltipPlacements.map((placement, index) => {
          const text = 'Hover';

          return <li key={index}>{renderTooltip(text, placement)}</li>;
        })}
      </ul>

      <h3>Tooltip without label</h3>
      <Tooltip>
        <button className={styles.tooltipButton}>Button</button>
      </Tooltip>
    </Section>
  );
};

export default TooltipGroup;
