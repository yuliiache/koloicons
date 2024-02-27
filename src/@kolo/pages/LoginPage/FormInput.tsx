import Input from '@kolo/uiKit/Input/Input';
import {InputType} from '@kolo/uiKit/Input/InputType';
import {FC} from 'react';
import {Field} from 'react-final-form';

interface Props {
  label?: string;
  placeholder?: string;
  isDisabled?: boolean;
  hint?: string;
  hasAutoFocus?: boolean;
  id: string;
  name: string;
  inputType: InputType;
}

const FormInput: FC<Props> = ({name, inputType, id, hasAutoFocus = false, label, isDisabled = false}) => {
  return (
    <Field
      name={name}
      render={({input: {value, onChange}, meta: {error, touched}}) => (
        <Input
          id={id}
          onChange={onChange}
          value={value}
          type={inputType}
          hasAutoFocus={hasAutoFocus}
          label={label}
          errorMessage={touched && error}
          isDisabled={isDisabled}
        />
      )}
    />
  );
};

export default FormInput;
