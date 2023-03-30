import {View, Text} from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar';

const DailyReport = ({navigation}) => {
  return (
    <View>
      <AppBar navigation={navigation} title="Daily Report" />
      <Text>DailyReport</Text>
    </View>
  );
};

export default DailyReport;
