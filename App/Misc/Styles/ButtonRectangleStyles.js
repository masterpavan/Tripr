import { StyleSheet } from 'react-native'
import { Metrics } from './Themes/index'

export default StyleSheet.create({
    container: {
        width: Metrics.screenWidth - 8,
        aspectRatio: 2,
        //height: Metrics.screenWidth/2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#61aa75',
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
        fontSize: 60,
        color: '#fff',
        textShadowColor:'#222222',
        textShadowRadius: 10,
        textShadowOffset:{width:2,height:2}
        //fontWeight: 'bold'
    }
})
