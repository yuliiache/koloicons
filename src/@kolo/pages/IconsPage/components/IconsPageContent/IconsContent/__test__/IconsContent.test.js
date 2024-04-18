import {fireEvent, render, screen} from '@testing-library/react';

import IconsContent from '../IconsContent';
import * as IconsContentHook from '../useIconsContent';

jest.mock('../useIconsContent');

describe('IconsContent Component', () => {
  beforeEach(() => {
    jest.spyOn(IconsContentHook, 'default').mockReturnValue({
      categorizedIcons: {
        Financial: [
          {
            category: {name: 'Financial', number: 7},
            id: '5d6a87bdef38414cb068e989',
            name: 'Mobile payment',
            size: '60px',
            style: 'line',
          },
        ],
      },
      hasMoreCategories: true,
      handleLoadMoreIconsByCategory: jest.fn,
      handleDownloadIconsByCategory: jest.fn,
      isPro: false,
    });
  });

  it('renders without crashing and matches snapshot', () => {
    const {asFragment} = render(<IconsContent />);
    expect(screen.getByText('Financial')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays Icons correctly', () => {
    render(<IconsContent />);
    expect(screen.getByText('Mobile payment')).toBeInTheDocument();
  });

  it('handles "Load More" button click', () => {
    render(<IconsContent />);
    const loadMoreButton = screen.getByText('Load More');
    fireEvent.click(loadMoreButton);
  });
});
