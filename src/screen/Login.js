import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import TextField from '../components/TextField';
import {Formik} from 'formik';
import {LoginValidationSchema} from '../utils/ValidationSchema';
import {Button} from 'react-native-paper';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginValidationSchema}
        onSubmit={values => {
          console.log('onnn>>>>>', values);
        }}>
        {({handleSubmit}) => (
          <View style={styles.input}>
            <TextField label="Email" name="email" />
            <TextField label="Password" name="password" />

            <Button
              mode="contained"
              onPress={() => navigation.navigate('Dashboard')}>
              Log In
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexGrow: 1,
  },
  input: {
    marginHorizontal: 20,
  },
});
