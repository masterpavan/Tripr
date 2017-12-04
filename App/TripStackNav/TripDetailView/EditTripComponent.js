import React, {Component} from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import {Button, FormLabel, FormInput, Text} from 'react-native-elements'
import {triprTripController} from "../TripStackNavConfig";
import Metrics from "../../../assets/styles/Themes/Metrics";
import DatePicker from 'react-native-datepicker'
import formStyles from "../../../assets/styles/FormStyles";
import ValidationComponent from 'react-native-form-validator';

export default class EditTripComponent extends ValidationComponent {


    constructor(props) {
        super(props);
        console.log(props);
        let currentTrip = triprTripController.getTripObject(this.props.currentTripID)
        this.state = {
            tripName: currentTrip.name,
            startDate: currentTrip.dateRange[0],
            endDate: currentTrip.dateRange[1],
            cityIDs: currentTrip.cityIDs
            //tripDates, Icon, Other form inputs
        };

    }

    render() {
        console.log("addTrip state is:", this.state);
        return (
            <View style={{backgroundColor:'transparent', flex:1}}>
                <FormLabel containerStyle={formStyles.labelContainerStyle}
                           labelStyle={formStyles.labelStyle}>RENAME YOUR TRIP</FormLabel>
                <FormInput containerStyle={formStyles.inputContainerStyle}
                           inputStyle={formStyles.inputStyle}
                           value={this.state.tripName}
                           onChangeText={(text) => this.setState({tripName:text})}/>
                <FormLabel containerStyle={formStyles.labelContainerStyle}
                           labelStyle={formStyles.labelStyle}>RESELECT YOUR TRIP DATES</FormLabel>

                <View style={{
                    flexDirection: 'row',
                    flex:0,
                    height: 80,
                    flexWrap: 'wrap',
                }}>
                    <DatePicker
                        style={[formStyles.dateContainer,{marginLeft: 30,marginRight: 15}]}
                        date={this.state.startDate}
                        mode="date"
                        showIcon={false}
                        placeholder="Start Date"
                        format="MM-DD-YYYY"
                        minDate="2017-01-01"
                        maxDate="2019-01-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{dateInput: formStyles.dateInput}}
                        onDateChange={(date) => {this.setState({startDate: date})}}
                    />
                    <DatePicker
                        style={[formStyles.dateContainer,{marginLeft: 15,marginRight: 30}]}
                        date={this.state.endDate}
                        mode="date"
                        showIcon={false}
                        placeholder="End Date"
                        format="MM-DD-YYYY"
                        minDate="2017-01-01"
                        maxDate="2019-01-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{dateInput: formStyles.dateInput}}
                        onDateChange={(date) => {this.setState({endDate: date})}}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    flex: 1,
                    flexWrap: 'wrap'
                }}>
                    <Button
                        containerViewStyle={{width: (Metrics.screenWidth/2)-15, marginLeft:10, marginRight:0 }}
                        buttonStyle={{backgroundColor:"#f58d4e",marginLeft:0}} title="Save Trip Details" onPress={()=>{this.submit()}}/>
                    <Button
                        containerViewStyle={{width: (Metrics.screenWidth/2)-15, marginLeft:10, marginRight:0}}
                        buttonStyle={{backgroundColor:"#494949"}}
                        title="Cancel" onPress={()=>{this.props.setParentState({screen: "list"})}}/>
                </View>
            </View>
        )
    }

    submit() {

        var start = this.state.startDate.split("-");
        var end = this.state.endDate.split("-");
        var alertStr = "";
        var dateValid = true;

        // Call ValidationComponent validate method
        let test = this.validate({
            tripName: {minlength:2, maxlength:10, required: true},
            startDate: {date: 'MM-DD-YYYY'},
            endDate: {date: 'MM-DD-YYYY'}
        });
        if (!test) {
            alertStr = alertStr.concat("\nTrip name must be between 3-10 characters.\n")
        }
        if (start[2] >= end[2]) {
            if (start[0] > end[0]) {
                alertStr = alertStr.concat("\nEnd date must be later than Start date.")
                dateValid = false;
            }
            else if (start[0] == end[0]) {
                if (start[1] > end[1]) {
                    alertStr = alertStr.concat("\nEnd date must be later than Start date.")
                    dateValid = false;
                }
            }
        }
        if( test && dateValid ) {
            let updatedTrip = triprTripController.createUpdatedTripObject(
                this.props.currentTripID,
                this.state.tripName,
                this.state.startDate,
                this.state.endDate,
                this.state.cityIDs);
            console.log("updated trip: ", updatedTrip);
            triprTripController.updateTrip(this.props.currentTripID, updatedTrip, () => {
                this.props.setParentState({screen: "list"})
            });
        } else {
            alert(alertStr)
        }


    }

}