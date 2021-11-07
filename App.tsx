import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './pages/screens';
import MainList from './pages/navigation/MainListNavigation';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Landing} />
        <Stack.Screen name="MainList" component={MainList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




