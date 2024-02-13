import React from 'react';
import {render, screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import Footer from '../Footer';

jest.mock('@kolo/uiKit/HelpLinks/HelpLinks', () => {
  const MockHelpLinks = () => <div data-testid="mock-help-links">MockHelpLinks</div>;
  MockHelpLinks.displayName = 'MockHelpLinks';
  return MockHelpLinks;
});

jest.mock('@kolo/uiKit/SocialLinks/SocialLinks', () => {
  const MockSocialLinks = () => <div data-testid="mock-social-links">MockSocialLinks</div>;
  MockSocialLinks.displayName = 'MockSocialLinks';
  return MockSocialLinks;
});
describe('Footer Component', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2024, 0, 1));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders without crashing and matches the snapshot', () => {
    const {asFragment} = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the current year correctly', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`Copyright © ${currentYear} KOLO ICONS`)).toBeInTheDocument();
  });

  it('renders HelpLinks and SocialLinks contents', () => {
    render(<Footer />);
    expect(screen.getByTestId('mock-help-links')).toBeInTheDocument();
    expect(screen.getByTestId('mock-social-links')).toBeInTheDocument();
  });
});
