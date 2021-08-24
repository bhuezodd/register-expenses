import React from 'react';
import {View, Button, Text, StyleSheet, Pressable} from 'react-native';
import Icon from '../components/Icon';
import colors from '../res/colors';

export const ListItem = props => {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.money}>First saving</Text>
        <Text style={style.description}>The description value saving</Text>
      </View>
      <Text style={style.savings}>Hello</Text>
      <Text style={style.money}>$100</Text>
    </View>
  );
};
export const ListItemHidden = props => {
  return (
    <View style={style.container}>
      <Text style={style.edit}>Edit</Text>
      <Text style={style.expensives}>Delete</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    backgroundColor: colors.primary[300],
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnDelete: {
    width: 32,
    height: 32,
    backgroundColor: colors.red[100],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  description: {
    color: colors.gray,
    fontSize: 12,
  },
  money: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  expensives: {
    color: colors.red[100],
    fontSize: 16,
  },
  savings: {
    color: colors.green[100],
    fontSize: 16,
  },
  edit: {
    color: colors.blue[100],
    fontSize: 16,
  },
});
