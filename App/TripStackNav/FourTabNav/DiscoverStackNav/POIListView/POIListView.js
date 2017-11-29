
import React, {Component} from "react";
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import { SearchBar } from 'react-native-elements'
import TriprStore from "../../../../../assets/services/TriprStore";

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

    constructor(props) {
        super(props);
        this.state = {
            list: [{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}]
        }

    }

    componentDidMount() {
        let poiList = {};
        TriprStore.readCity('London', function(list) {

            this.setState({list: list.map( function(item) {
                return {key: item.name};
            })});
            console.log(list);
        }.bind(this));
        //poiList.forEach(function(e) {console.log("this element is",e)});

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
                    data=
                        {
                            this.state.list
                        }
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