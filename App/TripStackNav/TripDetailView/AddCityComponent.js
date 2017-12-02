import React, {Component} from "react";
import {View,StyleSheet, AsyncStorage, Picker} from "react-native";
import { Button, FormLabel, FormInput } from 'react-native-elements'
import {triprTripController} from "../TripStackNavConfig";
import Metrics from "../../../assets/styles/Themes/Metrics";

let styles = StyleSheet.create({
    labelStyle:{fontFamily:'LeagueSpartan', fontWeight:'200',color:'#494949'},
    labelContainerStyle:{marginBottom:5, alignSelf:'center'},
    inputContainerStyle:{
        width:Metrics.screenWidth-60,
        alignItems:"flex-start",
        marginLeft:30,
        marginRight:30,
        borderRadius:4,
        backgroundColor:'#fff'},
    inputStyle:{
        color:'#494949',
    },
    dateContainer: {
        width: (Metrics.screenWidth / 2) - 45,
        height: 40,
    },
    dateInput:{
        borderRadius:4,
        borderColor:'#fff',
        backgroundColor:'#fff'
    }
});

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
                <FormLabel containerStyle={styles.labelContainerStyle}
                           labelStyle={styles.labelStyle}>SELECT A CITY TO ADD TO YOUR TRIP</FormLabel>
                <Picker
                    style={[styles.inputContainerStyle,{borderRadius:5}]}
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
                <View style={{
                    flexDirection: 'row',
                    flex: 0,
                    flexWrap: 'wrap',
                    marginTop:40
                }}>
                    <Button
                        containerViewStyle={{width: (Metrics.screenWidth/2)-15, marginLeft:10, marginRight:0 }}
                        buttonStyle={{backgroundColor:"#f58d4e",marginLeft:0}} title="Add City" onPress={()=>{this.submit()}}/>
                    <Button
                        containerViewStyle={{width: (Metrics.screenWidth/2)-15, marginLeft:10, marginRight:0}}
                        buttonStyle={{backgroundColor:"#494949"}}
                        title="Cancel" onPress={()=>{this.props.setParentState({screen: "list"})}}/>
                </View>

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