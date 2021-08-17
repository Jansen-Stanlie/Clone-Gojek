import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, NewsDetail} from '../../containers/pages';
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={NewsDetail} />
    </Stack.Navigator>
  );
};
export default Router;
