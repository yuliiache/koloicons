import {cleanup, render, screen} from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import OptionList from '../OptionList';

describe('OptionList Component', () => {
  afterEach(cleanup);

  const commonProps = {
    title: 'Test',
    list: ['Item 1', 'Item 2', 'Item 3'],
  };

  it('renders OptionList component with title and list items', () => {
    const {asFragment} = render(<OptionList {...commonProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders OptionList component with specific title', () => {
    render(<OptionList {...commonProps} />);

    expect(screen.getByText(commonProps.title)).toBeInTheDocument();
  });
});
