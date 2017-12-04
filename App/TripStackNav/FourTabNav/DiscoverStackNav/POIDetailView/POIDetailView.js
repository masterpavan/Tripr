
import React, {Component} from "react";
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Button, FormLabel} from "react-native-elements";
import Metrics from "../../../../../assets/styles/Themes/Metrics";
import {triprMapController} from "../../FourTabNavConfig";
import styles from '../../../../../assets/styles/ChooseCityPlannerStyles'
import ButtonListItem from "../../../../../assets/elements/ButtonListItem";
import StarRating from 'react-native-star-rating';
import formStyles from "../../../../../assets/styles/FormStyles";


export default class POIDetailView extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: `POI Details`,
        tabBarIcon: <Image source={require('../../../../../assets/images/discover_icon.png')}
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

    render() {
        return (
            <View>
                <View style={{position: 'absolute',height:Metrics.screenHeight/2-8, width:Metrics.screenWidth-8,backgroundColor:'#eee', margin:4}}>
                    <Image
                        style={{resizeMode:'cover',
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',}}
                        source={{uri: this.state.image_url}}
                    />
                </View>
                <View>
                    <View>
                        <ScrollView showsVerticalScrollIndicator={false} bounces={true} style={{}}>

                            <View style={{height:Metrics.screenHeight/2.2, width:Metrics.screenWidth}}/>

                            <View style={[styles.buttonsContainer,{backgroundColor:'#eee',paddingTop:4,justifyContent:'space-between'}]}>
                                <TouchableOpacity style={{
                                    justifyContent: 'center',

                                    alignItems: 'center',
                                    marginRight: 0,
                                    marginLeft: 4,
                                    marginBottom: 4,
                                    width:Metrics.screenWidth/2-6,
                                    backgroundColor:'#494949',
                                    paddingHorizontal:4,}}>
                                    <Image source={require('../../../../../assets/images/rectangles/rectangle6.png')} style={{position:'absolute',width:'100%',resizeMode: 'contain'}}/>
                                    <StarRating disabled={true} maxStars={5} rating={this.state.rating} starSize={35}
                                                  emptyStar={'ios-star-outline'}
                                                  fullStar={'ios-star'}
                                                  halfStar={'ios-star-half'}
                                                  iconSet={'Ionicons'}
                                                  starColor={'#fff'}/></TouchableOpacity>


                                <ButtonListItem
                                    style={[styles.componentButton,{width:Metrics.screenWidth/2-6,marginRight:4}]}
                                    text={'View on map'}
                                    onPress={()=>{
                                        triprMapController.setMapState({latitude:this.state.lat, longitude:this.state.long, zoomLevel: 16});
                                        this.props.navigation.navigate('MapView')}}
                                />
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
}