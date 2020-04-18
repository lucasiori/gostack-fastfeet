import React from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Delivery from './Delivery';

import Profile from '~/pages/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

function TabBarIcon({ color, name }) {
  return <Icon name={name} size={26} color={color} />;
}

export default function DashboardRoutes() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Navigator
        screenOptions={{ unmountOnBlur: true }}
        tabBarOptions={{
          keyboardHidesTabBar: true,
          activeTintColor: '#7d40e7',
          inactiveTintColor: '#999',
          labelStyle: {
            fontSize: 16,
          },
          style: {
            height: 60,
            backgroundColor: '#fff',
            alignItems: 'center',
            paddingBottom: 5,
          },
        }}
      >
        <Screen
          name="Delivery"
          component={Delivery}
          options={{
            tabBarLabel: 'Entregas',
            tabBarIcon: (props) => <TabBarIcon {...props} name="menu" />,
          }}
        />

        <Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Meu Perfil',
            tabBarIcon: (props) => (
              <TabBarIcon {...props} name="account-circle" />
            ),
          }}
        />
      </Navigator>
    </>
  );
}

TabBarIcon.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
