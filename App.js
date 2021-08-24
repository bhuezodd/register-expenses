import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from './src/screens/Home';
import History from './src/screens/History';
import colors from './src/res/colors';
import Icon from './src/components/Icon';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: colors.primary[100],
          },
          headerStyle: {
            backgroundColor: colors.primary[200],
          },
          headerTitleStyle: {
            color: colors.white,
            fontWeight: '900',
          },
          tabBarActiveTintColor: colors.yellow,
          tabBarInactiveTintColor: colors.white,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: props => <Icon name="home" {...props} />,
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarIcon: props => <Icon name="clock" {...props} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Home}
          options={{
            tabBarIcon: props => <Icon name="conf" {...props} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
