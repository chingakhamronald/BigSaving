import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar';
import {Searchbar, Surface, Text} from 'react-native-paper';
import {Chips} from '../components/Chips';

const DailyReport = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View>
      <AppBar navigation={navigation} title="Daily Report" />
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View style={styles.flex}>
        <Chips icon="information" name="Spent" />
        <Chips icon="information" name="Incoming" />
        <Chips icon="information" name="Borrow" />
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

export default DailyReport;

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
