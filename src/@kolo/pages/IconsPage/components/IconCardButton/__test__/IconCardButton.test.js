import React from 'react';
import {render} from '@testing-library/react';

import IconCardButton from '../IconCardButton';

describe('IconCardButton', () => {
  it('renders correctly', () => {
    const {container} = render(<IconCardButton />);
    expect(container).toMatchSnapshot();
  });
});
