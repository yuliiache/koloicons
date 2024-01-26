import {BrowserRouter as Router} from 'react-router-dom';
import {cleanup, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ButtonLink from '../ButtonLink';

describe('ButtonLink component', () => {
  afterEach(cleanup);

  const commonProps = {
    text: 'Link',
    isDisabled: false,
    url: '/',
  };

  describe('snapshot', () => {
    it('should render button link', () => {
      const {asFragment} = render(
        <Router>
          <ButtonLink {...commonProps} />
        </Router>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('should have text', () => {
    const buttonText = 'Text';
    const {getByText} = render(
      <Router>
        <ButtonLink
          {...commonProps}
          text={buttonText}
        />
      </Router>
    );
    const buttonTextElement = getByText(buttonText);

    expect(buttonTextElement).toBeInTheDocument();
  });

  it('should have href attribute', () => {
    render(
      <Router>
        <ButtonLink {...commonProps} />
      </Router>
    );

    const linkElement = screen.getByRole('link');

    expect(linkElement).toHaveAttribute('href', `${commonProps.url}`);
  });

  it('should navigate when clicked', () => {
    render(
      <Router>
        <ButtonLink {...commonProps} />
      </Router>
    );

    const linkElement = screen.getByRole('link');

    expect(linkElement).toBeInTheDocument();

    userEvent.click(linkElement);

    expect(window.location.pathname).toBe(`${commonProps.url}`);
  });
});
