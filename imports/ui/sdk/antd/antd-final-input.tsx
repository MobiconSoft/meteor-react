import * as React from 'react';
import { Input } from 'antd';
import { Field } from 'react-final-form';

const AntdInput = ({input, ...rest}) => {
  return (
    <Input {...input} {...rest} />
  )
}

const AFInput = (props: any) => {
    return (
      <Field {...props} component={AntdInput} />
    );
}

export default AFInput;
