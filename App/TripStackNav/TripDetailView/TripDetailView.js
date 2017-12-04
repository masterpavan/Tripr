
import React, {Component} from "react";
import {Alert, View, StyleSheet, AsyncStorage, ScrollView, Text, Image} from 'react-native';

import { Button, Icon } from 'react-native-elements';

import styles from '../../../assets/styles/ChooseCityPlannerStyles'
import AddCityComponent from "./AddCityComponent";
import CityListComponent from "./CityListComponent";
import {GTC, triprTripController} from "../TripStackNavConfig";
import Metrics from "../../../assets/styles/Themes/Metrics";
import EditTripComponent from "./EditTripComponent";
import * as Progress from 'react-native-progress';
import TriprStore from "../../../assets/services/TriprStore";


const details = StyleSheet.create({
    container: {
        height:Metrics.screenWidth/2,
        backgroundColor: 'transparent',
        justifyContent:'center',
        alignItems:'center'
    },
});
function randomImage() {
    let images = [
        require('../../../assets/images/rectangles/rectangle1.png'),
        require('../../../assets/images/rectangles/rectangle2.png'),
        require('../../../assets/images/rectangles/rectangle3.png'),
        require('../../../assets/images/rectangles/rectangle4.png'),
        require('../../../assets/images/rectangles/rectangle5.png'),
        require('../../../assets/images/rectangles/rectangle6.png'),
        require('../../../assets/images/rectangles/rectangle7.png'),
        require('../../../assets/images/rectangles/rectangle8.png'),
        require('../../../assets/images/rectangles/rectangle10.png'),
        require('../../../assets/images/rectangles/rectangle11.png'),
    ]
    return images[Math.floor(Math.random()*10)];
}

export default class TripDetailView extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: navigation.state.params.name,
        headerTitle: 'TRIP DETAILS',
        headerStyle: {
        },
        headerTitleStyle: {
            color:'#494949',
            alignSelf:'center',
            fontFamily: 'LeagueSpartan',
            fontSize:Metrics.h2,
            fontWeight:'200'
        },
        headerRight:(<View></View>)
    });

    constructor(props) {
        super(props);
        this.currentTripID = this.props.navigation.state.params.currentTripID;

        this.state = {
            screen: "list",
            isLoading:false,
            currentTrip:triprTripController.getTripObject(this.currentTripID)
        }


        const { navigate } = this.props.navigation;
        this.navigate = navigate;
        this.navigationOptions = {
            title: this.state.tripName
        };
    }

    setTheState(object) {
        this.setState(object);
    }

    screenOptions() {
        if(this.state.isLoading) {
            return (<View>
                <Progress.CircleSnail
                    style={{alignSelf:'center'}}
                    color={[
                        '#F44336',
                        '#2196F3',
                        '#009688',
                    ]}/>
            </View>)
        }
        if(this.state.screen === "list") {

            return (
                <View>
                    <ScrollView showsVerticalScrollIndicator={false} bounces={true} style={styles.container}>
                        <CityListComponent
                            currentTripID={this.currentTripID}
                            setParentState={this.setTheState.bind(this)}
                            navigate={this.navigate}
                            list={triprTripController.getTripObject(this.currentTripID).cityIDs}
                        />
                    </ScrollView>
                </View>
            )

        } else if(this.state.screen === "addCity") {

            return (
                <AddCityComponent
                    currentTripID={this.currentTripID}
                    setParentState={this.setTheState.bind(this)}
                    navigate={this.navigate}
                />
            )

        } else if(this.state.screen === 'editTrip') {
            return (
                <EditTripComponent
                    currentTripID={this.currentTripID}
                    refreshTripList={this.props.navigation.state.params.refreshTripList}
                    setParentState={this.setTheState.bind(this)}
                    navigate={this.navigate}/>
            )
        }
    }

    async deleteTrip() {
        await triprTripController.deleteTrip(this.currentTripID)
        this.props.navigation.state.params.refreshTripList();
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{position: 'absolute',height:Metrics.screenWidth/2, width:Metrics.screenWidth,backgroundColor:'#414821'}}>
                    <Image
                        style={{resizeMode:'cover',
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',}}
                        source={randomImage()}
                    />
                </View>
                <View style={details.container}>
                    <Text style={{
                        color:'#fff',
                        alignSelf:'center',
                        fontFamily: 'LeagueSpartan',
                        fontSize:Metrics.h2*1.7,
                        fontWeight:'200',
                        textShadowColor:'#222222',
                        textShadowRadius: 5,
                        textShadowOffset:{width:2,height:2}
                    }}>{`Trip to ${this.state.currentTrip.name}`.toUpperCase()}</Text>
                    <Text style={{
                        color:'#fff',
                        alignSelf:'center',
                        fontFamily: 'LeagueSpartan',
                        fontSize:Metrics.h2*0.9,
                        fontWeight:'200',
                        textShadowColor:'#222222',
                        textShadowRadius: 5,
                        textShadowOffset:{width:1,height:1}
                    }}>{`${this.state.currentTrip.dateRange[0]} - ${this.state.currentTrip.dateRange[1]}`.toUpperCase()}</Text>
                </View>
                <View style={{paddingHorizontal:50,paddingVertical:10,flexDirection: 'row', justifyContent: 'space-between', backgroundColor:'#fff'}}>
                    <Icon
                        size={Metrics.screenWidth/10}
                        name= 'ios-create-outline'
                        type='ionicon'
                        color={this.state.screen === "editTrip" ? '#f58d4e':'#494949'}
                        onPress={() => {
                            this.setState({screen: "editTrip"})
                        }}
                    />
                    <Icon
                        size={Metrics.screenWidth/10}
                        name= 'md-add'
                        type='ionicon'
                        color={this.state.screen === "addCity" ? '#f58d4e':'#494949'}
                        onPress={() => {
                            this.setState({screen: "addCity"})
                        }}
                    />
                    <Icon
                        size={Metrics.screenWidth/10}
                        name= 'ios-trash-outline'
                        type='ionicon'
                        color='#494949'
                        onPress={() =>
                        {
                            Alert.alert( 'Delete Trip',
                                `Are you sure you want to delete this Trip? It will delete all cities, events, and downloaded information associated.`,
                                [{text: 'Cancel', style: 'cancel'}, {text: 'Delete', onPress: () => this.deleteTrip()}, ], { cancelable: false } )
                        }
                        }
                    />
                </View>
                <View style={styles.mainContainer}>

                    {this.screenOptions()}
                </View>
            </View>

        )
    }
}