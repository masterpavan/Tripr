import { StyleSheet } from 'react-native'
import { Metrics } from './Themes/index'

export default StyleSheet.create({
    container: {
        width: Metrics.screenWidth - 8,
        aspectRatio: 3.2,
        //height: Metrics.screenWidth/2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f58d4e',
        marginLeft: 10,
        marginBottom: 15
    },
    image: {
        width: '100%',
        //aspectRatio: 1.0,
        resizeMode: 'contain'
        //height: Metrics.screenWidth / 2,
        //margin: Metrics.baseMargin,

    },
    overlayText:{
        position:'absolute'

    },
    label: {
        fontFamily: 'leaguegothic',
        fontSize: 40,
        color: '#FFFFFF',
        textShadowColor:'#222222',
        textShadowRadius: 5,
        textShadowOffset:{width:1,height:1},
        textAlign: 'center',
        position:'absolute'
    }
})
