
import React, {Component} from "react";
import {Text, View, StyleSheet, AsyncStorage, ScrollView} from 'react-native';

import { Button } from 'react-native-elements';

import styles from '../../../assets/styles/ChooseCityPlannerStyles'
import AddCityComponent from "./AddCityComponent";
import CityListComponent from "./CityListComponent";
import {GTC, triprTripController} from "../TripStackNavConfig";


const details = StyleSheet.create({
    container: {
        height:300,
        backgroundColor: '#00ff00'
    }
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
            fontSize:20,
            fontWeight:'200'
        },
        headerRight:(<View></View>)
    });

    constructor(props) {
        super(props);
        this.currentTripID = this.props.navigation.state.params.currentTripID;

        this.state = { screen: "list" }

        const { navigate } = this.props.navigation;
        this.navigate = navigate;
        this.navigationOptions = {
            title: this.state.tripName
        };
    }

    /*componentDidMount() {
        //also update the city IDs according to the trip we are on
        AsyncStorage.getItem("currentTrips").then((value) => {
            let thisTrip = JSON.parse(value)[this.state.currentTripID];
            this.setState({cityIDs: thisTrip.cityIDs, tripName: thisTrip.name})

        })
    }*/

    setTheState(object) {
        this.setState(object);
    }

    screenOptions() {
        if(this.state.screen === "list") {

            return (
                <View>
                    <View style={{alignItems:'center', backgroundColor:'transparent'}}>
                        <Button
                            buttonStyle={{
                                width:50,
                                height:50,
                                backgroundColor:'transparent',
                            }}
                            textStyle={{
                                fontSize:40,
                                color:'#15bdd9'
                            }}
                            title='+'
                            onPress={() => {
                                this.setState({screen: "addCity"})
                            }}
                        />
                    </View>
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

        }
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={details.container}>

                </View>
                <View style={styles.mainContainer}>

                    {this.screenOptions()}
                </View>
            </View>

        )
    }
}