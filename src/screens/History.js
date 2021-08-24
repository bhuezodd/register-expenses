import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {ListItem, ListItemHidden} from '../components/ListItem';
import {SwipeListView} from 'react-native-swipe-list-view';

import style from '../res/global.style';
import Animated from 'react-native-reanimated';

const History = () => {
  const [animationRunning, setAnimationRunning] = useState(false);
  const [data, setData] = useState([
    {
      key: 1,
      title: 'First Saving',
      description: 'The description of first saving',
      mount: 100,
      type: 'saving',
    },
    {
      key: 2,
      title: 'First Saving',
      description: 'The description of first saving',
      mount: 100,
      type: 'saving',
    },
    {
      key: 3,
      title: 'First Saving',
      description: 'The description of first saving',
      mount: 100,
      type: 'saving',
    },
  ]);

  const handleSwipe = swipeData => {
    const {key, value} = swipeData;
    if (value < -Dimensions.get('screen').width && !animationRunning) {
      setAnimationRunning(true);

      const newData = [...data];
      const prevIndex = data.findIndex(item => item.key === key);
      newData.splice(prevIndex, 1);
      setData(newData);
      setAnimationRunning(false);
    }
    if (value > Dimensions.get('screen').width && !animationRunning) {
      setAnimationRunning(true);

      const newData = [...data];
      const prevIndex = data.findIndex(item => item.key === key);
      newData.splice(prevIndex, 1);
      setData(newData);
      setAnimationRunning(false);
    }
  };

  return (
    <View style={styleLocal.container}>
      <SwipeListView
        onSwipeValueChange={handleSwipe}
        data={data}
        renderItem={ListItem}
        renderHiddenItem={ListItemHidden}
        rightOpenValue={-Dimensions.get('window').width}
        listKey="id"
        leftOpenValue={Dimensions.get('window').width}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        useNativeDriver={false}
      />
    </View>
  );
};

const styleLocal = StyleSheet.create({
  container: {
    ...style.container,
    padding: 0,
    paddingTop: 16,
  },
});

export default History;
