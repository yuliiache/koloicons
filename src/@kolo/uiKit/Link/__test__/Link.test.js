import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {fireEvent, render, screen} from '@testing-library/react';

import {LinkType} from '../constants';
import Link from '../Link';

describe('Link component', () => {
  const renderLink = (props) => render(<Link {...props} />, {wrapper: BrowserRouter});

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
        const {asFragment} = renderLink(props);

        expect(asFragment()).toMatchSnapshot();
      });

      it(`renders correctly for ${linkType} link with type ${type} that should open in a new tab`, () => {
        const updatedProps = {
          ...props,
          isInNewTab: true,
        };

        const {asFragment} = renderLink(updatedProps);

        expect(asFragment()).toMatchSnapshot();
      });

      it('should call onClick function when user click the link', () => {
        const onClickMock = jest.fn();
        const updatedProps = {
          ...props,
          onClick: onClickMock,
        };
        renderLink(updatedProps);

        const link = screen.getByText(text);

        fireEvent.click(link);

        expect(onClickMock).toHaveBeenCalled();
      });
    });
  });
});
