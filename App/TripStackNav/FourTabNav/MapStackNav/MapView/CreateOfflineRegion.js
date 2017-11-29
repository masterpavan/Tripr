import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, Button } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import geoViewport from '@mapbox/geo-viewport';
import * as Progress from 'react-native-progress';
import Bubble from "../../../../../assets/elements/Bubble";


const MAPBOX_VECTOR_TILE_SIZE = 512;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    percentageText: {
        padding: 8,
        textAlign: 'center',
    },
    buttonCnt: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        backgroundColor: 'blue',
        padding: 8,
    },
    buttonTxt: {
        color: 'white',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin:20
    },
    progress: {
        width: 100,
        margin: 10,
    },
});

export default class CreateOfflineRegion extends React.Component {


    constructor (props) {
        super(props);

        this.state = {
            name: null,
            percentage: 50,
            offlineRegion: null,
        };

        this.onDownloadProgress = this.onDownloadProgress.bind(this);
        this.createPack = this.createPack.bind(this);

        this.onResume = this.onResume.bind(this);
        this.onPause = this.onPause.bind(this);

    }

    componentWillUnmount () {
        // avoid setState warnings if we back out before we finishing downloading
    }

    async createPack (packName, long, lat) {
        this.setState({name:packName, percentage:0, offlineRegion:null});
        const COORDINATES = [long, lat];
        const bounds = geoViewport.bounds(COORDINATES, 1, [1, 1], MAPBOX_VECTOR_TILE_SIZE);

        const options = {
            name: packName,
            styleURL: MapboxGL.StyleURL.Street,
            bounds: [[bounds[0], bounds[1]], [bounds[2], bounds[3]]],
            minZoom: 0,
            maxZoom: 24
        };

        // start download
        MapboxGL.offlineManager.createPack(
            options,
            this.onDownloadProgress,
        );
    }

    onDownloadProgress (offlineRegion, downloadStatus) {
        // the iOS SDK will return 0 on the first event of a resume offline pack download
        if (this.state.percentage > downloadStatus.percentage) {
            return;
        }
        this.setState({
            name: offlineRegion.name,
            percentage: downloadStatus.percentage,
            offlineRegion: offlineRegion,
        });
        this.props.setParentState({percentage:downloadStatus.percentage});
    }

    onResume () {
        if (this.state.offlineRegion) {
            this.state.offlineRegion.resume();
        }
    }

    onPause () {
        if (this.state.offlineRegion) {
            this.state.offlineRegion.pause();
        }
    }

    onPress = () =>
    {
        {this.setState({name: null, percentage: 0, offlineRegion: null});}
    }


    render () {
        return (null);
    }
}

//module.exports = CreateOfflineRegion;