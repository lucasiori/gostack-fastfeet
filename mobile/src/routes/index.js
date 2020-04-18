import React from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './Dashboard';

import SignIn from '~/pages/SignIn';

const { Navigator, Screen } = createStackNavigator();

export default function Routes({ signed }) {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />

      <Navigator
        screenOptions={{
          cardStyle: { backgroundColor: '#7d40e7' },
          headerShown: false,
        }}
      >
        {signed && <Screen name="Dashboard" component={Dashboard} />}

        {!signed && <Screen name="SignIn" component={SignIn} />}
      </Navigator>
    </>
  );
}

Routes.propTypes = {
  signed: PropTypes.bool,
};

Routes.defaultProps = {
  signed: false,
};
