import React, {Component} from "react";
import {View, AsyncStorage, Picker} from "react-native";
import { Button, FormLabel, FormInput } from 'react-native-elements'


export default class EditTripComponent extends React.Component {


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
                    <Picker.Item label="Yuba City" value="Yuba City" />
                </Picker>
                <Button buttonStyle={{backgroundColor:"#f58d4e"}} title="Add City" onPress={()=>{this.submit()}}/>
                <Button buttonStyle={{backgroundColor:"#d7833e", marginTop:20}}
                        title="Cancel" onPress={()=>{this.props.setParentState({screen: "list"})}}/>

            </View>
        )
    }

    submit() {

        AsyncStorage.getItem("currentTrips").then((value) => {
            //get the current trip
            let currentTrip = JSON.parse(value);
            let thisTrip = currentTrip[this.props.currentTripID];
            //add this city to the trip by ID
            thisTrip.cityIDs[this.state.cityID] = this.state.cityName;

            currentTrip[this.props.currentTripID] = thisTrip;
            //push the current trip back into the database
            AsyncStorage.setItem("currentTrips", JSON.stringify(currentTrip));
            this.props.setParentState({cityIDs: thisTrip.cityIDs});

        }).done();

        this.props.setParentState({screen: "list"})
    }

}