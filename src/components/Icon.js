import React from 'react';
import {Image} from 'react-native';
import Home from '../assets/icons/home.png';
import HomeActive from '../assets/icons/home-active.png';
import Clock from '../assets/icons/clock.png';
import ClockActive from '../assets/icons/clock-active.png';
import Conf from '../assets/icons/conf.png';
import ConfActive from '../assets/icons/conf-active.png';
import LineChartUp from '../assets/icons/line-chart-up.png';
import LineChartDown from '../assets/icons/line-chart-down.png';
import CreditCard from '../assets/icons/credit-card.png';
import Plus from '../assets/icons/plus.png';

const Icon = ({name, focused}) => {
  const icons = {
    home: state => {
      return state ? HomeActive : Home;
    },
    clock: state => {
      return state ? ClockActive : Clock;
    },
    conf: state => {
      return state ? ConfActive : Conf;
    },
    'line-chart-up': () => {
      return LineChartUp;
    },
    'line-chart-down': () => {
      return LineChartDown;
    },
    'credit-card': () => {
      return CreditCard;
    },
    plus: () => {
      return Plus;
    },
  };

  return <Image source={icons[name](focused)} height={24} width={24} />;
};

export default Icon;
