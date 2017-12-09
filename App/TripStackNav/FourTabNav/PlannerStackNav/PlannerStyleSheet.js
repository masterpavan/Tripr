import { StyleSheet, Dimensions } from 'react-native'
import Metrics from "../../../../assets/styles/Themes/Metrics";

export default StyleSheet.create({

    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex:1,
        paddingTop: 30
    },
    buttonStyle: {
        width:45,
        height:20,
        backgroundColor:'transparent',
    },
    textStyle:{
        fontSize:10,
        color:'#15bdd9'
    },
    singleDayView: {
        flex: 1
    },
    addEventButtonStyle: {
        width: 50,
        height: 50,
        backgroundColor: 'transparent',
    },

    addEventTextStyle: {
        fontSize:40,
        color:'#15bdd9'
    },

    addEventView: {
        alignItems:"center"
    },

    calendar: {
        flex: 1,
        borderTopWidth: 1,
        paddingTop: 5,
        height: Dimensions.get('window').height,
        //borderBottomWidth: 1,
        borderColor: '#eee',
    },

    container: {
        flex: 1,
        backgroundColor: '#eee'
    },

    tabBarIconStyle: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },

    calenderView: {
        flex:1
    },

    timeChooser: {
        flexDirection: 'row',
        flex: 0,
        height: 80,
        flexWrap: 'wrap'
    },

    editOrCancelButtonContainer: {
        width: (Metrics.screenWidth/2)-15,
        marginLeft:10,
        marginRight:0
    },

    cancelButtonStyle: {
        backgroundColor:"#494949"
    },

    editOrCancelButtonView: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap'
    },

    dateLabel: {
        width: Dimensions.get('window').width/2.5
    },
    dateInput: {
        width: Dimensions.get('window').width/2.5,
        borderWidth:2,
        borderColor: 'lightgrey'

    },
    text: {
        textAlign: 'center',
        borderColor: '#bbb',
        padding: 10,
        backgroundColor: '#eee'
    },

    formBackgroundView: {
        backgroundColor:'transparent',
        flex:1
    },

    dateContainer: {
        width: (Metrics.screenWidth / 2) - 45,
        height: 40,
        marginLeft: 30,
        marginRight: 15
    },

    addButtonView: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap'
    },

    addOrCancelButtonContainer: {
        width: (Metrics.screenWidth/2)-15,
        marginLeft:10,
        marginRight:0
    },

    addButtonStyle: {
        backgroundColor:"#f58d4e",
        marginLeft:0
    },

    editButtonStyle: {
        backgroundColor:"#f58d4e",
        marginLeft:0
    },

    addOrCancelButtonView: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap'
    }
})
