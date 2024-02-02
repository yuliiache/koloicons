import React from 'react';
import {render} from '@testing-library/react';

import {LabelSize, LabelTheme} from '../constants';
import Label from '../Label';

describe('Label component', () => {
  Object.values(LabelTheme).forEach((theme) => {
    Object.values(LabelSize).forEach((size) => {
      it(`renders correctly for ${theme} style with ${size} size`, () => {
        const text = theme.charAt(0).toUpperCase() + theme.slice(1);
        const props = {
          text,
          theme,
          size,
        };
        const {asFragment} = render(<Label {...props} />);

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
