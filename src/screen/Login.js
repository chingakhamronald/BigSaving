import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';

const Login = () => {
  const theme = useTheme();
  return (
    <View>
      <Text style={{color: theme.colors.primary}}>Login</Text>
    </View>
  );
};

export default Login;
