import {View, FlatList, StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import AppBar from '../components/AppBar';
import {Chips} from '../components/Chips';
import {CalendarProvider, ExpandableCalendar} from 'react-native-calendars';
import useTransactionList from '../hooks/useTransactionList';
import moment from 'moment';
import TransactionRenderItem from '../components/TransactionRenderItem';
import {Divider} from 'react-native-paper';

const TransactionList = ({navigation}) => {
  const [chips, setChips] = useState('borrower');
  const [selected, setSelected] = useState(false);

  const [transactionList] = useTransactionList(chips);

  const transactionDivider = useCallback(() => <Divider />, []);

  const date = moment().format('yyyy-MM-d');

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
        <View style={styles.flex}>
          <Chips
            icon="information"
            name="Incoming"
            onClick={() => setChips('incoming')}
          />
          <Chips
            icon="information"
            name="Outgoing"
            onClick={() => setChips('out_going')}
          />
          <Chips
            icon="information"
            name="Borrower"
            onClick={() => setChips('borrower')}
          />
        </View>

        <FlatList
          contentContainerStyle={styles.flexGrow}
          showsVerticalScrollIndicator={false}
          data={transactionList}
          renderItem={({item}) => <TransactionRenderItem item={item} />}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={transactionDivider}
        />
      </View>
    </>
  );
};

export default TransactionList;

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  toggleMarginTrue: {
    marginHorizontal: 10,
    flex: 0.7,
  },
  toggleMarginFalse: {
    marginHorizontal: 10,
    flex: 3.1,
  },
  flexGrow: {
    flexGrow: 1,
  },
});
