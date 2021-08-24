import {StyleSheet} from 'react-native';
import colors from './colors';

const style = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: colors.primary[300],
    padding: 16,
  },
  textWhite: {
    color: colors.white,
  },
  card: {
    backgroundColor: colors.primary[400],
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cardTitle: {
    color: colors.gray,
    fontSize: 14,
  },
  cardCurrent: {
    marginTop: 8,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 4,
  },
  cardMoney: {
    color: colors.white,
    fontSize: 48,
  },
});

export default style;
