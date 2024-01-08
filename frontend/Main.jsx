import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProductDetails from './screens/ProductDetails';
import Toast from 'react-native-toast-message';
import Cart from './screens/Cart';
import ConfirmOrder from './screens/ConfirmOrder';
import Payment from './screens/Payment';
import Login from './screens/Login';
import ForgetPassword from './screens/ForgetPassword';
import Verify from './screens/Verify';
import SignUp from './screens/SignUp';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Group>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='Profile' component={Profile}/>
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="Verify" component={Verify} />
        </Stack.Group>
      </Stack.Navigator>
      <Toast position="top" />
    </NavigationContainer>
  );
}
