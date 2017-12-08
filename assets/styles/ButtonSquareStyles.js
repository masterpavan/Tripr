import { StyleSheet } from 'react-native'
import { Metrics } from './Themes/index'

export default StyleSheet.create({
  container: {
    width: (Metrics.screenWidth-12) / 2,
    aspectRatio: 1.0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#61aa75',
    marginLeft: 0,
    marginBottom: 0
  },
  image: {
    width: '100%',
      //aspectRatio: 1.0,
      resizeMode: 'contain'
    //height: Metrics.screenWidth / 2,
    //margin: Metrics.baseMargin,

  },
  label: {
      fontFamily: 'leaguegothic',
      fontSize: 40,
      color: '#fff',
      textShadowColor:'#222222',
      textShadowRadius: 5,
      textShadowOffset:{width:1,height:1},
      textAlign: 'center',
      position:'absolute'

  }
})
