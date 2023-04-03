/* eslint-disable no-shadow */
import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import TextField from './TextField';
import {Button, RadioButton} from 'react-native-paper';

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export const BorrowForm = ({navigation}) => {
  const [value, setValue] = useState({
    payment: 'upi',
    paid: 'paid',
  });

  const initialValues = {
    amount: '',
    name: '',
    address: '',
    phone_no: '',
    reason: '',
    deadline_payment: '',
    payment: value?.payment,
    paid: value?.paid,
  };

  return (
    <View>
      <Formik initialValues={initialValues}>
        {({handleSubmit}) => (
          <View>
            <TextField label="Amount" name="amount" />
            <TextField label="Name" name="name" />
            <TextField label="Address" name="address" />
            <TextField label="Phone no." name="phone_no" />
            <TextField label="Deadline Payment" name="deadline_payment" />
            <TextField label="Reason" name="reason" />

            <RadioButton.Group
              onValueChange={value =>
                setValue(r => ({
                  ...r,
                  payment: value,
                }))
              }
              value={value?.payment}>
              <View style={styles.flex}>
                <RadioButton.Item label="UPI" value="upi" />
                <RadioButton.Item label="Cash" value="cash" />
              </View>
            </RadioButton.Group>

            <RadioButton.Group
              onValueChange={value =>
                setValue(r => ({
                  ...r,
                  paid: value,
                }))
              }
              value={value?.paid}>
              <View style={styles.flex}>
                <RadioButton.Item label="Paid" value="paid" />
                <RadioButton.Item label="Unpaid" value="un_paid" />
              </View>
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

export const IncommingForm = ({navigation}) => {
  const [value, setValue] = useState('gpay');
  const initialValues = {
    amount: '',
    name: '',
    address: '',
    phone_no: '',
    reason: '',
    payment: value,
  };

  return (
    <View>
      <Formik initialValues={initialValues}>
        {({handleSubmit}) => (
          <View>
            <TextField label="Amount" name="amount" />
            <TextField label="Name" name="name" />
            <TextField label="Address" name="address" />
            <TextField label="Phone no." name="phone_no" />
            <TextField label="Reason" name="reason" />
            <RadioButton.Group
              onValueChange={value => setValue(value)}
              value={value}>
              <View style={styles.flex}>
                <RadioButton.Item label="UPI" value="gpay" />
                <RadioButton.Item label="Cash" value="cash" />
              </View>
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

export const OutGoingForm = ({navigation}) => {
  const [value, setValue] = useState('gpay');
  const initialValues = {
    amount: '',
    item: '',
    reason: '',
    payment: value,
  };

  return (
    <View>
      <Formik initialValues={initialValues}>
        {({handleSubmit}) => (
          <View>
            <TextField label="Amount" name="amount" />
            <TextField label="Item" name="item" />
            <TextField label="Reason" name="reason" />
            <RadioButton.Group
              onValueChange={value => setValue(value)}
              value={value}>
              <View style={styles.flex}>
                <RadioButton.Item label="UPI" value="gpay" />
                <RadioButton.Item label="Cash" value="cash" />
              </View>
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
