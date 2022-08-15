import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "../components/CustomTabBar";

import Home from '../screens/home';
import Search from '../screens/search';
import LocationMap from '../screens/locationMap';
import Favorites from '../screens/favorites';
import Profile from '../screens/profile';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=> <CustomTabBar {...props} />} >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="LocationMap" component={LocationMap} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
);