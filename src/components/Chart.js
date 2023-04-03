import {View} from 'react-native';
import React from 'react';
import {VictoryAxis, VictoryBar, VictoryChart} from 'victory-native';
import {Text} from 'react-native-paper';

const Chart = ({name}) => {
  return (
    <View>
      <Text>{name}</Text>
      <VictoryChart>
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5, 6, 7]}
          tickFormat={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={x => {
            return `Rs${x / 1000}`;
          }}
        />
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>
    </View>
  );
};

export default Chart;

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000},
  {quarter: 5, earnings: 13000},
  {quarter: 6, earnings: 16500},
  {quarter: 7, earnings: 14250},
];
