import { StyleSheet } from 'react-native'
import { Metrics } from './Themes/index'

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth / 2.3,
    aspectRatio: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4378ca',
    marginLeft: 15,
    marginBottom: 15
  },
  image: {
    width: 1.5*Metrics.icons.xl,
    height: 1.5*Metrics.icons.xl,
    margin: Metrics.baseMargin
  },
  label: {
      fontFamily: 'Hallo Sans',
      fontSize: 25,
      color: '#eeeeee',
      fontWeight: 'bold',
      textAlign: 'center',

  }
})
