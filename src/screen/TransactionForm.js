import {StyleSheet, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import AppBar from '../components/AppBar';
import {Chips} from '../components/Chips';
import {BorrowForm, IncommingForm, OutGoingForm} from '../components/Forms';

const TransactionForm = ({navigation}) => {
  const [chips, setChips] = useState('in_coming');

  const renderForms = useCallback(() => {
    switch (chips) {
      case 'borrow':
        return <BorrowForm />;
      case 'in_coming':
        return <IncommingForm />;
      default:
        return <OutGoingForm />;
    }
  }, [chips]);

  return (
    <>
      <AppBar navigation={navigation} title="Transaction Form" />
      <View style={styles.wrapper}>
        <Chips onClick={e => setChips(e)} />

        <View>{renderForms()}</View>
      </View>
    </>
  );
};

export default TransactionForm;

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  wrapper: {
    marginHorizontal: 10,
  },
});
