import { StyleSheet } from 'react-native'
import { Metrics } from './Themes/index'

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth - 8,
    aspectRatio: 2,
      //height: Metrics.screenWidth/2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f58d4e',
    marginLeft: 10,
    marginBottom: 15
  },
  image: {
    width: Metrics.icons.xl,
    height: Metrics.icons.xl,
    margin: Metrics.baseMargin
  },
  label: {
    fontFamily: 'leaguegothic',
    fontSize: 60,
    color: '#eeeeee',
      textShadowColor:'#222222',
      textShadowRadius: 35,
      textShadowOffset:{width:2,height:2}
    //fontWeight: 'bold'
  }
})
