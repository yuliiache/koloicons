import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';

import Tooltip from '../Tooltip';

describe('Tooltip', () => {
  afterEach(cleanup);

  const label = 'Tooltip';
  const buttonText = 'Test button';

  it(`should render snapshot successfully with label`, () => {
    const {container} = render(
      <Tooltip
        id="1"
        label={label}
      >
        <button>{buttonText}</button>
      </Tooltip>
    );

    const triggerElement = screen.getByText(buttonText);

    expect(triggerElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render snapshot successfully for only child element without tooltip', () => {
    const {asFragment} = render(<Tooltip>{<button>{buttonText}</button>}</Tooltip>);

    const triggerElement = screen.getByText(buttonText);

    expect(triggerElement).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
