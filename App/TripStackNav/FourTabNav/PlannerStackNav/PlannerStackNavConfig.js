'use strict'
import {StackNavigator} from 'react-navigation';
import React, {Component} from 'react';
import MultiDayView from './PlannerComponents/MultiDay';
import SingleDayView from './PlannerComponents/SingleDay';
import AddEventView from './PlannerComponents/AddEvent';
import EditEventView from './PlannerComponents/EditEvent';
import EventController from './PlannerComponents/EventController';

/*export default class PlannerView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {screen: "multi"};
		const {navigate} = this.props.navigation;
		this.navigate = navigate;
	}

	static navigationOptions = {
		title: 'Planner'
	}

	setTheState(object) {
		this.setState(object);
	}

	screenOptions() {
		if(this.screen == "multi") {
			return 
		}
	}
}*/


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