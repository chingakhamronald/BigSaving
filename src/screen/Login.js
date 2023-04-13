import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import TextField from '../components/TextField';
import {Formik} from 'formik';
import {LoginValidationSchema} from '../utils/ValidationSchema';
import {Button} from 'react-native-paper';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const signInHandler = () => {
  GoogleSignin.configure({
    androidClientId:
      '95132260899-fvk97cf2s5ndfc2kkll4a930gipssjsv.apps.googleusercontent.com',
  });
  GoogleSignin.hasPlayServices()
    .then(hasPlayService => {
      if (hasPlayService) {
        GoogleSignin.signIn()
          .then(userInfo => {
            console.log(JSON.stringify(userInfo));
          })
          .catch(e => {
            console.log('ERROR IS: ' + JSON.stringify(e));
          });
      }
    })
    .catch(e => {
      console.log('ERROR IS: ' + JSON.stringify(e));
    });
};

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

            <Button mode="contained" onPress={signInHandler}>
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
