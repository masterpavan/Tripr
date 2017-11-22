import React, {Component} from "react";
import {Button, Text, View, AsyncStorage } from "react-native";
import { FormLabel, FormInput } from 'react-native-elements'


export default class AddTripView extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            tripName: ""
            //tripDates, Icon, Other form inputs
        };
    }

    static navigationOptions = {
        title: 'Add Trip'
    };

    render() {
        return (
            <View>
                <Text>Hey</Text>
                <FormLabel>Name Your Trip</FormLabel>
                <FormInput onChangeText={(text) => this.setState({tripName:text})}/>
                <Button title="add Trip" onPress={()=>{this.submit()}}/>
            </View>
        )
    }

    submit() {

        /*AsyncStorage.getItem("currentTrips").then((value) => {
            let obj = value;
        }).done();
*/      let obj = {};
        obj[Math.random()] = {
            name: "Trip to "+this.state.tripName
            //other trip details
        };
        AsyncStorage.mergeItem("currentTrips", JSON.stringify(obj));
        this.props.navigation.goBack();
    }

}