
import React, {Component} from "react";
import {StyleSheet, Image, View} from 'react-native';

import Mapbox from '@mapbox/react-native-mapbox-gl';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import TriprStore from "../../../../../assets/services/TriprStore";
import {triprMapController} from "../../FourTabNavConfig";

Mapbox.setAccessToken('pk.eyJ1Ijoia3JlYmluIiwiYSI6ImNqOXRyN2NpNjAxbDUyeG9lcnVxNXV3aHYifQ.Co5xDA25ehe16YgaFk0t2w');



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    annotationContainer: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
    },
    annotationFill: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'orange',
        transform: [{ scale: 0.6 }],
    }
});

export default class MapView extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: `Map`,
        tabBarIcon: <Image source={require('../../../../../assets/images/map_icon.png')}
            style={{
                height: 30,
                width: 30,
                resizeMode: 'contain'
            }} />,
        tabBarLabel: "Map",
        headerTitle: `MAP`,
        headerStyle: {
        },
        headerTitleStyle: {
            color:'#494949',
            alignSelf:'center',
            fontFamily: 'LeagueSpartan',
            fontSize:20,
            fontWeight:'200'
        },
        headerRight:(<View></View>)
    });

    constructor(props) {
        super(props);

        this.state = {longitude:41, latitude:2, zoomLevel:10};
        //triprMapController.setCurrentCity(this.props.navigation.state.params.cityName);
        //triprMapController.initSetMapStateFunc(this.setState.bind(this))
        //triprMapController.getCityCoords();

    }

    renderAnnotations () {

        return (
            <Mapbox.PointAnnotation
                key='pointAnnotation'
                id='pointAnnotation'
                coordinate={[this.state.longitude, this.state.latitude]}>

                <View style={styles.annotationContainer}>
                    <View style={styles.annotationFill} />
                </View>
                <Mapbox.Callout title='Look! An annotation!' />
            </Mapbox.PointAnnotation>
        )
    }

    componentDidMount() {

    }

    render() {
        console.log('(INFO) [MapView.render] centerCoordinate is: ', [this.state.longitude, this.state.latitude]);

        return (
            <View style={{flex:1}}>
                <Mapbox.MapView
                    styleURL= {Mapbox.StyleURL.Street}
                    zoomLevel={3}
                    ref= "map"
                    /*centerCoordinate={[this.state.longitude, this.state.latitude]}*/
                    centerCoordinate={[-0.1278, 51.5]}

                    style={styles.container}
                    showUserLocation={true}>
                        {this.renderAnnotations()}
                </Mapbox.MapView>
            </View>

        )
    }
}