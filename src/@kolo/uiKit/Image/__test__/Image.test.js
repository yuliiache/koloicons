import React from 'react';
import {render, screen} from '@testing-library/react';

import {Image} from '../Image';

describe('Image', () => {
  it('should render snapshot successfuly', () => {
    render(
      <Image
        src="imagePath"
        alt="alt image text"
        width={160}
        height={160}
      />
    );

    const image = screen.getByRole('img');

    expect(image).toMatchSnapshot();
  });
});
