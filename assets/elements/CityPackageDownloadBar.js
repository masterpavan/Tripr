import React from 'react';
import { Alert, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import Bubble from "./Bubble";
import CreateOfflineRegion from "../../App/TripStackNav/FourTabNav/MapStackNav/MapView/CreateOfflineRegion.js";
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import TriprStore from "../../assets/services/TriprStore";

const styles = StyleSheet.create({
    percentageText: {
        padding: 1,
        textAlign: 'center',
    },
    infoText: {
        padding: 1,
        textAlign: 'center'
    },
    topMargin: {
    },
    downloadButtons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    cancelIcon: {
        backgroundColor:'#f44336',
        position: 'absolute',
        right:-55,
        top: -15
    },
    loadingCircle: {
        position: 'absolute',
        right: -15,
        top:-10
    }
});

class CityPackageDownloadBar extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {percentage:0, isLoading:true, pack: null};
    }

    componentDidMount() {
        this.fixAsync();
        TriprStore.getCityCoord(this.props.navigation.state.params.cityName, function(coordinates){
            this.setState({latitude:coordinates[0], longitude:coordinates[1]});
        }.bind(this));
    }

    fixAsync() {
        MapboxGL.offlineManager.getPack(this.props.cityName).then((pack) => {
            this.setState({isLoading: false, pack:pack});
        });
    }

    setTheState(object) {
        this.setState(object);
    }

    confirmDelete() {
        this.setState({isLoading:true});
        this.refs.create.deletePack(this.props.cityName);
    }

    renderOptions() {
        if(!(this.state.isLoading)) {
            if (!(this.state.pack) && this.state.percentage == 0) {
                return (
                    <View style = {styles.downloadButtons}>
                        <TouchableOpacity
                            onPress={() =>
                                        {
                                            this.refs.create.createPack(this.props.cityName, this.state.longitude, this.state.latitude);
                                        }
                                    }
                        >
                            <View>
                                <Text style={styles.infoText}>You do not have the {this.props.cityName} Package. Tap
                                    to download</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                );
            }
            else if (this.state.percentage == 100 || (this.state.pack && this.state.percentage == 0)) {
                return (
                    <View style = {styles.downloadButtons}>
                        <View style={styles.topMargin}>
                            <Progress.Bar
                                width={300}
                                color={"#00C853"}
                                progress={100}
                            />
                            <Text style={styles.percentageText}>
                                You can now view this area offline
                            </Text>
                            <Icon
                                containerStyle = {styles.cancelIcon}
                                raised
                                size={18}
                                name= 'close'
                                type='font-awesome'
                                color='#fff'
                                onPress={() =>
                                            {
                                                Alert.alert( 'Delete Pack', `Are you sure you want to delete this pack? You will have to re-download if you do.`, [{text: 'Cancel', style: 'cancel'}, {text: 'OK', onPress: () => this.confirmDelete()}, ], { cancelable: false } )
                                            }
                                        }
                            />
                        </View>

                    </View>
                );
            }
            else if (this.state.percentage != 0 && this.state.percentage != 100){
                return (
                    <View style = {styles.downloadButtons}>
                        <View style={styles.topMargin}>
                            <Progress.Bar
                                width={300}
                                progress={this.state.percentage / 100}
                            />
                            <Text style={styles.percentageText}>
                                Downloading {this.props.cityName} Package
                            </Text>
                            <Icon
                                containerStyle = {styles.cancelIcon}
                                raised
                                size={18}
                                name= 'close'
                                type='font-awesome'
                                color='#fff'
                                onPress={() =>
                                            {
                                                alert("Download Canceled!");
                                                this.setState({isLoading:true});
                                                this.refs.create.deletePack();
                                            }
                                }
                            />
                        </View>

                    </View>
                )
            }
        }
        else {
            return (
                <View style={{flex:1}}>
                    <Progress.CircleSnail
                    style={styles.loadingCircle}
                    color={[
                        '#F44336',
                        '#2196F3',
                        '#009688',
                    ]}/>
                </View>
            );
        }
    }

    render () {
        return (
            <Bubble>
                <CreateOfflineRegion
                    ref = "create"
                    cityName = {this.props.cityName}
                    setParentState = {this.setTheState.bind(this)}
                />
                <View style = {{flex: 1}}>
                    {this.renderOptions()}
                </View>
            </Bubble>
        );
    }
}

export default CityPackageDownloadBar;