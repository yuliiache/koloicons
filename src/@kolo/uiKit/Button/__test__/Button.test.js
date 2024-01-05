import React from 'react';
import {cleanup, render, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {Button} from '../Button';
import {BUTTON_COLOR, BUTTON_SIZE, BUTTON_TEST_ID} from '../constants';

describe('Button component', () => {
  afterEach(cleanup);

  const commonProps = {
    size: 'small',
    color: 'primary',
    text: 'Common Text',
    isDisabled: false,
    onClick: jest.fn(),
    type: 'button',
  };

  const colors = Object.values(BUTTON_COLOR);
  const sizes = Object.values(BUTTON_SIZE);

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
