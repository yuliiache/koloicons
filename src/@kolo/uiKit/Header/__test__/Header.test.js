import {BrowserRouter as Router} from 'react-router-dom';
import {cleanup, render} from '@testing-library/react';

import {HiddenPath} from  "../constants";
import Header from '../Header';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(() => ({pathname: '/'})),
}));

describe('Header component', () => {
  afterEach(cleanup);

  it('snapshot renders correctly', () => {
    const {asFragment} = render(
      <Router>
        <Header />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly when not hidden', () => {
    const {container} = render(
      <Router>
        <Header />
      </Router>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render correctly when hidden on login page', () => {
    jest.spyOn(require('react-router-dom'), 'useLocation').mockImplementationOnce(() => ({pathname: HiddenPath.LOGIN}));
    const {container} = render(
      <Router>
        <Header />
      </Router>
    );

    expect(container).toMatchSnapshot();
  });
});
