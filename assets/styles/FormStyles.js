import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts, ApplicationStyles } from './Themes/index';

export default StyleSheet.create({
    labelStyle:{fontFamily:'LeagueSpartan', fontWeight:'200',color:'#494949'},
    labelContainerStyle:{marginBottom:5, alignSelf:'center'},
    inputContainerStyle:{
        width:Metrics.screenWidth-60,
        alignItems:"flex-start",
        marginLeft:30,
        marginRight:30,
        borderRadius:4,
        backgroundColor:'#fff'},
    inputStyle:{
        color:'#494949',
    },
    dateContainer: {
        width: (Metrics.screenWidth / 2) - 45,
        height: 40,
    },
    dateInput:{
        borderRadius:4,
        borderColor:'#fff',
        backgroundColor:'#fff'
    }
});