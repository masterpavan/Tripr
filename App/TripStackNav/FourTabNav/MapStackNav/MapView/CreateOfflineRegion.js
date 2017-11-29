import React from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import geoViewport from '@mapbox/geo-viewport';

const MAPBOX_VECTOR_TILE_SIZE = 512;

export default class CreateOfflineRegion extends React.Component {


    constructor (props) {
        super(props);

        this.state = {name:null, percentage: 0, offlineRegion:null};
        this.onDownloadProgress = this.onDownloadProgress.bind(this);
        MapboxGL.offlineManager.subscribe(this.props.cityName, this.onDownloadProgress);

        this.createPack = this.createPack.bind(this);
    }

    componentWillUnmount () {
        MapboxGL.offlineManager.unsubscribe(this.props.cityName, this.onDownloadProgress);
    }


    async createPack (packName, long, lat) {
        this.setState({name:packName, percentage:0, offlineRegion:null});
        const COORDINATES = [long, lat];
        const bounds = geoViewport.bounds(COORDINATES, 1, [0.5, 0.5], MAPBOX_VECTOR_TILE_SIZE);

        const options = {
            name: packName,
            styleURL: MapboxGL.StyleURL.Street,
            bounds: [[bounds[0], bounds[1]], [bounds[2], bounds[3]]],
            minZoom: 12,
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

        if(downloadStatus.percentage < 100) {
            this.props.setParentState({percentage: downloadStatus.percentage});
        }
        else {
            this.props.setParentState({percentage: 0});
        }
    }

    render () {
        return (null);
    }
}

//module.exports = CreateOfflineRegion;