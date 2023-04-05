import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import MainNavigation from './src/navigation/MainNavigation';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const AppProvider = ({children}) => {
  const queryClient = new QueryClient();
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>{children}</PaperProvider>
      </QueryClientProvider>
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
