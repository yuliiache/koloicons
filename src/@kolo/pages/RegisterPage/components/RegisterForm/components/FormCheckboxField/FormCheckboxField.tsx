import {Checkbox} from '@kolo/uiKit/Checkbox/Checkbox';
import {FC} from 'react';
import {Field, FieldRenderProps} from 'react-final-form';

import {CheckboxDataTestId} from '../../constants';

interface Props {
  dataTestId: CheckboxDataTestId;
  fieldName: string;
}

const FormCheckboxField: FC<Props> = ({dataTestId, fieldName}) => {
  return (
    <div data-testid={dataTestId}>
      <Field
        name={fieldName}
        type="checkbox"
      >
        {({input: {checked, onChange}, meta: {modified, error, touched}}: FieldRenderProps<boolean>) => (
          <Checkbox
            id={fieldName}
            onChange={onChange}
            isChecked={checked || false}
            hasError={(modified && !checked && error) || (touched && error)}
          />
        )}
      </Field>
    </div>
  );
};

export default FormCheckboxField;
