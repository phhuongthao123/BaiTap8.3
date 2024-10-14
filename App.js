import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './HomeScreen'; // Đường dẫn đến file HomeScreen.js
import IntroSlider from './IntroSlider';
import ScanScreen from './ScanScreen'; // Đường dẫn đến file ScanScreen.js

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IntroSlider" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="IntroSlider" component={IntroSlider} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scan" component={ScanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
