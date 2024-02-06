import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';

import {TooltipPlacement, TriggerAction} from '../constants';
import Tooltip from '../Tooltip';

describe('Tooltip', () => {
  afterEach(cleanup);

  it('should render snapshot successfully with label', () => {
    Object.values(TooltipPlacement).forEach((placement) => {
      const {getByText} = render(
        <Tooltip
          placement={placement}
          trigger={TriggerAction.HOVER}
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
        placement={TooltipPlacement.LEFT}
        trigger={TriggerAction.HOVER}
      >
        {<button>{TooltipPlacement.LEFT}</button>}
      </Tooltip>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
