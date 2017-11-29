
import React, {Component} from "react";
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import { SearchBar } from 'react-native-elements'

export default class POIListView extends React.Component {
    static navigationOptions = {
        title: 'POI',
        tabBarIcon: <Image source={require('../../../../../assets/images/discover_icon.png')}
                           style={{
                               height: 20,
                               width: 20,
                               resizeMode: 'center'
                           }} />
    };
    render() {
        return (
            <View>
                <SearchBar
                    lightTheme
                    inputStyle={{
                        backgroundColor:"#cdcdcd"}}
                    containerStyle={{backgroundColor:'transparent',borderTopColor:'transparent',borderBottomColor:'transparent',marginHorizontal:10,marginVertical:10}}
                    placeholder='Type Here...' />
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}]}
                    renderItem={({item}) =>
                     <TouchableOpacity onPress={() => this.props.navigation.navigate('POIDetailView')}>
                         <View style={{
                             height: 50,
                             backgroundColor: '#4378ca'}}>
                             <Text>
                                 {item.key}
                             </Text>
                         </View>
                     </TouchableOpacity>}
                />
            </View>
        )
    }
}