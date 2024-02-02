import React from 'react';
import {fireEvent, render} from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import Input from '../Input';

const renderInputWithProps = (props) => {
  return render(<Input {...props} />);
};

describe('Input component tests', () => {
  const commonProps = {
    id: 'test',
    label: 'Test Label',
    placeholder: 'Enter text',
    type: 'text',
    hasAutoFocus: false,
    value: 'Test Value',
    onChange: jest.fn(),
  };

  const testCases = [
    {
      name: 'renders with required props',
      props: {
        id: 'test',
        type: 'text',
        value: 'value',
        onChange: jest.fn(),
      },
    },
    {
      name: 'renders with all props',
      props: {
        ...commonProps,
        isDisabled: false,
        errorMessage: 'Error message',
        hasAutoFocus: false,
        hint: 'Hint text',
      },
    },
    {
      name: 'handles input change',
      props: {...commonProps, label: 'Test Label'},
      action: (getByLabelText) => {
        const inputElement = getByLabelText('Test Label');
        fireEvent.change(inputElement, {target: {value: 'New Value'}});
      },
    },
    {
      name: 'renders as disabled',
      props: {...commonProps, isDisabled: true},
      assertion: (container) => {
        expect(container.querySelector('input')).toBeDisabled();
      },
    },
    {
      name: 'renders with invalid state',
      props: {...commonProps, errorMessage: 'Invalid input'},
      assertion: (container) => {
        expect(container.querySelector('.invalid')).toBeInTheDocument();
      },
    },
    {
      name: 'renders with hint',
      props: {...commonProps, hint: 'Hint text'},
      assertion: (container) => {
        expect(container.querySelector('.inputGroupHint')).toBeInTheDocument();
      },
    },
    {
      name: 'renders with label',
      props: {...commonProps, label: 'Test Label'},
      assertion: (container) => {
        expect(container.querySelector('.inputGroupLabel')).toBeInTheDocument();
      },
    },
    {
      name: 'renders with placeholder',
      props: {...commonProps, placeholder: 'Enter text'},
      assertion: (container) => {
        expect(container.querySelector('input')).toHaveAttribute('placeholder', 'Enter text');
      },
    },
    {
      name: 'renders with autofocus',
      props: {...commonProps, hasAutoFocus: true},
      assertion: (container) => {
        expect(container.querySelector('input')).toHaveFocus();
      },
    },
    {
      name: 'renders without autofocus',
      props: {...commonProps, hasAutoFocus: false},
      assertion: (container) => {
        expect(container.querySelector('input')).not.toHaveFocus();
      },
    },
  ];

  testCases.forEach(({name, props, action, assertion}) => {
    it(`${name}`, () => {
      const {container, getByLabelText} = renderInputWithProps(props);
      if (action) action(getByLabelText);
      if (assertion) assertion(container);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Input component snapshots', () => {
    for (const isDisabled of [true, false]) {
      for (const errorMessage of [undefined, 'Error message']) {
        for (const hint of [undefined, 'Hint text']) {
          for (const hasAutoFocus of [true, false]) {
            const props = {
              ...commonProps,
              isDisabled,
              errorMessage,
              hint,
              hasAutoFocus,
            };

            it(`renders correctly - isDisabled: ${isDisabled}, errorMessage: ${errorMessage}, hint: ${hint}, hasAutoFocus: ${hasAutoFocus}`, () => {
              const {container} = renderInputWithProps(props);
              expect(container).toMatchSnapshot();
            });
          }
        }
      }
    }
  });
});
