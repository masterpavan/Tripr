import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        minHeight: 40,
        padding: 20,
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