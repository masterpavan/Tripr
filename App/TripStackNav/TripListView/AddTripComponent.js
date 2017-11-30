import React, {Component} from "react";
import { View, AsyncStorage } from "react-native";
import { Button, FormLabel, FormInput } from 'react-native-elements'
import {triprTripController} from "../TripStackNavConfig";


export default class AddTripComponent extends React.Component {


    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            tripName: ""
            //tripDates, Icon, Other form inputs
        };

    }

    render() {

        return (
            <View>
                <FormLabel>Name Your Trip</FormLabel>
                <FormInput onChangeText={(text) => this.setState({tripName:text})}/>
                <Button buttonStyle={{backgroundColor:"#f58d4e"}} title="Add Trip" onPress={()=>{this.submit()}}/>
                <Button buttonStyle={{backgroundColor:"#d7833e", marginTop:20}}
                        title="Cancel" onPress={()=>{this.props.setParentState({screen: "list"})}}/>
            </View>
        )
    }

    submit() {

        let thisTrip = triprTripController.createNewTripObject(this.state.tripName, '11/29/2017', '12/25/2017', {});
        console.log("created trip: ", thisTrip);
        triprTripController.addTrip(thisTrip, ()=>{this.props.setParentState({screen: "list"})});

    }

}