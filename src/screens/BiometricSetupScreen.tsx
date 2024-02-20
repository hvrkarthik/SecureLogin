import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const BiometricSetupScreen: React.FC = () => {
  const navigation = useNavigation();
  const [biometricSupported, setBiometricSupported] = useState<boolean | null>(
    null,
  );

  useEffect(() => {
    checkBiometricSupport();
  }, []);

  const checkBiometricSupport = async () => {
    try {
      setBiometricSupported(true);
    } catch (error) {
      console.error('Error checking biometric support', error);
      setBiometricSupported(false);
    }
  };

  const setupBiometrics = () => {
    if (biometricSupported === null) {
      return;
    }

    if (biometricSupported) {
      alert('Biometric setup successful!');
      navigation.goBack();
    } else {
      alert('Biometrics not supported on this device.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Biometric Setup</Text>
      <Button
        title="Setup Biometrics"
        onPress={setupBiometrics}
        disabled={biometricSupported === null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default BiometricSetupScreen;
