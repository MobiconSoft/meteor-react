import * as React from 'react';
import { EuiFieldText } from '@elastic/eui';
import { Field } from 'react-final-form';

const EuiInput = ({ input, ...rest }) => {
  return (
    <EuiFieldText {...input} {...rest} />
  )
}

const EInput = (props: any) => {
  return (
    <Field {...props} component={EuiInput} />
  );
}

export default EInput;
