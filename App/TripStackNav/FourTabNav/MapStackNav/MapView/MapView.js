
import React from "react";
import {Image, View} from 'react-native';

import Mapbox from '@mapbox/react-native-mapbox-gl';
import {triprMapController} from "../../FourTabNavConfig";
import styles from "../MapStyleSheet";

Mapbox.setAccessToken('pk.eyJ1Ijoia3JlYmluIiwiYSI6ImNqOXRyN2NpNjAxbDUyeG9lcnVxNXV3aHYifQ.Co5xDA25ehe16YgaFk0t2w');

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
        headerRight:(<View/>)
    });

    constructor(props) {
        super(props);

        this.state = {longitude:41, latitude:2, zoomLevel:10};
        triprMapController.setCurrentCity(this.props.navigation.state.params.cityName);
        triprMapController.initSetMapStateFunc(this.setState.bind(this))
        triprMapController.getCityCoords();

    }

    render() {
        console.log('(INFO) [MapView.render] centerCoordinate is: ', [this.state.longitude, this.state.latitude]);

        return (
            <View style={styles.container}>
                <Mapbox.MapView
                    styleURL= {Mapbox.StyleURL.Street}
                    zoomLevel={this.state.zoomLevel}
                    ref= "map"
                    /*centerCoordinate={[this.state.longitude, this.state.latitude]}*/
                    centerCoordinate={[this.state.longitude, this.state.latitude]}

                    style={styles.container}>
                    <Mapbox.PointAnnotation
                        key='pointAnnotation'
                        id='pointAnnotation'
                        coordinate={[this.state.longitude, this.state.latitude]}>

                        <View style={styles.annotationContainer}>
                            <View style={styles.annotationFill} />
                        </View>
                        <Mapbox.Callout title='Look! An annotation!' />
                    </Mapbox.PointAnnotation>
                </Mapbox.MapView>
            </View>

        )
    }
}