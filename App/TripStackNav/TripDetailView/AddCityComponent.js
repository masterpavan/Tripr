import React, {Component} from "react";
import {View, AsyncStorage, Picker} from "react-native";
import { Button, FormLabel, FormInput } from 'react-native-elements'
import {triprTripController} from "../TripStackNavConfig";


export default class AddCityComponent extends React.Component {


    constructor(props) {
        super(props);
        console.log("AddCity props are",props);
        this.state = {
            cityID: "0",
            cityName: "London"
            //tripDates, Icon, Other form inputs
        };

    }

    render() {

        return (
            <View>
                <FormLabel>Select a city from the dropdown</FormLabel>
                <Picker
                    selectedValue={this.state.cityName}
                    onValueChange={(itemValue, itemIndex) => {
                        console.log(itemValue,itemIndex);
                        this.setState({cityID: itemIndex,cityName: itemValue})
                    }}>
                    <Picker.Item label="London" value="London" />
                    <Picker.Item label="Barcelona" value="Barcelona" />
                    <Picker.Item label="Berlin" value="Berlin" />
                    <Picker.Item label="Compton" value="Compton" />
                    <Picker.Item label="Florence" value="Florence" />
                    <Picker.Item label="Honolulu" value="Honolulu" />
                    <Picker.Item label="Lisbon" value="Lisbon" />
                    <Picker.Item label="Los Angeles" value="Los_Angeles" />
                    <Picker.Item label="Manchester" value="Manchester" />
                    <Picker.Item label="Manila" value="Manila" />
                    <Picker.Item label="Mexico City" value="Mexico_City" />
                    <Picker.Item label="New York City" value="New_York_City" />
                    <Picker.Item label="Oslo" value="Oslo" />
                    <Picker.Item label="Paris" value="Paris" />
                    <Picker.Item label="Prague" value="Prague" />
                    <Picker.Item label="Rio De Janeiro" value="Rio_De_Janeiro" />
                    <Picker.Item label="Rome" value="Rome" />
                    <Picker.Item label="San Diego" value="San_Diego" />
                    <Picker.Item label="San Francisco" value="San_Francisco" />
                    <Picker.Item label="Singapore" value="Singapore" />
                    <Picker.Item label="Sydney" value="Sydney" />
                    <Picker.Item label="Vancouver" value="Vancouver" />
                </Picker>
                <Button buttonStyle={{backgroundColor:"#f58d4e"}} title="Add City" onPress={()=>{this.submit()}}/>
                <Button buttonStyle={{backgroundColor:"#d7833e", marginTop:20}}
                        title="Cancel" onPress={()=>{this.props.setParentState({screen: "list"})}}/>

            </View>
        )
    }

    submit() {

        triprTripController.addCityToTrip(this.props.currentTripID, this.state.cityID, this.state.cityName, ()=>{
            this.props.setParentState({screen: "list"})
        })
       /* AsyncStorage.getItem("currentTrips").then((value) => {
            //get the current trip
            let currentTrip = JSON.parse(value);
            let thisTrip = currentTrip[this.props.currentTripID];
            //add this city to the trip by ID
            thisTrip.cityIDs[this.state.cityID] = this.state.cityName;

            currentTrip[this.props.currentTripID] = thisTrip;
            //push the current trip back into the database
            AsyncStorage.setItem("currentTrips", JSON.stringify(currentTrip));
            this.props.setParentState({cityIDs: thisTrip.cityIDs});

        }).done();*/


    }

}