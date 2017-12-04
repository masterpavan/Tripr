import { StyleSheet } from 'react-native'
import { Metrics } from './Themes/'

export default StyleSheet.create({
    container: {
        width: Metrics.screenWidth / 2.1,
        aspectRatio: 3.9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        marginLeft: 0,
    },
    image: {
        width: Metrics.icons.xl,
        height: Metrics.icons.xl,
        margin: Metrics.baseMargin
    },
    label: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        color: '#999999'
    }
})