
import React from "react";
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import Metrics from "../../../../../assets/styles/Themes/Metrics";
import {triprMapController} from "../../FourTabNavConfig";
import ButtonListItem from "../../../../../assets/elements/ButtonListItem";
import StarRating from 'react-native-star-rating';
import styles from "../DiscoverStyleSheet";


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

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async move(lat, long, zoom) {
        console.log('DO FIRST MOVE');
        triprMapController.setMapState({latitude:50, longitude:50, zoomLevel: zoom});
        console.log('WAIT 1 MILLISECOND');
        await this.sleep(1);
        console.log('DO SECOND MOVE');
        triprMapController.setMapState({latitude:lat, longitude:long, zoomLevel: zoom});
        this.props.navigation.navigate('MapView');
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
                                    <Image source={require('../../../../../assets/images/rectangles/rectangle6.png')} style={styles.poiDetailImageStyle}/>
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
                                        console.log("controller lat: " + this.state.lat);
                                        console.log("controller long: " + this.state.long);
                                        this.move(this.state.lat, this.state.long, 16);
                                    }}
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