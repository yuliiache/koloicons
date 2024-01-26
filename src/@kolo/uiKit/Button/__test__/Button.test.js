import React from 'react';
import {cleanup, render, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../Button';
import {BUTTON_TEST_ID} from '../constants';
import {ButtonColor, ButtonSize, ButtonType} from '../constants';

describe('Button component', () => {
  afterEach(cleanup);

  const commonProps = {
    text: 'Common Text',
    size: 'small',
    color: 'primary',
    isDisabled: false,
    onClick: jest.fn(),
    type: ButtonType.BUTTON,
  };

  const colors = Object.values(ButtonColor);
  const sizes = Object.values(ButtonSize);

  describe('snapshot', () => {
    const testCases = [{description: 'disabled state', props: {isDisabled: true}}];

    colors.forEach((color) => {
      sizes.forEach((size) => {
        const description = `${color} color, ${size} size`;
        const props = {color, size};
        testCases.push({description, props});
      });
    });

    test.each(testCases)('should render %s snapshot', ({description, props}) => {
      const {asFragment} = render(
        <Button
          {...commonProps}
          {...props}
        />
      );

      expect(asFragment()).toMatchSnapshot(description);
    });
  });

  it('should have text', () => {
    const buttonText = 'Text';
    const {getByText} = render(
      <Button
        {...commonProps}
        text={buttonText}
      />
    );
    const buttonTextElement = getByText(buttonText);

    expect(buttonTextElement).toBeInTheDocument();
  });

  it('should call onClick function', async () => {
    const onClick = jest.fn();
    const {getByTestId} = render(
      <Button
        {...commonProps}
        text="OnClick"
        onClick={onClick}
      />
    );
    const buttonElement = getByTestId(BUTTON_TEST_ID);

    userEvent.click(buttonElement);

    await waitFor(() => expect(onClick).toHaveBeenCalled());
  });
});
