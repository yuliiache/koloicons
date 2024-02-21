import {InputType} from '@kolo/uiKit/Input/InputType';

import {Props as RegisterField} from '../components/FormInputField/FormInputField';

export const REGISTER_FIELDS: readonly RegisterField[] = [
  {fieldName: 'firstName', label: 'First name', type: InputType.TEXT},
  {fieldName: 'lastName', label: 'Last name', type: InputType.TEXT},
  {fieldName: 'email', label: 'Email', type: InputType.TEXT},
  {fieldName: 'password', label: 'Password', type: InputType.PASSWORD},
];
