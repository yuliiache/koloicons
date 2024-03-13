import React from 'react';
import {cleanup, render} from '@testing-library/react';

import RadioGroup from '../RadioGroup';

import {testRadioGroupProps} from './testConditions';

describe('RadioGroup', () => {
  afterEach(cleanup);

  it('should render snapshot successfully', () => {
    const {asFragment} = render(<RadioGroup {...testRadioGroupProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
