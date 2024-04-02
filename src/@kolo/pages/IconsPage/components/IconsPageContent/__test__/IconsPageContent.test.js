import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {render} from '@testing-library/react';

import IconsPageContent from '../IconsPageContent';

const leftAsideText = 'Left Aside Content';
const rightAsideText = 'Right Aside Content';
const ChildComponent = () => <div>Child Component</div>;
const MockLeftAsideContent = () => <div>{leftAsideText}</div>;
const MockRightAsideContent = () => <div>{rightAsideText}</div>;

describe('IconsPageContent', () => {
  const props = {
    isLeftPanelOpen: false,
    isRightPanelOpen: false,
    LeftAsideContent: <MockLeftAsideContent />,
    RightAsideContent: <MockRightAsideContent />,
  };
  const renderComponent = (props) =>
    render(
      <BrowserRouter>
        <IconsPageContent {...props}>
          <ChildComponent />
        </IconsPageContent>
      </BrowserRouter>
    );

  it('renders correctly and matches snapshot', () => {
    const {asFragment} = renderComponent(props);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders left aside component when left panel is open', () => {
    const {getByText} = renderComponent({...props, isLeftPanelOpen: true});

    expect(getByText(leftAsideText)).toBeInTheDocument();
  });

  it('renders right aside component when right panel is open', () => {
    const {getByText} = renderComponent({...props, isRightPanelOpen: true});

    expect(getByText(rightAsideText)).toBeInTheDocument();
  });

  it('does not render left aside component when left panel is close', () => {
    const {queryByText} = renderComponent(props);

    expect(queryByText(leftAsideText)).toBeNull();
  });

  it('does not render right aside component when right panel is close', () => {
    const {queryByText} = renderComponent(props);

    expect(queryByText(rightAsideText)).toBeNull();
  });
});
