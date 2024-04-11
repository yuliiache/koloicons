import {Provider, useSelector} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {cleanup, render} from '@testing-library/react';
import store from 'app/store';

import {MonthPack} from '../MonthPack';

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
];

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('MonthPackComponent', () => {
  afterEach(cleanup);
  it('should match snapshot successfully', () => {
    useSelector.mockReturnValue(mockedResponse);

    const {asFragment} = render(
      <BrowserRouter>
        <Provider store={store}>
          <MonthPack />
        </Provider>
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
