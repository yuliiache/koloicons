import Input from '@kolo/uiKit/Input/Input';
import {InputType} from '@kolo/uiKit/Input/InputType';
import {FC} from 'react';
import {Field} from 'react-final-form';

interface Props {
  id: string;
  name: string;
  inputType: InputType;
  label?: string;
  placeholder?: string;
  isDisabled?: boolean;
  hint?: string;
  hasAutoFocus?: boolean;
}

const FormInput: FC<Props> = ({name, inputType, id, label, placeholder, hasAutoFocus = false, isDisabled = false}) => {
  return (
    <Field
      name={name}
      render={({input: {value, onChange}, meta: {error, touched}}) => {
        return (
          <Input
            id={id}
            onChange={onChange}
            value={value}
            type={inputType}
            hasAutoFocus={hasAutoFocus}
            label={label}
            errorMessage={touched && error}
            isDisabled={isDisabled}
            placeholder={placeholder}
          />
        );
      }}
    />
  );
};

export default FormInput;
