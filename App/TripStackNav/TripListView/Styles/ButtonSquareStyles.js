import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth / 2.3,
    aspectRatio: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f1e5',
    marginLeft: 15,
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
