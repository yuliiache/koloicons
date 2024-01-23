import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {render} from '@testing-library/react';

import {LinkType} from '../constants';
import Link from '../Link';

describe('Link component', () => {
  Object.values(LinkType).forEach((type) => {
    ['internal', 'external'].forEach((linkType) => {
      const url = linkType === 'internal' ? '/' : 'http://external.com';
      const text = linkType === 'internal' ? 'Internal link' : 'External link';
      const props = {
        url,
        type,
        children: text,
      };

      it(`renders correctly for ${linkType} link with type ${type}`, () => {
        const {asFragment} = render(
          <MemoryRouter>
            <Link {...props} />
          </MemoryRouter>
        );

        expect(asFragment()).toMatchSnapshot();
      });

      it(`renders correctly for ${linkType} link with type ${type} that should open in a new tab`, () => {
        const updatedProps = {
          ...props,
          isInNewTab: true,
        };

        const {asFragment} = render(
          <MemoryRouter>
            <Link {...updatedProps} />
          </MemoryRouter>
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
