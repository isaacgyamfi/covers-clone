import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GettingStarted from '../screens/Auth/GettingStarted';
import PinVerification from '../screens/Auth/PinVerification';
import GeneralInformation from '../screens/Auth/GeneralInformation';
const Stack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={GettingStarted} name="GettingStarted" />
      <Stack.Screen component={PinVerification} name="PinVerification" />
      <Stack.Screen component={GeneralInformation} name="GeneralInformation" />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
