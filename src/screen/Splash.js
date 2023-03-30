import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme, Text} from 'react-native-paper';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexGrow: 1,
    alignItems: 'center',
  },
});
