import React, {Component} from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import {Button, FormLabel, FormInput, Text} from 'react-native-elements'
import {triprTripController} from "../TripStackNavConfig";
import Metrics from "../../../assets/styles/Themes/Metrics";
import DatePicker from 'react-native-datepicker'
import formStyles from "../../../assets/styles/FormStyles";


export default class EditTripComponent extends React.Component {


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

    async submit() {

        let updatedTrip = triprTripController.createUpdatedTripObject(
            this.props.currentTripID,
            this.state.tripName,
            this.state.startDate,
            this.state.endDate,
            this.state.cityIDs);
        console.log("updated trip: ", updatedTrip);
        await triprTripController.updateTrip(this.props.currentTripID, updatedTrip);
        this.props.setParentState({screen: "list"});
        this.props.refreshTripList();

    }

}