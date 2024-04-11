import {Provider, useSelector} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {cleanup, render} from '@testing-library/react';
import store from 'app/store';

import FreePacks from '../FreePacks';

const mockedResponse = [
  {
    'name': 'Logos',
    'number': 39,
    'id': '5d45660c2412340016648240',
    'isFree': true,
    'icons': [
      {
        'id': '5d6a8959ef38414cb068f5e6',
        'name': 'Android',
        'style': 'line',
        'size': '60px',
      },
      {
        'id': '5d6a8959ef38414cb068f5e1',
        'name': 'Apple',
        'style': 'line',
        'size': '60px',
      },
    ],
  },
  {
    'name': 'Tools',
    'number': 42,
    'id': '5d45660c2412340016648220',
    'isFree': true,
    'icons': [
      {
        'id': '5d6a8977ef38414cb068f6cc',
        'name': 'Painting',
        'style': 'line',
        'size': '60px',
      },
      {
        'id': '5d6a897fef38414cb068f70d',
        'name': 'Putty knife',
        'style': 'line',
        'size': '60px',
      },
    ],
  },
  {
    'name': 'Awards',
    'number': 55,
    'id': '5d45660c2412340016648234',
    'isFree': true,
    'icons': [
      {
        'id': '5d6a8a21ef38414cb068fbe5',
        'name': 'Trophy star',
        'style': 'line',
        'size': '60px',
      },
      {
        'id': '5d6a8a2aef38414cb068fc2b',
        'name': 'Award star',
        'style': 'line',
        'size': '60px',
      },
    ],
    'isFreeMonthSet': true,
  },
];

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('FreePacks component', () => {
  afterEach(cleanup);

  it('should render snapshot successfully', () => {
    useSelector.mockReturnValue(mockedResponse);

    const {asFragment} = render(
      <BrowserRouter>
        <Provider store={store}>
          <FreePacks />
        </Provider>
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
