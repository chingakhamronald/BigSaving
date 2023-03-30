import {View, Text} from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar';

const Transaction = ({navigation}) => {
  return (
    <View>
      <AppBar navigation={navigation} title="Transaction List" />
      <Text>Transaction</Text>
    </View>
  );
};

export default Transaction;
