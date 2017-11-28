
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
            }} />
    });

    render() {
        return (
            <View style={{flex:1}}>
                <Button
                    title = "Download Florence"
                    onPress={() =>
                    {
                        this.refs.create.createPack("Florence Test2", 11.2558, 43.7696);
                    }
                    }
                />
                <MapboxGL.MapView
                    styleURL= {MapboxGL.StyleURL.Street}
                    zoomLevel={10}
                    ref= "map"
                    centerCoordinate={[0.1278, 51.5074]}
                    style={styles.container}>
                </MapboxGL.MapView>
                <View>
                    <CreateOfflineRegion ref = "create"/>
                </View>
            </View>

        )
    }
}