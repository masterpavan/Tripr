import React from 'react'
import { TouchableOpacity, Text, Image, View } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../styles/ButtonListItemStyles'

export default class ButtonListItem extends React.PureComponent {
  static propTypes = {
    onPress: PropTypes.func,
    image: PropTypes.number,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    text: PropTypes.string
  }

    randomImage() {
        let images = [
            require('../../assets/images/rectangles/rectangle1.png'),
            require('../../assets/images/rectangles/rectangle2.png'),
            require('../../assets/images/rectangles/rectangle3.png'),
            require('../../assets/images/rectangles/rectangle4.png'),
            require('../../assets/images/rectangles/rectangle5.png'),
            require('../../assets/images/rectangles/rectangle6.png'),
            require('../../assets/images/rectangles/rectangle7.png'),
            require('../../assets/images/rectangles/rectangle8.png'),
            require('../../assets/images/rectangles/rectangle10.png'),
            require('../../assets/images/rectangles/rectangle11.png'),
        ]
        return images[Math.floor(Math.random()*10)];
    }

  render () {
    return (
        <TouchableOpacity style={[styles.container, this.props.style]} onPress={this.props.onPress}>
            <Image source={this.randomImage()} style={styles.image}/>
            <Text style={[styles.label,styles.overlayText]}>{this.props.text.toUpperCase()}</Text>
        </TouchableOpacity>
    )
  }
}
