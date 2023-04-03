import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import Borrower from '../screen/Borrower';
import DailyReport from '../screen/DailyReport';
import Dashboard from '../screen/Dashboard';
import Login from '../screen/Login';
import Splash from '../screen/Splash';
import TransactionForm from '../screen/TransactionForm';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const [splashLoading, setSplashLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setSplashLoading(false);
    }, 5000);
    return () => {
      clearTimeout(t);
    };
  }, [setSplashLoading]);

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      {splashLoading && <Stack.Screen name="Splash" component={Splash} />}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="DailyReport" component={DailyReport} />
      <Stack.Screen name="TransactionForm" component={TransactionForm} />
      <Stack.Screen name="Borrower" component={Borrower} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
