import React, {Component} from "react";
import { View, AsyncStorage } from "react-native";
import {Button, FormLabel, FormInput, Text} from 'react-native-elements'
import {triprTripController} from "../TripStackNavConfig";
import Metrics from "../../../assets/styles/Themes/Metrics";


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
            <View style={{backgroundColor:'transparent', flex:1}}>
                <FormLabel>Name Your Trip</FormLabel>
                <FormInput onChangeText={(text) => this.setState({tripName:text})}/>
                <View style={{
                    flexDirection: 'row',
                    flex: 1,
                    flexWrap: 'wrap'
                }}>
                    <Button
                        containerViewStyle={{width: (Metrics.screenWidth/2)-15, marginLeft:10, marginRight:0 }}
                        buttonStyle={{backgroundColor:"#f58d4e",marginLeft:0}} title="Add Trip" onPress={()=>{this.submit()}}/>
                    <Button
                        containerViewStyle={{width: (Metrics.screenWidth/2)-15, marginLeft:10, marginRight:0}}
                        buttonStyle={{backgroundColor:"#494949"}}
                        title="Cancel" onPress={()=>{this.props.setParentState({screen: "list"})}}/>
                </View>
            </View>
        )
    }

    submit() {

        let thisTrip = triprTripController.createNewTripObject(this.state.tripName, '11/29/2017', '12/25/2017', {});
        console.log("created trip: ", thisTrip);
        triprTripController.addTrip(thisTrip, ()=>{this.props.setParentState({screen: "list"})});

    }

}