
import React, {Component} from "react";
import {Alert, View, StyleSheet, AsyncStorage, ScrollView} from 'react-native';

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
        height:300,
        backgroundColor: '#eee'
    },
});

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

        this.state = { screen: "list", isLoading:false }

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
                    setParentState={this.setTheState.bind(this)}
                    navigate={this.navigate}/>
            )
        }
    }

    deleteTrip() {
        triprTripController.deleteTrip(this.currentTripID,() => {
            this.props.navigate("TripListView")
        })
        //this.setState({screen: "editTrip"})
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={details.container}>

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