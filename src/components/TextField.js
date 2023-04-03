import {useField} from 'formik';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  reason: {
    height: 100,
  },
});

const TextField = ({name, label, ...props}) => {
  const [{onBlur}, {value}, {setValue}] = useField(name);

  return (
    <>
      <TextInput
        mode="outlined"
        value={value}
        onChangeText={setValue}
        onBlur={onBlur(name)}
        label={label}
        contentStyle={label === 'Reason' && styles.reason}
        {...props}
      />
    </>
  );
};

export default TextField;
