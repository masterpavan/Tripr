
import React, {Component} from "react";
import {Image, Text, View} from 'react-native';
import {Button} from "react-native-elements";
import Metrics from "../../../../../assets/styles/Themes/Metrics";
import {triprMapController} from "../../FourTabNavConfig";

export default class POIDetailView extends React.Component {
    static navigationOptions = {
        title: 'POI Details'
    };

    constructor(props) {
        super(props);
        console.log("(INFO) [POIDetailView.constructor] props are: ", this.props);

        this.state = {
            lat:this.props.navigation.state.params.currentPOI.coordinates_lat,
            long:this.props.navigation.state.params.currentPOI.coordinates_lon
        }
        //this.state.lat = 40;//
        //this.state.long = 2;//
    }

    render() {
        return (
            <View>
                <Text>You Made it to a POI Details Page!</Text>
                <Image
                    style={{height:Metrics.screenWidth/2, width:Metrics.screenWidth/2}}
                    source={require('./ignite_logo.png')}
                />
                <Button
                    onPress={()=>{
                        triprMapController.setMapState({latitude:this.state.lat, longitude:this.state.long, zoomLevel: 16});
                        this.props.navigation.navigate('MapView')}}
                    text={'goto map'}/>
            </View>
        )
    }
}