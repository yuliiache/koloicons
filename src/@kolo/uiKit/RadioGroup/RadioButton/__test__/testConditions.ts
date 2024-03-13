import {Option} from '@kolo/uiKit/RadioGroup/RadioButton/RadioButton';

interface Props {
  option: Option;
  isSelected: boolean;
  onChange: jest.Mock;
}

export const testRadioButtonProps: Props[] = [
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
