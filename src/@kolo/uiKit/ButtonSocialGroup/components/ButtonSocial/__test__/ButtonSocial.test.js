import React from 'react';
import {cleanup, render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {ButtonSocial} from '../ButtonSocial';
import {BUTTON_SOCIAL_TEST_ID} from '../constants';

describe('ButtonSocial component', () => {
  afterEach(() => {
    cleanup();
  });

  describe('snapshot', () => {
    const renderIconFunc = () => <span>MockedIcon</span>;

    it('should render snapshot without icon render function', () => {
      const props = {
        text: 'Facebook',
        onClick: jest.fn(),
      };

      const {asFragment} = render(<ButtonSocial {...props} />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should render succesfully without status prefix without connect status', () => {
      const props = {
        text: 'Facebook',
        renderIcon: renderIconFunc,
        onClick: jest.fn(),
      };

      const {asFragment} = render(<ButtonSocial {...props} />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should render succesfully with status prefix with connect status', () => {
      const props = {
        text: 'Facebook',
        isConnected: true,
        renderIcon: renderIconFunc,
        shouldShowStatus: true,
        onClick: jest.fn(),
      };

      const {asFragment} = render(<ButtonSocial {...props} />);

      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('should has text without status prefix when shouldShowStatus property is not provided', () => {
    const buttonText = 'Facebook';
    const props = {
      text: buttonText,
      onClick: jest.fn(),
    };

    render(<ButtonSocial {...props} />);

    const buttonSocialTextElement = screen.getByText(buttonText);

    expect(buttonSocialTextElement).toBeInTheDocument();
  });

  it('should has appropriate prefix in text', () => {
    const buttonText = 'Facebook';
    const props = {
      text: buttonText,
      shouldShowStatus: true,
      isConnected: true,
      onClick: jest.fn(),
    };

    render(<ButtonSocial {...props} />);

    const buttonSocialTextElement = screen.getByText(`Connect ${buttonText}`);

    expect(buttonSocialTextElement).toBeInTheDocument();
  });

  it('should has appropriate prefix in text when button is disconnected', () => {
    const buttonText = 'Facebook';

    const props = {
      text: buttonText,
      shouldShowStatus: true,
      isConnected: false,
      onClick: jest.fn(),
    };

    render(<ButtonSocial {...props} />);

    const buttonSocialTextElement = screen.getByText(`Disconnect ${buttonText}`);

    expect(buttonSocialTextElement).toBeInTheDocument();
  });

  it('should call onClick function', async () => {
    const onClick = jest.fn();
    const props = {
      text: 'test',
      onClick,
    };

    render(<ButtonSocial {...props} />);

    const buttonSocialElement = screen.getByTestId(BUTTON_SOCIAL_TEST_ID);

    userEvent.click(buttonSocialElement);

    await waitFor(() => expect(onClick).toHaveBeenCalled());
  });
});
