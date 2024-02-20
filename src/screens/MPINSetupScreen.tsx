import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';

const MPINSetupScreen: React.FC = () => {
  const navigation = useNavigation();
  const [mpin, setMPIN] = useState<string>('');

  const setupMPIN = () => {
    if (mpin.length >= 4) {
      alert('MPIN setup successful!');
      navigation.goBack();
    } else {
      alert('MPIN must be at least 4 digits.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>MPIN Setup</Text>
      <TextInput
        label="Enter MPIN"
        keyboardType="numeric"
        maxLength={4}
        secureTextEntry
        style={styles.input}
        value={mpin}
        onChangeText={text => setMPIN(text)}
      />
      <Button title="Setup MPIN" onPress={setupMPIN} />
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
  input: {
    width: '80%',
    marginBottom: 20,
  },
});

export default MPINSetupScreen;
