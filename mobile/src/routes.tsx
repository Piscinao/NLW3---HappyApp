import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanagesDetails from './pages/OrphanageDetails';

const { Navigator, Screen } = createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      {/* Desabilita o header de todas as páginas */}
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name="OrphanagesMap"
          component={OrphanagesMap}
        />
        <Screen
          name="OrphanageDetails"
          component={OrphanagesDetails}
        />
        
      </Navigator>
    </NavigationContainer>
  )
}