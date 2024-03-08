import React from 'react';
import Icon from '@kolo/uiKit/Icons';
import {cleanup, render, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ButtonIcon from '../ButtonIcon';
import {BUTTON_ICON_TEST_ID, ButtonIconType} from '../constants';

describe('ButtonIcon component', () => {
  afterEach(cleanup);

  const commonProps = {
    children: <Icon.Add />,
  };

  const types = Object.values(ButtonIconType);

  describe('snapshot', () => {
    const testCases = [{description: 'with tooltips', props: {tooltipLabel: 'Add'}}];

    types.forEach((type) => {
      const description = `${type} type`;
      const props = {type};
      testCases.push({description, props});
    });

    test.each(testCases)('should render %s snapshot', ({description, props}) => {
      const {asFragment} = render(
        <ButtonIcon
          {...commonProps}
          {...props}
        />
      );

      expect(asFragment()).toMatchSnapshot(description);
    });
  });

  it('should call onClick function', async () => {
    const onClick = jest.fn();
    const {getByTestId} = render(
      <ButtonIcon
        {...commonProps}
        onClick={onClick}
      />
    );
    const buttonIconElement = getByTestId(BUTTON_ICON_TEST_ID);

    userEvent.click(buttonIconElement);

    await waitFor(() => expect(onClick).toHaveBeenCalled());
  });
});
