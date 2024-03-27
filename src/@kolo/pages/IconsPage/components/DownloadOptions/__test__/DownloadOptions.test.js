import {render, screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import DownloadOptions from '../DownloadOptions';

jest.mock('@kolo/pages/IconsPage/components/DownloadOptions/components/UnlockAllFormats/UnlockAllFormats', () => {
  const MockUnlockAllFormats = () => <div>Mocked UnlockAllFormats</div>;
  return MockUnlockAllFormats;
});

jest.mock('@kolo/uiKit/SignInMessage/SignInMessage', () => {
  const MockSignInMessage = () => <div>Mocked SignInMessage</div>;
  return MockSignInMessage;
});

describe('DownloadOptions component', () => {
  it('basic render with snapshot', () => {
    const {asFragment} = render(
      <DownloadOptions
        isAuthenticated={false}
        isPro={false}
      />
    );
    expect(screen.getByText(/mocked unlockallformats/i)).toBeInTheDocument;
    expect(screen.getByRole('button', {name: /png 60px/i})).toBeInTheDocument;
    expect(screen.getByRole('button', {name: /svg/i})).toBeInTheDocument;
    expect(screen.getByText(/mocked signinmessage/i)).toBeInTheDocument;
    expect(asFragment()).toMatchSnapshot();
  });

  it('only displays UnlockAllFormats for authenticated, non-Pro users', () => {
    render(
      <DownloadOptions
        isAuthenticated={true}
        isPro={false}
      />
    );
    expect(screen.getByText(/mocked unlockallformats/i)).toBeInTheDocument;
    expect(screen.queryByText(/mocked signinmessage/i)).not.toBeInTheDocument;
  });

  it('does not display SignInMessage or UnlockAllFormats for Pro users', () => {
    render(
      <DownloadOptions
        isAuthenticated={true}
        isPro={true}
      />
    );
    expect(screen.queryByText(/mocked unlockallformats/i)).not.toBeInTheDocument;
    expect(screen.queryByText(/mocked signinmessage/i)).not.toBeInTheDocument;
  });
});
