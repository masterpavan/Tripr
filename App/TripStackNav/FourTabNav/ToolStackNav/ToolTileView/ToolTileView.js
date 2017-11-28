
import React, {Component} from "react";
import {Image, Text} from 'react-native';

export default class ToolTileView extends React.Component {
    static navigationOptions = {
        title: 'Tools',

        tabBarIcon: <Image source={require('../../../../../assets/images/tools_icon.png')}
                           style={{
                               height: 30,
                               width: 30,
                               resizeMode: 'contain'
                           }} />

    };
    render() {
        return <Text>pick a tool any tool</Text>
    }
}