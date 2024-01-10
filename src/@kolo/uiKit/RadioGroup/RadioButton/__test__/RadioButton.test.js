import React from 'react';
import {cleanup, fireEvent, render, waitFor} from '@testing-library/react';

import {RADIO_BUTTON_TEST_ID} from '../constant';
import RadioButton from '../RadioButton';
import {testRadioButtonProps} from '../testConditions';

describe('RadioButton', () => {
  afterEach(cleanup);

  it('should render snapshot successfully', () => {
    const {asFragment} = render(
      testRadioButtonProps.map(({option, isSelected, onChange}) => (
        <RadioButton
          key={option.id}
          option={option}
          onChange={onChange}
          isSelected={isSelected}
        />
      ))
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should have "checked" attribute with the value "true" / "false"', () => {
    const {getAllByTestId} = render(
      testRadioButtonProps.map(({option, isSelected, onChange}) => (
        <RadioButton
          key={option.id}
          option={option}
          onChange={onChange}
          isSelected={isSelected}
        />
      ))
    );

    const radioButtons = getAllByTestId(RADIO_BUTTON_TEST_ID);

    radioButtons.forEach((radioButton, index) => {
      const {isSelected} = testRadioButtonProps[index];

      expect(radioButton.checked).toBe(isSelected);
    });
  });

  it('should call onChange function from props when button was switched', () => {
    const {getAllByTestId} = render(
      testRadioButtonProps.map(({option, isSelected, onChange}) => (
        <RadioButton
          key={option.id}
          option={option}
          onChange={onChange}
          isSelected={isSelected}
        />
      ))
    );

    const radioButtons = getAllByTestId(RADIO_BUTTON_TEST_ID);

    radioButtons.forEach(async (radioButton, index) => {
      const {onChange} = testRadioButtonProps[index];

      fireEvent.click(radioButton);

      await waitFor(() => expect(onChange).toHaveBeenCalled());
    });
  });
});
