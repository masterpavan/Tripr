import { StyleSheet } from 'react-native'
import { Metrics } from './Themes/index'

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth - 8,
    height: Metrics.screenHeight/15,
      //height: Metrics.screenWidth/2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#61aa75',
    marginLeft: 10,
    marginBottom: 15
  },
    image: {
        width: '100%',
        resizeMode: 'contain'
    },
    overlayText:{
        position:'absolute',
        marginLeft:15
    },
  label: {
    fontFamily: 'LeagueSpartan',
    fontSize: 20,
    color: '#eeeeee',
      textShadowColor:'#222222',
      textShadowRadius: 5,
      textShadowOffset:{width:0,height:0}
    //fontWeight: 'bold'
  }
})
