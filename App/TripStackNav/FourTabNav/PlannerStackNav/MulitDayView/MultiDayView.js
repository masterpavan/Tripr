
import React, {Component} from "react";
import {Image, Text} from 'react-native';

export default class MultiDayView extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: `Planner for ${navigation.state.params.cityName}`,

        tabBarIcon: <Image source={require('../../../../../assets/images/calendar_icon.png')}
                           style={{
                               height: 20,
                               width: 20,
                               resizeMode: 'contain'
                           }} />

    });

    render() {
        return <Text>Plan shit here</Text>
    }
}