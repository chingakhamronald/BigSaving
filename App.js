import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import MainNavigation from './src/navigation/MainNavigation';

const AppProvider = ({children}) => {
  return (
    <NavigationContainer>
      <PaperProvider>{children}</PaperProvider>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <AppProvider>
      <MainNavigation />
    </AppProvider>
  );
};

export default App;
