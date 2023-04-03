import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import AppBar from '../components/AppBar';
import {Searchbar, Surface} from 'react-native-paper';
import {Chips} from '../components/Chips';

const TransactionList = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View>
      <AppBar navigation={navigation} title="Transaction List" />
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View style={styles.flex}>
        <Chips icon="information" name="All" />
        <Chips icon="information" name="Paid" />
        <Chips icon="information" name="Unpaid" />
      </View>

      <FlatList
        data={DATA}
        renderItem={({item}) => {
          return (
            <Surface>
              <Text>{item.title}</Text>
            </Surface>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TransactionList;

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
