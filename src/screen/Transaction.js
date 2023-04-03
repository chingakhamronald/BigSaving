import {StyleSheet, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import AppBar from '../components/AppBar';
import {Chips} from '../components/Chips';
import {BorrowForm, IncommingForm, OutGoingForm} from '../components/Forms';

const Transaction = ({navigation}) => {
  const [chipState, setChipState] = useState('out_going');

  const renderForms = useCallback(() => {
    switch (chipState) {
      case 'borrow':
        return <BorrowForm />;
      case 'in_coming':
        return <IncommingForm />;
      default:
        return <OutGoingForm />;
    }
  }, [chipState]);

  return (
    <View>
      <AppBar navigation={navigation} title="Add New Amount" />
      <View style={styles.flex}>
        <Chips
          icon="information"
          name="Outgoing"
          onClick={() => setChipState('out_going')}
        />
        <Chips
          icon="information"
          name="Incoming"
          onClick={() => setChipState('in_coming')}
        />
        <Chips
          icon="information"
          name="Borrow"
          onClick={() => setChipState('borrow')}
        />
      </View>
      {renderForms()}
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
