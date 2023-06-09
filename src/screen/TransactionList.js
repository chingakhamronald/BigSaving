import {
  View,
  FlatList,
  StyleSheet,
  ToastAndroid,
  RefreshControl,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import AppBar from '../components/AppBar';
import {Chips} from '../components/Chips';
import {CalendarProvider, ExpandableCalendar} from 'react-native-calendars';
import moment from 'moment';
import TransactionRenderItem from '../components/TransactionRenderItem';
import {Divider, Text} from 'react-native-paper';
import useTransactionList from '../hooks/query/useTransactionList';
import {useTransactionDelete} from '../hooks/mutation/useTransactionDelete';

const TransactionList = ({navigation}) => {
  const [chips, setChips] = useState('in_coming');
  const [selected, setSelected] = useState(false);

  const [
    transactionList,
    isTransactionLoading,
    isTransactionError,
    isTransactionErrorMessage,
    refetch,
  ] = useTransactionList(chips);

  const transactionDivider = useCallback(() => <Divider />, []);

  const transactionEmptyList = useCallback(
    () => (
      <View style={styles.empty}>
        <Text>No data Found!</Text>
      </View>
    ),
    [],
  );

  const isRefetch = useCallback(() => {
    refetch();
  }, [refetch]);

  const renderItem = useCallback(({item}) => {
    return <TransactionRenderItem item={item} />;
  }, []);

  const date = moment().format('yyyy-MM-d');

  if (isTransactionError) {
    return ToastAndroid.show(
      isTransactionErrorMessage?.message,
      ToastAndroid.SHORT,
    );
  }

  return (
    <>
      <AppBar navigation={navigation} title="Transaction List" />

      <CalendarProvider date={date}>
        <ExpandableCalendar
          initialPosition={'closed'}
          onCalendarToggled={e => setSelected(e)}
        />
      </CalendarProvider>

      <View
        style={selected ? styles.toggleMarginTrue : styles.toggleMarginFalse}>
        <Chips onClick={e => setChips(e)} />

        <FlatList
          refreshControl={
            <RefreshControl
              onRefresh={isRefetch}
              refreshing={isTransactionLoading}
            />
          }
          contentContainerStyle={styles.flexGrow}
          showsVerticalScrollIndicator={false}
          data={transactionList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={transactionDivider}
          ListEmptyComponent={transactionEmptyList}
        />
      </View>
    </>
  );
};

export default TransactionList;

const styles = StyleSheet.create({
  toggleMarginTrue: {
    flex: 0.7,
  },
  toggleMarginFalse: {
    flex: 3.1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  empty: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
