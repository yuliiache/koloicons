import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import SocialLinks from '../SocialLinks';

describe('SocialLinks Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders without crashing', () => {
    const {asFragment} = render(<SocialLinks />);
    expect(screen.getAllByRole('link')).toHaveLength(2);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders Instagram icon', () => {
    const {asFragment} = render(<SocialLinks />);
    expect(screen.getByTestId('icon-instagram')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders Dribble icon', () => {
    const {asFragment} = render(<SocialLinks />);
    expect(screen.getByTestId('icon-dribble')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('contains the correct Instagram link', () => {
    render(<SocialLinks />);
    const icon = screen.getByTestId('icon-instagram');
    const link = icon.closest('a');
    expect(link).toHaveAttribute('href', 'https://www.instagram.com/koloicons/');
  });

  it('contains the correct Dribble link', () => {
    render(<SocialLinks />);
    const icon = screen.getByTestId('icon-dribble');
    const link = icon.closest('a');
    expect(link).toHaveAttribute('href', 'https://dribbble.com/Pictogramer');
  });
});
