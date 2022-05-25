import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import Checkout from '../screens/Checkout';
import Login from '../screens/Login'
import Camera from '../screens/Camera';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Login" component={Login}  options={{headerShown: false}}/>

    </Stack.Navigator>
  );
}
