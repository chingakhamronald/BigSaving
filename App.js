import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import MainNavigation from './src/navigation/MainNavigation';

const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    primary: '#080708',
    secondary: '#E6F0CC',
    tertiary: '#C8DF90',
  },
};

const AppProvider = ({children}) => {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>{children}</PaperProvider>
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
