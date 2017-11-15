
import React, {Component} from "react";
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

export default class POIListView extends React.Component {
    static navigationOptions = {
        title: 'POI'
    };
    render() {
        return (
            <View>
               <Text>Search bar goes here</Text>
              <FlatList
                 data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}]}
                 renderItem={({item}) => <TouchableOpacity onPress={() => this.props.navigation.navigate('POIDetailView')}><View style={{ height: 50, backgroundColor: '#2854aa'}}><Text>{item.key}</Text></View></TouchableOpacity>}
              />
            </View>
        )
    }
}