import React from "react";
import {  createBottomTabNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SgininScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";

const switchNavigator = createSwitchNavigator({
    loginFlow : createNativeStackNavigator({
        Signup : SignupScreen,
         SignIn : SigninScreen
    }),
    mainFlow : createBottomTabNavigator({
        trackListFlow : createNativeStackNavigator({
           TrackList :TrackListScreen,
           TrackDetail :TrackDetailScreen
        }),
        TrackCreate : TrackCreateScreen,
         Account : AccountScreen
    }),
});

export default createAppContainer(switchNavigator);