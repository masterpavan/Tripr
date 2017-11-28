import React, {Component} from "react";
import { View, AsyncStorage } from "react-native";
import { Button, FormLabel, FormInput } from 'react-native-elements'


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
        this.props.listView.navigationOptions = {title:"Add you a Trip now Fam"}
        return (
            <View>
                <FormLabel>Name Your Trip</FormLabel>
                <FormInput onChangeText={(text) => this.setState({tripName:text})}/>
                <Button buttonStyle={{backgroundColor:"#f58d4e"}} title="Add Trip" onPress={()=>{this.submit()}}/>
            </View>
        )
    }

    submit() {
        let thisTrip = {};
        let id = Math.random();
        thisTrip[id] = {
            id: id,
            name: "Trip to "+this.state.tripName,
            cityIDs: {},
            //other trip details
        };

        AsyncStorage.mergeItem("currentTrips", JSON.stringify(thisTrip));

        AsyncStorage.getItem("currentTrips").then((value) => {
            this.props.listView.setState({currentTrips: JSON.parse(value)});
            console.log("We set the TripListView state!");
        }).done();

        this.props.listView.setState({screen: "list"})
    }

}