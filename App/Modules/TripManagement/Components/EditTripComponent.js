import React from "react";
import { View, StyleSheet} from "react-native";
import {Button, FormLabel, FormInput} from 'react-native-elements'
import {triprTripController} from "../TripStackNavConfig";
import Metrics from "../../../Misc/Styles/Themes/Metrics";
import DatePicker from 'react-native-datepicker'
import formStyles from "../../../Misc/Styles/FormStyles";
import ValidationComponent from 'react-native-form-validator';

const styles = StyleSheet.create({
    editTripView: {
        backgroundColor:'transparent', flex:1
    },

    datePickerStyle: {
        flexDirection: 'row',
        flex:0,
        height: 80,
        flexWrap: 'wrap',
    },

    dateContainerLeft: {
        width: (Metrics.screenWidth / 2) - 45,
        height: 40,
        marginLeft: 30,
        marginRight: 15
    },

    dateContainerRight: {
        width: (Metrics.screenWidth / 2) - 45,
        height: 40,
        marginLeft: 15,
        marginRight: 30
    },

    tripEditView: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap'
    },

    saveCancelButtonContainer: {
        width: (Metrics.screenWidth/2)-15,
        marginLeft:10,
        marginRight:0
    },

    saveButtonStyle: {
        backgroundColor:"#f58d4e",
        marginLeft:0
    },

    cancelButtonStyle: {
        backgroundColor:"#494949"
    }
});


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
            <View style={styles.editTripView}>
                <FormLabel containerStyle={formStyles.labelContainerStyle}
                           labelStyle={formStyles.labelStyle}>RENAME YOUR TRIP</FormLabel>
                <FormInput containerStyle={formStyles.inputContainerStyle}
                           inputStyle={formStyles.inputStyle}
                           value={this.state.tripName}
                           onChangeText={(text) => this.setState({tripName:text})}/>
                <FormLabel containerStyle={formStyles.labelContainerStyle}
                           labelStyle={formStyles.labelStyle}>RESELECT YOUR TRIP DATES</FormLabel>

                <View style={styles.datePickerStyle}>
                    <DatePicker
                        style={styles.dateContainerLeft}
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
                        style={styles.dateContainerRight}
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
                <View style={styles.tripEditView}>
                    <Button
                        containerViewStyle={styles.saveCancelButtonContainer}
                        buttonStyle={styles.saveButtonStyle} title="Save Trip Details" onPress={()=>{this.submit()}}/>
                    <Button
                        containerViewStyle={styles.saveCancelButtonContainer}
                        buttonStyle={styles.cancelButtonStyle}
                        title="Cancel" onPress={()=>{this.props.setParentState({screen: "list"})}}/>
                </View>
            </View>
        )
    }

    async submit() {
        var start = this.state.startDate.split("-");
        var end = this.state.endDate.split("-");
        var alertStr = "";
        var dateValid = true;

        // Call ValidationComponent validate method
        let test = this.validate({
            tripName: {minlength:1, maxlength:10, required: true},
            startDate: {date: 'MM-DD-YYYY'},
            endDate: {date: 'MM-DD-YYYY'}
        });
        if (!test) {
            alertStr = alertStr.concat("\nTrip name must be between 2-10 characters.\n")
        }
        if (start.length == 1 || end.length==1) {
            alertStr = alertStr.concat("\nYou must enter a Start and End date.\n")
            dateValid = false;
        }
        else if (start[2] >= end[2]) {
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
        await triprTripController.updateTrip(this.props.currentTripID, updatedTrip);
        this.props.setParentState({screen: "list"});
        this.props.refreshTripList();
        } else {
            alert(alertStr)
        }


    }

}