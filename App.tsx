import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Landing from './pages/screens';
import MainList from './pages/navigation/MainListNavigation';
import MyPage from './pages/navigation/MypageNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="MainList" screenOptions={{tabBarActiveTintColor:'red', tabBarActiveBackgroundColor:'beige'}} >
        <Tab.Screen name="Login" 
          component={Landing} 
          options={{tabBarIcon:() => (<Ionicons
                    name="log-in-outline"
                    size={20}
          />
          ),
          }}
        />
        <Tab.Screen name="MainList" 
          component={MainList} 
          options={{headerShown:false, tabBarIcon:()=>(<Ionicons 
                    name="list-outline"
                    size={20}/>
          )}} 
        />
        <Tab.Screen name="MyPage" 
          component={MyPage} 
          options={{tabBarIcon:()=>(<Ionicons
            name="apps-outline"
            size={20}/>

          )}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}




