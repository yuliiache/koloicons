import React from 'react';
import {render, screen} from '@testing-library/react';

import {Avatar} from '../Avatar';

jest.mock('./avatar.png', () => 'avatarImage');

describe('Avatar', () => {
  it('should render snapshot successfuly', () => {
    render(<Avatar alt="alt avatar text" />);

    const avatar = screen.getByRole('img');

    expect(avatar).toMatchSnapshot();
  });
});
