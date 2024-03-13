import {BillingInterval} from '@kolo/constants/constants';
import {Option} from '@kolo/uiKit/RadioGroup/RadioButton/RadioButton';

export const options: Option[] = [
  {
    id: 'billed_monthly',
    name: 'billingInterval',
    value: BillingInterval.MONTH,
    label: 'Billed Monthly',
  },
  {
    id: 'billed_yearly',
    name: 'billingInterval',
    value: BillingInterval.YEAR,
    label: 'Billed Yearly',
  },
];
