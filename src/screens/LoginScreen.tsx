import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();

  const navigateToBiometricSetup = () => {
    navigation.navigate('BiometricSetup');
  };

  const navigateToMPINSetup = () => {
    navigation.navigate('MPINSetup');
  };

  const navigateToFaceLockSetup = () => {
    navigation.navigate('FaceLockSetupScreen');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 24, marginBottom: 20}}>Login Screen</Text>
      <TextInput label="Username" style={{width: '80%', marginBottom: 10}} />
      <TextInput
        label="Password"
        secureTextEntry
        style={{width: '80%', marginBottom: 20}}
      />
      <Button
        mode="contained"
        onPress={navigateToBiometricSetup}
        style={{width: '80%'}}>
        Login
      </Button>
     
      <Button onPress={navigateToBiometricSetup} style={{marginTop: 20}}>
        Setup Biometric
      </Button>
      <Button onPress={navigateToFaceLockSetup}>
        Setup Face ID
      </Button>
      <Button onPress={navigateToMPINSetup}>
        Setup MPIN
      </Button>
    </View>
  );
};

export default LoginScreen;
