import React from 'react';
import {render, screen} from '@testing-library/react';

import {Accept} from '../Accept';

jest.mock('./accept.png', () => 'acceptImage');

describe('Accept', () => {
  it('should render snapshot successfuly', () => {
    render(
      <Accept
        alt="alt accept text"
        width={100}
        height={100}
      />
    );

    const accept = screen.getByRole('img');

    expect(accept).toMatchSnapshot();
  });
});
