
import React, {Component} from "react";
import {Image, Text, TouchableOpacity, View} from 'react-native';

export default class DiscoverTileView extends React.Component {
    static navigationOptions = {
        title: 'Discover'
    };
    render() {
        return (
            <View>
                <Text>Search Bar Goes here</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('POIListView')}>
                    <Image
                        style={{height:100, width: 100}}
                        source={require('./ignite_logo.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('POIListView')}>
                    <Image
                        style={{height:100, width: 100}}
                        source={require('./ignite_logo.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('POIListView')}>
                    <Image
                        style={{height:100, width: 100}}
                        source={require('./ignite_logo.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('POIListView')}>
                    <Image
                        style={{height:100, width: 100}}
                        source={require('./ignite_logo.png')}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}