import * as IconSearchHooks from '@kolo/pages/IconsPage/components/IconsPagePanel/useIconSearch';
import {fireEvent, render, screen} from '@testing-library/react';

import IconsByQuery from '../IconsByQuery';
import * as IconsByQueryHooks from '../useIconsByQuery';

jest.mock('@kolo/pages/IconsPage/components/IconsPagePanel/useIconSearch');
jest.mock('../useIconsByQuery');

describe('IconsByQuery Component', () => {
  beforeEach(() => {
    jest.spyOn(IconSearchHooks, 'default').mockReturnValue({
      currentSearchQuery: 'searchQuery',
      handleIconSearchClick: jest.fn(),
    });

    jest.spyOn(IconsByQueryHooks, 'default').mockReturnValue({
      iconsSearchResult: [
        {
          id: '1',
          name: 'IconName',
          style: ['solid'],
          size: '24',
          category: {name: 'CategoryName', number: 1},
        },
      ],
      hasMoreIcons: true,
      handleLoadMoreIcons: jest.fn(),
      getPreferredStyle: jest.fn().mockImplementation((styles) => styles[0]),
    });
  });

  it('renders without crashing and matches snapshot', () => {
    const {asFragment} = render(<IconsByQuery />);
    expect(screen.getByText('Search Results:')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays search results correctly', () => {
    render(<IconsByQuery />);
    expect(screen.getByText('IconName')).toBeInTheDocument();
  });

  it('handles "Load More" button click', () => {
    render(<IconsByQuery />);
    const loadMoreButton = screen.getByText('Load More');
    fireEvent.click(loadMoreButton);
  });
});
