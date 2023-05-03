import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import {Button, Surface, Text} from 'react-native-paper';
import {useTransactionDelete} from '../hooks/mutation/useTransactionDelete';

const TransactionRenderItem = ({item}) => {
  const [mutate, isLoading] = useTransactionDelete();

  const handleDelete = id => {
    return mutate(id);
  };

  const leftActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View style={[styles.leftAction, {transform: [{scale}]}]}>
        <Button onPress={() => handleDelete(item.id)}>Delete</Button>
      </Animated.View>
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable renderLeftActions={leftActions}>
        <Surface elevation={5} style={styles.wrapper}>
          <View style={styles.flex3}>
            <Text>{item.name}</Text>
            <Text>Payment Type: {item.payment_type}</Text>
          </View>
          <View style={styles.flex1}>
            <Text>Rs {item.amount}</Text>
          </View>
        </Surface>
      </Swipeable>
    </GestureHandlerRootView>
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
  leftAction: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
});
