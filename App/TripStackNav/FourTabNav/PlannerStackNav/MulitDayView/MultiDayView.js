
import React, {Component} from "react";
import {Text} from 'react-native';

export default class MultiDayView extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: `Planner for ${navigation.state.params.cityName}`
    });

    render() {
        return <Text>Plan shit here</Text>
    }
}