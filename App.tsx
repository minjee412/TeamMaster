import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Landing from './pages/screens';
import MainListNavigation from './pages/navigation/MainListNavigation';
import MyPage from './pages/navigation/MypageNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Data from './pages/screens/data';
import { GoogleSignin } from '@react-native-community/google-signin';
import auth from "@react-native-firebase/auth"

const Tab = createBottomTabNavigator()


  GoogleSignin.configure ({
    webClientId: "1046299788032-fbp1imn01jtdm3f5jf5v3be9heil59i2.apps.googleusercontent.com"
  });


export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(false)
  auth().onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false)
    }
  })
  if ( loggedIn) {
    return <MyPage />
  }

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="MainList" screenOptions={{tabBarActiveTintColor:'red', tabBarActiveBackgroundColor:'beige'}} >
        <Tab.Screen name="Landing" 
          component={Landing} 
          options={{tabBarIcon:() => (<Ionicons
                    name="log-in-outline"
                    size={20}
          />
          )
          }}
        />
        <Tab.Screen name="MainList" 
          component={MainListNavigation} 
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
        <Tab.Screen name="Data" 
          component={Data} 
          options={{tabBarIcon:()=>(<Ionicons
            name="apps-outline"
            size={20}/>

          )}}
        />
        <Tab.Screen name="Detail" 
          component={MainListNavigation} 
          options={{headerShown:false, tabBarIcon:()=>(<Ionicons 
                    name="list-outline"
                    size={20}/>
          )}} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}




