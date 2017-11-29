import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import {Button, Text} from "react-native-elements";
import Bubble from "./Bubble";
import CreateOfflineRegion from "../../App/TripStackNav/FourTabNav/MapStackNav/MapView/CreateOfflineRegion.js";


const styles = StyleSheet.create({
    percentageText: {
        padding: 1,
        textAlign: 'center',
    }
});

class CityPackageDownloadBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {percentage: 0};
    }


    setPercentage(object) {
        this.setState(object);
    }


    renderBar() {
        if(this.state.percentage == 0){
            return (
                <Bubble>
                    <View style={{flex: 1}}>
                        <Text style={styles.percentageText}>
                            You have not downloaded this City Package
                        </Text>
                    </View>
                </Bubble>
            );
        }
        else if(this.state.percentage == 100) {
            return (
                <Bubble>
                    <View style={{flex: 1}}>
                        <Text style={styles.percentageText}>
                            You have this City Package downloaded
                        </Text>
                    </View>
                </Bubble>
            );
        }
        else {
            return(
                <Bubble>
                    <View style={{flex: 1}}>
                        <Progress.Bar
                            width={300}
                            progress={this.state.percentage/100}
                        />
                        <Text style={styles.percentageText}>
                            Downloading Offline Pack {this.props.name}
                        </Text>
                    </View>
                </Bubble>
            )
        }
    }

    setTheState(object) {
        this.setState(object);
    }

    render () {
        return (
            <View>
                <CreateOfflineRegion setParentState={this.setTheState.bind(this)} ref = "create"/>
                <Bubble>
                    <View style={{flex: 1}}>
                        <Progress.Bar
                            width={300}
                            progress={this.state.percentage/100}
                        />
                        <Text style={styles.percentageText}>
                            Downloading Offline Pack {this.props.name}
                        </Text>
                    </View>
                </Bubble>
            </View>
        );
    }
}

export default CityPackageDownloadBar;