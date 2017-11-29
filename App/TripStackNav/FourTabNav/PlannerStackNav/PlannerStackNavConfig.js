'use strict'
import {StackNavigator} from 'react-navigation';
import MultiDayView from './MulitDayView/MultiDayView';
import SingleDayView from './SingleDayView/SingleDayView';
import AddEventView from './AddEventView/AddEventView';
import EditEventView from './EditEventView/EditEventView';

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