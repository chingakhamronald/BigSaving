import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';

const TransactionRenderItem = ({item}) => {
  return (
    <TouchableOpacity>
      <Text>{item.name}</Text>
      <Text> {item.payment_type}</Text>
      <Text>Rs {item.amount}</Text>
    </TouchableOpacity>
  );
};

export default TransactionRenderItem;
