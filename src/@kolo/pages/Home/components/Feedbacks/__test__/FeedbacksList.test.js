import React from 'react';
import {Provider} from 'react-redux';
import {useSelector} from 'react-redux';
import {render} from '@testing-library/react';
import store from 'app/store';

import FeedbacksList from '../FeedbacksList';

const mockFeedbacks = [
  {
    name: 'John Doe',
    text: 'This is a sample feedback text.',
    company: 'Sample Company',
    avatarPath: 'avatar.jpg',
    url: 'https://example.com',
  },
  {
    name: 'Jane Smith',
    text: 'Another feedback text.',
    company: 'Another Company',
    avatarPath: 'avatar2.jpg',
    url: 'https://example.com',
  },
];

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('FeedbacksList Component', () => {
  it('renders snapshot correctly', () => {
    useSelector.mockReturnValue(mockFeedbacks);

    const {asFragment} = render(
      <Provider store={store}>
        <FeedbacksList />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
