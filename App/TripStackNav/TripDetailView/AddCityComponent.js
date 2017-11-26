import React, {Component} from "react";
import {View, AsyncStorage, Picker} from "react-native";
import { Button, FormLabel, FormInput } from 'react-native-elements'


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
        this.props.detailsView.navigationOptions = {title:"Add you a Trip now Fam"}
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
                <Button buttonStyle={{backgroundColor:"#d7833e", marginTop:20}} title="Cancel" onPress={()=>{this.props.detailsView.setState({screen: "list"})}}/>

            </View>
        )
    }

    submit() {

        AsyncStorage.getItem("currentTrips").then((value) => {
            //get the current trip
            let currentTrip = JSON.parse(value);
            let thisTrip = currentTrip[this.props.currentTripID];
            //add this city to the trip by ID
            console.log(thisTrip);
            thisTrip.cityIDs[this.state.cityID] = this.state.cityName;
            console.log(thisTrip);
            currentTrip[this.props.currentTripID] = thisTrip;
            //push the current trip back into the database
            AsyncStorage.setItem("currentTrips", JSON.stringify(currentTrip));
            this.props.detailsView.setState({cityIDs: thisTrip.cityIDs});
            console.log("We set the TripListView state!");
        }).done();

        this.props.detailsView.setState({screen: "list"})
    }

}