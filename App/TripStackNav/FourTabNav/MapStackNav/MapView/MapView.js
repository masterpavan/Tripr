
import React, {Component} from "react";
import {Text, WebView, Image} from 'react-native';

export default class MapView extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => ({

        tabBarIcon: <Image source={require('../../../../../assets/images/map_icon.png')}
            style={{
                height: 20,
                width: 20,
                resizeMode: 'contain'
            }} />
    });

    render() {
        return (<WebView
            source={{uri: 'https://hw2-cse134b-40899.firebaseapp.com/hw4/homepage.html'}}
            style={{}}
        />)
    }
}