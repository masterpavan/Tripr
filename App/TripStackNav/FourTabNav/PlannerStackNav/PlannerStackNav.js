'use strict'
import {StackNavigator} from 'react-navigation';
import React from 'react';
import MultiDayView from './PlannerComponents/MultiDay';
import SingleDayView from './PlannerComponents/SingleDay';
import AddEventView from './PlannerComponents/AddEvent';
import EditEventView from './PlannerComponents/EditEvent';

const routeConfig = {
	MultiDayView: {screen: MultiDayView},
	SingleDayView: {screen: SingleDayView},
	AddEventView: {screen: AddEventView},
	EditEventView: {screen: EditEventView}
}

const stackNavConfig = {
	headerMode: 'none',
	initialRouteName: 'MultiDayView',
	navigationOptions: {

	}
}

export const PlannerStackNav = StackNavigator(routeConfig, stackNavConfig);