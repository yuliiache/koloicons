import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';

import ColorPicker from '../ColorPicker';
import {COLORPICKER_TEST_ID,ColorPickerSize} from '../constants';

describe('ColorPicker component', () => {
  Object.values(ColorPickerSize).forEach((size) => {
    const onChange = jest.fn();
    const props = {
      size,
      onChange,
      value: '#000000',
    };

    it(`should renders correctly with ${size} size`, () => {
      const {asFragment} = render(<ColorPicker {...props} />);

      expect(asFragment()).toMatchSnapshot();
    });

    it(`with ${size} size triggers onChange event`, () => {
      render(<ColorPicker {...props} />);

      const colorPicker = screen.getByTestId(COLORPICKER_TEST_ID);
      const newColor = '#269964';

      fireEvent.change(colorPicker, {target: {value: newColor}});

      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });
});
