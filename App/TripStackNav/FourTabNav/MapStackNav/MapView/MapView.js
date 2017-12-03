
import React, {Component} from "react";
import {StyleSheet, Image, View} from 'react-native';

import Mapbox from '@mapbox/react-native-mapbox-gl';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import TriprStore from "../../../../../assets/services/TriprStore";

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
        this.state = {longitude:-122.2416, latitude:37.7652};
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
        TriprStore.getCityCoord(this.props.navigation.state.params.cityName).then((coordinates)=>{
            this.setState({latitude:coordinates[0], longitude:coordinates[1]});
        });
    }

    render() {
        return (
            <View style={{flex:1}}>
                <MapboxGL.MapView
                    styleURL= {MapboxGL.StyleURL.Street}
                    zoomLevel={10}
                    ref= "map"
                    centerCoordinate={[this.state.latitude, this.state.longitude]}
                    style={styles.container}
                    showUserLocation={true}>
                    {this.renderAnnotations()}

                </MapboxGL.MapView>
            </View>

        )
    }
}