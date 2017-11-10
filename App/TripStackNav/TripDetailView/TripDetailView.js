
import React, {Component} from "react";
import {Button, Text, View} from 'react-native';

export default class TripDetailView extends React.Component {
    static navigationOptions = {
        title: 'Trip Details'
    };

    render() {
        return (
            <View>
                <Text>Rome</Text>
                <Button onPress={() => this.props.navigation.navigate('FourTabNav')} title="Discover Rome"/>
                <Text>Venice</Text>
                <Text>Another city in Italy</Text>
                <Text>Florence</Text>
            </View>
        )
    }
}