import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {render} from '@testing-library/react';
import store from 'app/store';

import DownloadModalIcon from '../DownloadModalIcon';

describe('Download Modal Icon', () => {
  it('renders correctly and matches snapshot', () => {
    const {asFragment} = render(
      <Provider store={store}>
        <MemoryRouter>
          <DownloadModalIcon />
        </MemoryRouter>
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
