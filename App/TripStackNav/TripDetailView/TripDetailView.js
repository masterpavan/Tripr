
import React, {Component} from "react";
import {Text, View, AsyncStorage, ScrollView} from 'react-native';

import { Button } from 'react-native-elements';

import styles from '../../../assets/styles/ChooseCityPlannerStyles'
import AddCityComponent from "./AddCityComponent";
import CityListComponent from "./CityListComponent";

export default class TripDetailView extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: navigation.state.params.name
    });

    constructor(props) {
        super(props);
        this.state = {
            screen: "list",
            tripName: null,
            currentTripID: this.props.navigation.state.params.currentTripID,
            cityIDs: {}
        }
        const { navigate } = this.props.navigation;
        this.navigate = navigate;
        this.navigationOptions = {
            title: this.state.tripName
        };
    }

    componentDidMount() {
        //also update the city IDs according to the trip we are on
        AsyncStorage.getItem("currentTrips").then((value) => {
            let thisTrip =JSON.parse(value)[this.state.currentTripID];
            this.setState({cityIDs: thisTrip.cityIDs, tripName: thisTrip.name})

        })
    }

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
                        <CityListComponent currentTripID={this.state.currentTripID} setParentState={this.setTheState.bind(this)} navigate={this.navigate} list={this.state.cityIDs}/>
                    </ScrollView>
                </View>
            )

        } else if(this.state.screen === "addCity") {

            return (
                <AddCityComponent currentTripID={this.state.currentTripID} setParentState={this.setTheState.bind(this)} navigate={this.navigate}/>
            )

        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                {this.screenOptions()}
            </View>
        )
    }
}