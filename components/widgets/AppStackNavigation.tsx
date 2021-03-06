import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Colors from '../../assets/colors';
import AppRegisterStackNavigation from './AppRegisterStackNavigation';
import AppUserStackNavigation from './AppUserStackNavigation';
const AppStack = createNativeStackNavigator();

export default function AppStackNavigation() {
  const theme: any = {
    colors: {
      ...DefaultTheme,
      background: Colors.white,
    },
    dark: false,
  };
  return (
    <NavigationContainer theme={theme as Theme}>
      <AppStack.Navigator initialRouteName="app-register">
        <AppStack.Screen
          name="app-user"
          component={AppUserStackNavigation}
          options={{
            headerShown: false,
          }}
        />
        <AppStack.Screen
          name="app-register"
          component={AppRegisterStackNavigation}
          options={{
            headerShown: false,
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
