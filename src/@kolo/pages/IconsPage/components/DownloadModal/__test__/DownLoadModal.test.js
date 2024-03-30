import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {render} from '@testing-library/react';
import store from 'app/store';

import DownloadModal from '../DownloadModal';

describe('Download Modal', () => {
  it('renders correctly and matches snapshot', () => {
    const {asFragment} = render(
      <Provider store={store}>
        <BrowserRouter>
          <DownloadModal />
        </BrowserRouter>
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
