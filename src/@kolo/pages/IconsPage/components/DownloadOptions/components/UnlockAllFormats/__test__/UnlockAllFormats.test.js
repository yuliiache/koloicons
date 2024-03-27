import {BrowserRouter} from 'react-router-dom';
import {cleanup, fireEvent, render} from '@testing-library/react';
import {AppRoute} from 'constants/AppRoute';

import UnlockAllFormats from '../UnlockAllFormats';

const price = 2.5;

describe('UnlockAllFormats component', () => {
  afterEach(cleanup);

  it('should render snapshot successfully', () => {
    const {asFragment} = render(
      <BrowserRouter>
        <UnlockAllFormats price={price} />
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('"All benefits" link should redirect correctly', () => {
    const {getByText} = render(
      <BrowserRouter history={history}>
        <UnlockAllFormats price={price} />
      </BrowserRouter>
    );

    const allBenefitsLink = getByText('All Benefits');

    fireEvent.click(allBenefitsLink);

    expect(window.location.pathname).toBe(AppRoute.PRICING);
  });

  it('"Purchase" button should redirect correctly', () => {
    const {getByText} = render(
      <BrowserRouter history={history}>
        <UnlockAllFormats price={price} />
      </BrowserRouter>
    );

    const purchaseButton = getByText('Purchase');

    fireEvent.click(purchaseButton);

    expect(window.location.pathname).toBe(AppRoute.PRICING);
  });

  it('should render price prop successfully', () => {
    const {getByText} = render(
      <BrowserRouter history={history}>
        <UnlockAllFormats price={price} />
      </BrowserRouter>
    );
    const priceToFixed = getByText(`$${price.toFixed(2)}`);

    expect(priceToFixed).toBeInTheDocument();
  });
});
