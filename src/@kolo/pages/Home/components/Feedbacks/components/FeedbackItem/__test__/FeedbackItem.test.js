import React from 'react';
import {render} from '@testing-library/react';

import {FEEDBACK_TEXT_TEST_ID} from '../constants';
import FeedbackItem from '../FeedbackItem';

const commonProps = {
  name: 'John Doe',
  text: 'This is a sample feedback text.',
  company: 'Sample Company',
  avatarPath: 'avatar.jpg',
  url: 'https://example.com',
};

describe('FeedbackItem Component', () => {
  it('renders snapshot correctly', () => {
    const {asFragment} = render(<FeedbackItem {...commonProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders text correctly', () => {
    const text = 'Sample text';
    const {getByTestId} = render(
      <FeedbackItem
        {...commonProps}
        text={text}
      />
    );

    const feedbackTextElement = getByTestId(FEEDBACK_TEXT_TEST_ID);

    expect(feedbackTextElement.textContent).toBe(text);
  });
});
