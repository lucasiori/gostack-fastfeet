import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '~/pages/Dashboard';
import DeliveryDetails from '~/pages/DeliveryDetails';
import NewProblem from '~/pages/NewProblem';
import DeliveryProblems from '~/pages/DeliveryProblems';
import FinishDelivery from '~/pages/FinishDelivery';

const { Navigator, Screen } = createStackNavigator();

export default function NewRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerLeftContainerStyle: { marginLeft: 20 },
      }}
    >
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />

      <Screen
        name="DeliveryDetails"
        component={DeliveryDetails}
        options={({ navigation }) => ({
          title: 'Detalhes da encomenda',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" size={28} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />

      <Screen
        name="NewProblem"
        component={NewProblem}
        options={({ navigation }) => ({
          title: 'Informar problema',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" size={28} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />

      <Screen
        name="DeliveryProblems"
        component={DeliveryProblems}
        options={({ navigation }) => ({
          title: 'Visualizar problemas',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" size={28} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />

      <Screen
        name="FinishDelivery"
        component={FinishDelivery}
        options={({ navigation }) => ({
          title: 'Confirmar entrega',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" size={28} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />
    </Navigator>
  );
}
