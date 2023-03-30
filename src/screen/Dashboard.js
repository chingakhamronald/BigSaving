import {ScrollView} from 'react-native';
import React, {useState} from 'react';
import {mainStyle} from '../utils/MainStyle';
import moment from 'moment';
import Chart from '../components/Chart';
import {FAB, Portal, Subheading} from 'react-native-paper';

const Dashboard = ({navigation}) => {
  const todayDate = moment().format('MMMM Do YYYY, h:mm:ss a');

  const [state, setState] = useState({open: false});

  const onStateChange = ({open}) => setState({open});

  const {open} = state;

  return (
    <ScrollView style={mainStyle.flexGrow}>
      <Subheading>{todayDate}</Subheading>

      <Chart name="Weakly Report" />
      <Chart name="Monthly Report" />
      <Chart name="Yearly Report" />

      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'calendar-today' : 'plus'}
          actions={[
            {icon: 'plus', onPress: () => console.log('Pressed add')},
            {
              icon: 'star',
              label: 'Borrower List',
              onPress: () => navigation.navigate('Borrower'),
            },
            {
              icon: 'email',
              label: 'Transaction List',
              onPress: () => navigation.navigate('Transaction'),
            },
            {
              icon: 'bell',
              label: "Today's Report",
              onPress: () => {
                navigation.navigate('DailyReport');
              },
              small: false,
            },
          ]}
          onStateChange={onStateChange}
        />
      </Portal>
    </ScrollView>
  );
};

export default Dashboard;
