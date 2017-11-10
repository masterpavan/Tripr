import { StyleSheet } from 'react-native'
import { Metrics } from './Themes/'

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth - 20,
    aspectRatio: 2.8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f1e5',
    marginLeft: 10,
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
