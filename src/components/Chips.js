import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Chip} from 'react-native-paper';

export const Chips = ({icon, name, onClick}) => {
  const style = StyleSheet.create({
    flex: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 10,
    },
  });

  const filterOptions = [
    {
      name: 'Incoming',
      value: 'incoming',
      icon: 'information',
    },
    {
      name: 'Outgoing',
      value: 'out_going',
      icon: 'information',
    },
    {
      name: 'Borrow',
      value: 'borrower',
      icon: 'information',
    },
  ];

  return (
    <View style={style.flex}>
      {filterOptions.map((e, idx) => {
        return (
          <Chip key={idx} icon={e.icon} onPress={() => onClick(e.value)}>
            {e.name}
          </Chip>
        );
      })}
    </View>
  );
};
