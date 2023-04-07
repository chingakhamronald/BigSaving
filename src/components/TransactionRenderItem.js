import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';

const TransactionRenderItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <View style={styles.flex3}>
        <Text>{item.name}</Text>
        <Text>Payment Type: {item.payment_type}</Text>
      </View>
      <View style={styles.flex1}>
        <Text>Rs {item.amount}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionRenderItem;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    padding: 5,
  },
  flex1: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  flex3: {flex: 3},
});
