import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BiometricSetupScreen from './src/screens/BiometricSetupScreen';
import FaceLockSetupScreen from './src/screens/FaceLockSetupScreen';
import LoginScreen from './src/screens/LoginScreen';
import MPINSetupScreen from './src/screens/MPINSetupScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BiometricSetup"
          component={BiometricSetupScreen}
          options={{title: 'Biometric Setup'}}
        />
        <Stack.Screen
          name="MPINSetup"
          component={MPINSetupScreen}
          options={{title: 'MPIN Setup'}}
        />
        <Stack.Screen
          name="FaceLockSetupScreen"
          component={FaceLockSetupScreen}
          options={{title: 'Face Lock Setup'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
