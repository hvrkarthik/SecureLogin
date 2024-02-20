import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

const FaceLockSetupScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images.jpg')} style={styles.icon} />
      <Text style={styles.title}>Face Lock Setup</Text>
      <Text style={styles.description}>
        Secure your account with Face ID.{'\n'}Follow the instructions to set up
        Face Lock.
      </Text>
      <Button title="Start Setup" onPress={() => {}} style={styles.button} />
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
  icon: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default FaceLockSetupScreen;
