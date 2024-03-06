import React from 'react';
import {render, screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import IconCard from '../IconCard';

jest.mock('../hooks/useIconCard', () => ({
  __esModule: true,
  default: () => ({
    handleClick: jest.fn(),
    actionIcon: <span>ActionIcon</span>,
    tooltipLabel: 'SampleTooltip',
    iconCardClasses: 'mockedClass',
  }),
}));

const iconData = {
  name: 'mockIcon',
  style: 'outline',
  size: '48px',
  id: 'icon123',
  category: {
    number: 1,
    name: 'sampleName',
  },
  isFree: false,
};

describe('IconCard', () => {
  let props;

  beforeEach(() => {
    props = {
      icon: {
        name: iconData.name,
        style: iconData.style,
        size: iconData.size,
        id: iconData.id,
      },
      categoryNumber: iconData.category.number,
      categoryName: iconData.category.name,
      isFree: iconData.isFree,
    };

    render(<IconCard {...props} />);
  });

  it('renders correctly', () => {
    expect(screen.getByText('mockIcon')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders snapshot', () => {
    const {asFragment} = render(<IconCard {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
