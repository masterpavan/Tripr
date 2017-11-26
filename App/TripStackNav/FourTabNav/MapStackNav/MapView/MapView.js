
import React, {Component} from "react";
import {Text, WebView} from 'react-native';

export default class MapView extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: `Map of ${navigation.state.params.cityName}`
    });

    render() {
        return (<WebView
            source={{uri: 'https://hw2-cse134b-40899.firebaseapp.com/hw4/homepage.html'}}
            style={{}}
        />)
    }
}