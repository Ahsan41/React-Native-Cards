import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import app from '../firbase.js'; 
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; 
const SigninPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = async () => {
    const auth = getAuth(); // Get the Firebase auth instance

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // User signed in successfully
      console.log('User signed in:', userCredential.user);
      alert('User signed in successfully!');
      setEmail('');
      setPassword('');

      // Navigate to the dashboard or another authenticated page after signin
      // You can use navigation libraries like React Navigation here for mobile navigation
    //   Example: navigation.navigate('Dashboard');
    } catch (error) {
      // Handle signin errors
      console.error('Signin Error:', error);
      alert('Signin failed. Please check your credentials.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.inputField}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.inputField}
        />
        <TouchableOpacity onPress={handleSignin} style={styles.signinButton}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
  },
  inputField: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  signinButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SigninPage;
