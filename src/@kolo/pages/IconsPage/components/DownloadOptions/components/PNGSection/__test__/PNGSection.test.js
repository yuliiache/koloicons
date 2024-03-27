import {fireEvent, render, screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import PNGDownloadSection from '../PNGDownloadSection';

import styles from '@kolo/pages/IconsPage/components/DownloadOptions/DownloadOptions.module.scss';

describe('PNGDownloadSection component', () => {
  it('renders correctly and matches snapshot', () => {
    const {asFragment} = render(
      <PNGDownloadSection
        isPro={true}
        isAuthenticated={true}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders  correctly and synchronously change onClick', () => {
    render(
      <PNGDownloadSection
        isPro={false}
        isAuthenticated={true}
      />
    );

    expect(screen.getByRole('button', {name: /png 60px/i})).toBeInTheDocument;

    fireEvent.click(screen.getByText('96px'));

    expect(screen.getByRole('button', {name: /png 96px/i})).toBeInTheDocument;

    const buttonsAfterClick = screen.getAllByRole('button', {name: /96px/i});
    const targetButtonAfterClick = buttonsAfterClick.find(
      (button) => button.textContent.includes('96px') && button.className.includes(styles['SizeButton'])
    );
    expect(targetButtonAfterClick).toHaveClass(styles['SizeButton-selected']);
  });
});
