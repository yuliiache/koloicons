export const testRadioButtonProps = [
  {
    option: {
      id: '1',
      name: 'radioGroup',
      value: 'line',
      label: 'line',
    },

    isSelected: true,
    onChange: jest.fn(),
  },
  {
    option: {
      id: '2',
      name: 'radioGroup',
      value: 'solid',
      label: 'solid',
    },
    isSelected: false,
    onChange: jest.fn(),
  },
];
