'use strict'
import {StackNavigator} from 'react-navigation';
import React from 'react';
import MultiDayView from './Components/MultiDay';
import SingleDayView from './Components/SingleDay';
import AddEventView from './Components/AddEvent';
import EditEventView from './Components/EditEvent';
import EventController from './EventController';

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

let eventController = new EventController();
export {eventController};