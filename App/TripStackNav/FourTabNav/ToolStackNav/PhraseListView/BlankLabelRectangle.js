import React from 'react'
import { Text, Image, View } from 'react-native'
import PropTypes from 'prop-types'
import styles from './Styles/BlankLabelRectangleStyles'

export default class BlankLabelRectangle extends React.Component {
    static propTypes = {
        onPress: PropTypes.func,
        image: PropTypes.number,
        style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        text: PropTypes.string
    }

    render () {
        return (
            <View style={[styles.container, this.props.style]}>
                <Image resizeMode='contain' source={this.props.image} style={styles.image} />
                <Text style={styles.label}>{this.props.text}</Text>
            </View>
        )
    }
}
