
import React, {Component} from "react";
import {Button, Text, View} from 'react-native';

export default class TripListView extends React.Component {
    static navigationOptions = {
        title: 'TripList'
    };
    render() {
        return (
            <View>
                <Text>Trip To Italy</Text>
                <Button onPress={() => this.props.navigation.navigate('TripDetailView')} title="View Cities" />
                <Text>Trip to England</Text>
                <Text>Trip to America</Text>
                <Text>Trip to Russia</Text>
            </View>
        )
    }
}