import React from 'react';
import {View} from 'react-native';
import {Chip} from 'react-native-paper';

export const Chips = ({icon, name, onClick}) => {
  return (
    <View>
      <Chip icon={icon} onPress={onClick}>
        {name}
      </Chip>
    </View>
  );
};
