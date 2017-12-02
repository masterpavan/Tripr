
import React, {Component} from "react";
import {StyleSheet, Image, View} from 'react-native';

import Mapbox from '@mapbox/react-native-mapbox-gl';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import CreateOfflineRegion from "./CreateOfflineRegion";
import {Button} from "react-native-elements";
//import geoViewport from '@mapbox/geo-viewport';

Mapbox.setAccessToken('pk.eyJ1Ijoia3JlYmluIiwiYSI6ImNqOXRyN2NpNjAxbDUyeG9lcnVxNXV3aHYifQ.Co5xDA25ehe16YgaFk0t2w');


const styles = StyleSheet.create({
    container: {
        flex: 1,
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

    render() {
        return (
            <View style={{flex:1}}>
                <MapboxGL.MapView
                    styleURL= {MapboxGL.StyleURL.Street}
                    zoomLevel={10}
                    ref= "map"
                    centerCoordinate={[0.1278, 51.5074]}
                    style={styles.container}>
                </MapboxGL.MapView>
            </View>

        )
    }
}