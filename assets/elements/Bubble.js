import React from 'react';
import { View, StyleSheet } from 'react-native';
import Metrics from "../styles/Themes/Metrics";

const styles = StyleSheet.create({
    container: {
        minHeight: Metrics.screenHeight/15,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
});

class Bubble extends React.PureComponent {
    render () {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        );
    }
}

export default Bubble;