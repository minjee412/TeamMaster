import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/navigation/LoginNavigation'
import MainList from './pages/navigation/MainListNavigation';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainList" component={MainList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




