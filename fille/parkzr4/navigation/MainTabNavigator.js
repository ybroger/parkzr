import React from 'react';
import { Platform } from 'react-native';
import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ParkingsScreen from '../screens/ParkingsScreen';
import AccountScreen from '../screens/AccountScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import AccountDetails from '../screens/AccountDetails';
import DetailBooking from '../screens/DetailBooking';

const SignupStack = createStackNavigator({
	Login: SignupScreen
});

SignupStack.navigationOptions = {
	tabBarLabel: 'Login',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? `ios-home` : 'md-home'}
		/>
	)
};

const LoginStack = createStackNavigator({
	Login: LoginScreen
});

LoginStack.navigationOptions = {
	tabBarLabel: 'Login',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? `ios-home` : 'md-home'}
		/>
	)
};

const HomeStack = createStackNavigator({
	Home: HomeScreen
});

HomeStack.navigationOptions = {
	tabBarLabel: 'Home',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? `ios-home` : 'md-home'}
		/>
	)
};

const ParkingsStack = createStackNavigator({
	Parkings: ParkingsScreen
});

ParkingsStack.navigationOptions = {
	tabBarLabel: 'Parkings',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-car' : 'md-car'}
		/>
	)
};

const AccountStack = createStackNavigator({
	Account: AccountScreen
});

AccountStack.navigationOptions = {
	tabBarLabel: 'Account',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
		/>
	)
};

const DetailsStack = createStackNavigator({
	Details: AccountDetails
});
DetailsStack.navigationOptions = {
	tabBarLabel: 'Account',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
		/>
	)
};

const BookingStack = createStackNavigator({
	DetailsB: DetailBooking
});
BookingStack.navigationOptions = {
	tabBarLabel: 'Details Booking',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
		/>
	)
};

export default createBottomTabNavigator({
	HomeStack,
	ParkingsStack,
	AccountStack,
});
