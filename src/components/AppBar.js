import React from 'react';
import {Appbar} from 'react-native-paper';

const AppBar = ({navigation, title}) => {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Dashboard')} />
        <Appbar.Content title={title} />
      </Appbar.Header>
    </>
  );
};

export default AppBar;
