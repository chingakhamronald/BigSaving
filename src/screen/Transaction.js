import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppBar from '../components/AppBar';
import TextField from '../components/TextField';
import {Formik} from 'formik';
import {Button, RadioButton} from 'react-native-paper';
import {Chips} from '../components/Chips';

const Transaction = ({navigation}) => {
  const [value, setValue] = useState('first');
  const [chipState, setChipState] = useState('out_going');

  const initialValues = {
    amount: '',
    name: '',
    address: '',
    phone_no: '',
    reason: '',
    deadline_payment: '',
    item: '',
  };

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
      <Formik initialValues={initialValues}>
        {({handleSubmit}) => (
          <View>
            <TextField label="Amount" name="amount" />
            <TextField label="Name" name="name" />
            <TextField label="Address" name="address" />
            <TextField label="Phone no." name="phone_no" />
            <TextField label="Deadline Payment" name="deadline_payment" />
            <TextField label="Item" name="item" />
            <TextField label="Reason" name="reason" />
            <RadioButton.Group
              onValueChange={value => setValue(value)}
              value={value}>
              <RadioButton.Item label="UPI" value="first" />
              <RadioButton.Item label="Cash" value="second" />
            </RadioButton.Group>
            <Button
              mode="contained"
              onPress={() => navigation.navigate('DailyReport')}>
              Submit
            </Button>
          </View>
        )}
      </Formik>
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
