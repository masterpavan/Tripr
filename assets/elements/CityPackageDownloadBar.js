import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import * as Progress from 'react-native-progress';
import Bubble from "./Bubble";
import CreateOfflineRegion from "../../App/TripStackNav/FourTabNav/MapStackNav/MapView/CreateOfflineRegion.js";
import MapboxGL from '@mapbox/react-native-mapbox-gl';

const styles = StyleSheet.create({
    percentageText: {
        padding: 1,
        textAlign: 'center',
    }
});

class CityPackageDownloadBar extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {percentage:0, isLoading:true, pack: null};
    }

    componentDidMount() {
        MapboxGL.offlineManager.getPack(this.props.cityName).then((pack) => {
            this.setState({isLoading: false, pack:pack});
        });
    }

    setTheState(object) {
        this.setState(object);
    }

    renderOptions() {
        if(!(this.state.isLoading)) {
            if (!(this.state.pack) && this.state.percentage == 0) {
                return (
                    <TouchableOpacity
                        onPress={() =>
                                    {
                                        this.refs.create.createPack(this.props.cityName, -122.2416, 37.7652);
                                    }
                                }
                    >
                        <View>
                            <Text style={styles.percentageText}>You do not have the {this.props.cityName} Package. Tap
                                to download</Text>
                        </View>
                    </TouchableOpacity>
                );
            }
            else if (this.state.pack && this.state.percentage == 0) {
                return (<Text style={styles.percentageText}>You have the {this.props.cityName} Package</Text>);
            }
            else {
                return (
                    <View>
                        <Progress.Bar
                            width={300}
                            progress={this.state.percentage / 100}
                        />
                        <Text style={styles.percentageText}>
                            Downloading {this.props.cityName} Package
                        </Text>
                    </View>
                )
            }
        }
        else {
            return (<Text style={styles.percentageText}> Loading... </Text>)
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