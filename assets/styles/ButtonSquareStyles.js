import { StyleSheet } from 'react-native'
import { Metrics } from './Themes/index'

export default StyleSheet.create({
  container: {
    width: (Metrics.screenWidth-12) / 2,
    aspectRatio: 1.0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4378ca',
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
      color: '#eeeeee',
      //fontWeight: 'bold',
      textAlign: 'center',
      position:'absolute'

  }
})
