import {View, Text} from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar';

const Borrower = ({navigation}) => {
  return (
    <View>
      <AppBar navigation={navigation} title="Borrower" />
      <Text>Borrower</Text>
    </View>
  );
};

export default Borrower;
