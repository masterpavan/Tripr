
import React, {Component} from "react";
import {ScrollView, Text, View, AsyncStorage} from 'react-native';
import { Button } from 'react-native-elements';

import styles from '../../../assets/styles/ChooseCityPlannerStyles'
import TripListComponent from "./TripListComponent";
import AddTripComponent from "./AddTripComponent";

export default class TripListView extends React.Component {


    constructor(props) {
        super(props);
        this.state = {currentTrips: {}, screen: "list"}
        const { navigate } = this.props.navigation;
        this.navigate = navigate;
    }

    componentDidMount() {
        AsyncStorage.setItem("currentTrips", JSON.stringify({}));
        console.log("the component mounted");
    };

    static navigationOptions = {
        title: 'TripList'
    };

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
                                this.setState({screen: "addTrip"})
                                //this.props.navigation.navigate('AddTripView');
                            }}
                        />
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} bounces={true} style={styles.container}>
                        <TripListComponent setParentState={this.setTheState.bind(this)} navigate={this.navigate} list={this.state.currentTrips}/>
                    </ScrollView>
                </View>
            )

        } else if(this.state.screen === "addTrip") {

            return (
                <AddTripComponent setParentState={this.setTheState.bind(this)} navigate={this.navigate}/>
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