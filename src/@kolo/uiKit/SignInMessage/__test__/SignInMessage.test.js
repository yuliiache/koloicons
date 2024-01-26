import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {cleanup, render} from '@testing-library/react';

import {SIGN_IN_MESSAGE_TITLE_TEST_ID} from '../constants';
import SignInMessage from '../SignInMessage';

describe('SignInMessage', () => {
  afterEach(cleanup);

  const commonProps = {
    title: 'Download',
  };

  it('should render SignInMessage snapshot', () => {
    const {asFragment} = render(
      <Router>
        <SignInMessage {...commonProps} />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render specific text based on title', () => {
    const {getByTestId} = render(
      <Router>
        <SignInMessage {...commonProps} />
      </Router>
    );

    const titleElement = getByTestId(SIGN_IN_MESSAGE_TITLE_TEST_ID);

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(`${commonProps.title}`);
  });
});
