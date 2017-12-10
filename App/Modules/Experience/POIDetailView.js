
import React from "react";
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import Metrics from "../../Misc/Styles/Themes/Metrics";
import {triprMapController} from "../FourTabNavConfig";
import ButtonListItem from "../../Misc/ButtonListItem";
import StarRating from 'react-native-star-rating';
import * as Progress from 'react-native-progress';
import formStyles from "../../Misc/Styles/FormStyles";
import styles from "./ExperienceStyleSheet";


export default class POIDetailView extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: `POI Details`,
        tabBarIcon: <Image source={require('../../../assets/images/discover_icon.png')}
                           style={{
                               height: 30,
                               width: 30,
                               resizeMode: 'contain'
                           }} />,
        tabBarLabel: "Experience",
        headerTitle: `${navigation.state.params.currentPOI.name}`.toUpperCase(),
        headerStyle: {
        },
        headerTitleStyle: {
            color:'#494949',
            alignSelf:'center',
            fontFamily: 'LeagueSpartan',
            fontSize:Metrics.h2,
            fontWeight:'200'
        },
        headerRight:(<View/>)
    });

    constructor(props) {
        super(props);
        console.log("(INFO) [POIDetailView.constructor] props are: ", this.props);

        this.state = {
            name:this.props.navigation.state.params.currentPOI.name,
            address:this.props.navigation.state.params.currentPOI.address,
            appCat:this.props.navigation.state.params.currentPOI.appCat,
            category:this.props.navigation.state.params.currentPOI.category,
            city:this.props.navigation.state.params.currentPOI.city,
            image_url:this.props.navigation.state.params.currentPOI.image_url,
            phone:this.props.navigation.state.params.currentPOI.phone,
            rating:this.props.navigation.state.params.currentPOI.rating,
            lat:this.props.navigation.state.params.currentPOI.coordinates_lat,
            long:this.props.navigation.state.params.currentPOI.coordinates_lon
        }

        console.log("(INFO) [POIDetailView.constructor] state is: ", this.state);
    }


    screenOptions() {
        if (this.state.isLoading) {
            return (<View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 4,
                marginBottom: 4,
                width:Metrics.screenWidth/2-6,
                height:Metrics.screenHeight/15,
                backgroundColor:'#dddddd',
                paddingHorizontal:4,}}>
                <Progress.CircleSnail
                    style={{alignSelf: 'center'}}
                    color={[
                        '#F44336',
                        '#2196F3',
                        '#009688',
                    ]}/>
            </View>)
        } else {
            return (
                <ButtonListItem
                    style={[styles.componentButton,{width:Metrics.screenWidth/2-6,marginRight:4}]}
                    text={'View on map'}
                    onPress={()=>{
                        this.showOnMap(this.state.lat, this.state.long, 16).done();}}
                />
            )
        }
    }
    render() {
        return (
            <View>
                <View style={styles.poiDetailBackgroundView}>
                    <Image
                        style={styles.poiImageStyle}
                        source={{uri: this.state.image_url}}
                    />
                </View>
                <View>
                    <View>
                        <ScrollView showsVerticalScrollIndicator={false} bounces={true} style={{}}>

                            <View style={styles.spacerView}/>

                            <View style={[styles.buttonsContainer,{backgroundColor:'#eee',paddingTop:4,justifyContent:'space-between'}]}>
                                <TouchableOpacity style={styles.starContainerStyle}>
                                    <Image source={require('../../../assets/images/rectangles/rectangle6.png')} style={styles.poiDetailImageStyle}/>
                                    <StarRating disabled={true} maxStars={5} rating={this.state.rating} starSize={35}
                                                emptyStar={'ios-star-outline'}
                                                fullStar={'ios-star'}
                                                halfStar={'ios-star-half'}
                                                iconSet={'Ionicons'}
                                                starColor={'#fff'}/></TouchableOpacity>
                                {this.screenOptions()}

                                <ButtonListItem
                                    style={[styles.componentButton]}
                                    text={this.state.address}
                                />
                                <ButtonListItem
                                    style={[styles.componentButton]}
                                    text={this.state.category}
                                />
                                <ButtonListItem
                                    style={[styles.componentButton]}
                                    text={this.state.phone?this.state.phone:'No Phone Number Available'}
                                />
                            </View>

                        </ScrollView>
                    </View>
                </View>

            </View>
        )
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async showOnMap(lat, long, zoom) {
        this.setState({isLoading:true});
        console.log('DO FIRST MOVE');
        triprMapController.setMapState({latitude:50, longitude:50, zoomLevel: zoom});
        console.log('WAIT 1 MILLISECOND');
        await this.sleep(1);
        console.log('DO SECOND MOVE');
        triprMapController.setMapState({latitude:lat, longitude:long, zoomLevel: zoom});
        this.props.navigation.navigate('MapView');
        this.setState({isLoading:false});
    }
}