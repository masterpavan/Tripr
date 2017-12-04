import { StyleSheet } from 'react-native'
import { Metrics } from './Themes/'

export default StyleSheet.create({
    container: {
        width: Metrics.screenWidth,
        aspectRatio: 3.8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4378ca',
        marginLeft: 10,
        marginTop: 15,
        marginBottom: 15
    },
    image: {
        width: Metrics.icons.xl,
        height: Metrics.icons.xl,
        margin: Metrics.baseMargin
    },
    label: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        color: '#000000'
    }
})