import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {render} from '@testing-library/react';

import {LINK_TYPES} from '../constants';
import {Link} from '../Link';

describe('Link component', () => {
  Object.values(LINK_TYPES).forEach((type) => {
    ['internal', 'external'].forEach((linkType) => {
      const url = linkType === 'internal' ? '/' : 'http://external.com';
      const text = linkType === 'internal' ? 'Internal link' : 'External link';

      it(`renders correctly for ${linkType} link with type ${type}`, () => {
        const props = {
          url,
          text,
          type,
        };

        const {asFragment} = render(
          <MemoryRouter>
            <Link {...props} />
          </MemoryRouter>
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
