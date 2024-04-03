import React from 'react';
import {render} from '@testing-library/react';

import CollectionIconCard from '../CollectionIconCard';

const commonProps = {
  category: {
    name: 'Financial',
    number: 7,
    id: '5d45660c241234001664820c',
  },
  name: 'Mobile payment',
  size: '60px',
  style: 'line',
  id: '5d6a87bdef38414cb068e989',
  isFree: false,
};

describe('Collection Icon Card component', () => {
  let props = {
    icon: {
      name: commonProps.name,
      style: commonProps.style,
      size: commonProps.size,
      id: commonProps.id,
    },
    categoryNumber: commonProps.category.number,
    categoryName: commonProps.category.name,
    isFree: commonProps.isFree,
  };

  const renderPage = () => render(<CollectionIconCard {...props} />);

  it('renders correctly and matches snapshot', () => {
    const {asFragment} = renderPage();

    expect(asFragment()).toMatchSnapshot();
  });
});
