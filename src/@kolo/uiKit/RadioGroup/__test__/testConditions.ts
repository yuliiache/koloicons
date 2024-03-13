import {Option} from '@kolo/uiKit/RadioGroup/RadioButton/RadioButton';

interface Props {
  options: Option[];
  currentValue: string;
  onChange: jest.Mock;
}
export const testRadioGroupProps: Props = Object.freeze({
  options: [
    {
      id: '1',
      name: 'radioGroup',
      value: 'line',
      label: 'line',
    },
    {
      id: '2',
      name: 'radioGroup',
      value: 'solid',
      label: 'solid',
    },
  ],
  currentValue: 'line',
  onChange: jest.fn(),
});
