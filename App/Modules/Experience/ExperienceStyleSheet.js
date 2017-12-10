import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts, ApplicationStyles } from '../../Misc/Styles/Themes/index'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    container: {
        backgroundColor: '#eeeeee',
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 0
    },
    infoTextContainer:{
        backgroundColor:'transparent',
        //marginTop:20,
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    infoText:{
        textAlign: 'center',
        fontSize: 16,
        fontStyle: 'italic'

    },
    logo: {
        height: Metrics.images.logo,
        width: Metrics.images.logo,
        resizeMode: 'contain',
        marginTop: Metrics.doubleBaseMargin
    },
    buttonsContainer: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap'
    },

    centered: {
        alignItems: 'center'
    },
    componentButton: {
        marginRight: 0,
        marginLeft: 4,
        marginBottom: 4
    },

    apiButton: {
        borderColor: Colors.border,
        borderRightWidth: 1,
        borderRadius: 10
    },
    usageButton: {
        borderColor: Colors.border,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 10
    },
    deviceButton: {
        borderColor: Colors.border,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderRadius: 10
    },
    sectionText: {
        textAlign: 'center',
        //fontFamily: 'Montserrat_black',
        fontSize: 24,
        marginHorizontal: Metrics.baseMargin,
        lineHeight: 30,
        marginVertical: Metrics.doubleBaseMargin,
        color: '#f8f1e5',
        fontStyle: 'italic'
    },
    banner: {
        position: 'absolute',
        width: Metrics.screenWidth,
        backgroundColor: Colors.banner,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        left: 0,
        right: 0,
        height: 36
    },
    bannerLabel: {
        ...Fonts.style.h5,
        fontSize: 12,
        color: Colors.snow
    },

    searchBarContainerStyle: {
        backgroundColor:'transparent',
        borderTopColor:'transparent',
        borderBottomColor:'transparent',
        marginHorizontal:10,
        marginVertical:10
    },

    searchBarInputStyle: {
        backgroundColor:"#fff"
    },

    poiDetailImageStyle: {
        position:'absolute',
        width:'100%',
        resizeMode: 'contain'
    },

    poiImageStyle: {
        resizeMode:'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },

    poiDetailBackgroundView: {
        position: 'absolute',
        height:Metrics.screenHeight/2-8,
        width:Metrics.screenWidth-8,
        backgroundColor:'#eee',
        margin:4
    },

    spacerView: {
        height:Metrics.screenHeight/2.2,
        width:Metrics.screenWidth
    },

    starContainerStyle: {
        justifyContent: 'center',

        alignItems: 'center',
        marginRight: 0,
        marginLeft: 4,
        marginBottom: 4,
        width:Metrics.screenWidth/2-6,
        backgroundColor:'#494949',
        paddingHorizontal:4,
    },

    poiListViewSpacer: {
        height:Metrics.screenHeight/200
    },

    poiListContainer: {
        paddingBottom:Metrics.screenHeight/3
    },


})
