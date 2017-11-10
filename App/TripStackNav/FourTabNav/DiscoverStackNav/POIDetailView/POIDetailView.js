
import React, {Component} from "react";
import {Image, Text, View} from 'react-native';

export default class POIDetailView extends React.Component {
    static navigationOptions = {
        title: 'POI Details'
    };
    render() {
        return (
            <View>
                <Text>You Made it to a POI Details Page!</Text>
                <Image
                    style={{height:500, width:500}}
                    source={require('./ignite_logo.png')}
                />
            </View>
        )
    }
}