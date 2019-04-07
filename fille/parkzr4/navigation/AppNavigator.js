import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import AccountScreen from '../screens/AccountScreen';
import Loading from '../screens/Loading';
import AccountDetails from '../screens/AccountDetails';
import DetailBooking from '../screens/DetailBooking';
import NearbyParkingListItem from '../components/NearbyParkingListItem'
export default createAppContainer(
	createSwitchNavigator(
		{
			Loading:Loading,
			SignupScreen: SignupScreen,
			AccountScreen: AccountScreen,
			LoginScreen: LoginScreen,
			Home: MainTabNavigator,
			AccountDetails:AccountDetails,
			DetailBooking:DetailBooking,
			nb:NearbyParkingListItem
		},
		{
			initialRouteName: 'DetailBooking'
		}
	)
);
