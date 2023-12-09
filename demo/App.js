import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SignupPage from './components/SignUp.js';
import SigninPage from './components/Signin.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="signup" component={SignupPage} />
        <Stack.Screen name="login" component={SigninPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
