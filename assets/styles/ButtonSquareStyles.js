import { StyleSheet } from 'react-native'
import { Metrics } from './Themes/index'

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth / 2.3,
    aspectRatio: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f58d4e',
    marginLeft: 15,
    marginBottom: 15
  },
  image: {
    width: Metrics.icons.xl,
    height: Metrics.icons.xl,
    margin: Metrics.baseMargin
  },
  label: {
      fontFamily: 'Hallo Sans',
      fontSize: 30,
      color: '#eeeeee',
      fontWeight: 'bold'
  }
})
