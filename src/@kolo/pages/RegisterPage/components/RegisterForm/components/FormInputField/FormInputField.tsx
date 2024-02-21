import Input from '@kolo/uiKit/Input/Input';
import {InputType} from '@kolo/uiKit/Input/InputType';
import {FC} from 'react';
import {Field, FieldRenderProps} from 'react-final-form';

export interface Props {
  fieldName: string;
  label: string;
  type: InputType;
}

const FormInputField: FC<Props> = ({fieldName, label, type}) => {
  return (
    <Field name={fieldName}>
      {({input: {value, onChange}, meta: {modified, error, touched}}: FieldRenderProps<string>) => (
        <Input
          id={fieldName}
          label={label}
          value={value}
          type={type}
          onChange={onChange}
          errorMessage={(modified && error) || (touched && error)}
          hasAutoFocus={fieldName === 'firstName'}
        />
      )}
    </Field>
  );
};

export default FormInputField;
