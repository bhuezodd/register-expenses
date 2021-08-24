import React, {useState} from 'react';
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import style from '../res/global.style';
import Icon from '../components/Icon';
import colors from '../res/colors';
import {LineChart} from 'react-native-chart-kit';

const dataChart = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic',
  ],
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        100,
      ],
      color: (opacity = 1) => `rgba(122, 225, 164, ${opacity})`,
    },
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        100,
      ],
      color: (opacity = 1) => `rgba(244, 95, 95, ${opacity})`,
    },
  ],
};

const Home = () => {
  const [month, setMonth] = useState({
    name: 'Agost',
    savings: 100,
    expensives: 150,
  });

  const handleSelect = ({index}) => {
    const name = dataChart.labels[index];
    const savings = dataChart.datasets[0].data[index];
    const expensives = dataChart.datasets[1].data[index];
    setMonth({name, savings, expensives});
  };
  return (
    <View style={styleLocal.containerGlobal}>
      <Pressable style={styleLocal.float}>
        <View style={styleLocal.floatButton}>
          <Icon name="plus" />
        </View>
      </Pressable>
      <ScrollView style={style.container}>
        <View style={style.card}>
          <Text style={style.cardTitle}>Total money</Text>
          <View style={style.cardCurrent}>
            <Icon name="credit-card" />
            <Text style={style.cardMoney}>$100.00</Text>
          </View>
        </View>
        <View style={styleLocal.row}>
          <Text style={styleLocal.subTitle}>Month:</Text>
          <Text style={styleLocal.subTitleData}>{month.name}</Text>
        </View>
        <View style={styleLocal.rowBetween}>
          <View style={styleLocal.cardMini}>
            <Text style={style.cardTitle}>Savings</Text>
            <View style={styleLocal.cardMiniCurrent}>
              <Icon name="line-chart-up" />
              <Text style={styleLocal.cardMiniMoney}>
                ${month.savings.toFixed(2)}
              </Text>
            </View>
          </View>
          <View style={styleLocal.cardMini}>
            <Text style={style.cardTitle}>Expensives</Text>
            <View style={styleLocal.cardMiniCurrent}>
              <Icon name="line-chart-down" />
              <Text style={styleLocal.cardMiniMoney}>
                ${month.expensives.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
        <View style={styleLocal.chart}>
          <LineChart
            data={dataChart}
            width={Dimensions.get('window').width - 32} // from react-native
            height={250}
            yAxisLabel="$"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: colors.primary[300],
              backgroundGradientTo: colors.primary[300],
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              propsForDots: {
                r: '6',
                strokeWidth: '2',
              },
            }}
            onDataPointClick={handleSelect}
            bezier
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styleLocal = StyleSheet.create({
  containerGlobal: {
    flex: 1,
  },
  chart: {
    marginTop: 32,
    marginBottom: 90,
  },
  float: {
    position: 'absolute',
    right: 42,
    bottom: 16,
    zIndex: 999999999,
  },
  floatButton: {
    backgroundColor: colors.green[200],
    height: 50,
    width: 50,
    borderRadius: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    marginTop: 16,
    flexDirection: 'row',
  },
  rowBetween: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subTitle: {
    fontWeight: '700',
    fontSize: 14,
    color: colors.white,
  },
  subTitleData: {
    marginHorizontal: 16,
    fontSize: 14,
    fontWeight: '500',
    color: colors.gray,
  },
  cardMini: {
    ...style.card,
    width: '48%',
    height: 95,
  },
  cardMiniCurrent: {
    ...style.cardCurrent,
    height: 46,
    marginTop: 4,
  },
  cardMiniMoney: {
    ...style.cardMoney,
    fontSize: 24,
  },
});
