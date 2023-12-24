import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';

import {ButtonSocialGroup} from '../ButtonSocialGroup';
import {ButtonSocial} from '../components/ButtonSocial/ButtonSocial';
import {BUTTON_SOCIAL_TEST_ID} from '../components/ButtonSocial/constants';

describe('ButtonSocialGroup component', () => {
  afterEach(() => cleanup());

  it('should render snapshot successfuly', () => {
    const props = {
      text: 'Facebook',
      renderIcon: () => <span>MockedIcon</span>,
      onClick: jest.fn(),
    };

    const {asFragment} = render(
      <ButtonSocialGroup>
        <ButtonSocial {...props} />
        <ButtonSocial
          shouldShowStatus={Boolean(true)}
          {...props}
        />
        <ButtonSocial
          shouldShowStatus={Boolean(true)}
          isConnected={Boolean(true)}
          {...props}
        />
      </ButtonSocialGroup>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render all button when button are provided', () => {
    const props = {
      text: 'Facebook',
      renderIcon: () => <span>MockedIcon</span>,
      onClick: jest.fn(),
    };

    render(
      <ButtonSocialGroup>
        <ButtonSocial {...props} />
        <ButtonSocial
          shouldShowStatus={Boolean(true)}
          {...props}
        />
        <ButtonSocial
          shouldShowStatus={Boolean(true)}
          isConnected={Boolean(true)}
          {...props}
        />
      </ButtonSocialGroup>
    );

    const buttonSocialElement = screen.getAllByTestId(BUTTON_SOCIAL_TEST_ID);

    expect(buttonSocialElement).toHaveLength(3);
  });
});
