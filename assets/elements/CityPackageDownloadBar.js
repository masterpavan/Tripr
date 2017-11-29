import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import {Button, Text} from "react-native-elements";
import Bubble from "./Bubble";


const styles = StyleSheet.create({
    percentageText: {
        padding: 1,
        textAlign: 'center',
    }
});

class CityPackageDownloadBar extends React.PureComponent {
    render () {
        return (
            <Bubble>
                <View style={{ flex : 1 }}>
                    <Progress.Bar
                        width = {300}
                        progress={0.3}
                    />
                    <Text style={styles.percentageText}>
                        Downloading Offline Pack {this.props.name}
                    </Text>
                </View>
            </Bubble>
        );
    }
}

export default CityPackageDownloadBar;