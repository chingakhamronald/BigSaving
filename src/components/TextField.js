import {useField} from 'formik';
import React from 'react';
import {TextInput} from 'react-native-paper';

const TextField = ({name, ...props}) => {
  const [{onBlur}, {value}, {setValue}] = useField(name);

  return (
    <>
      <TextInput
        mode="outlined"
        value={value}
        onChangeText={setValue}
        onBlur={onBlur(name)}
        {...props}
      />
    </>
  );
};

export default TextField;
