import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/preload';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
);