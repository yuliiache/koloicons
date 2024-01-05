import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';

import {TOOLTIP_PLACEMENT, TRIGGER_ACTION} from '../constants';
import {Tooltip} from '../Tooltip';

describe('Tooltip', () => {
  afterEach(cleanup);

  it('should render snapshot successfully with label', () => {
    Object.values(TOOLTIP_PLACEMENT).forEach((placement) => {
      const {getByText} = render(
        <Tooltip
          placement={placement}
          trigger={TRIGGER_ACTION.HOVER}
          label={placement}
        >
          {<button>{placement}</button>}
        </Tooltip>
      );

      const triggerElement = getByText(placement);

      fireEvent.mouseEnter(triggerElement);

      const tooltip = screen.queryAllByText(placement);

      expect(tooltip).toMatchSnapshot();
    });
  });

  it('should render snapshot successfully without label', () => {
    const {asFragment} = render(
      <Tooltip
        placement={TOOLTIP_PLACEMENT.LEFT}
        trigger={TRIGGER_ACTION.HOVER}
      >
        {<button>{TOOLTIP_PLACEMENT.LEFT}</button>}
      </Tooltip>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
