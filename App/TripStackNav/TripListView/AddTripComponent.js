import React, {Component} from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import {Button, FormLabel, FormInput, Text} from 'react-native-elements'
import {triprTripController} from "../TripStackNavConfig";
import Metrics from "../../../assets/styles/Themes/Metrics";
import DatePicker from 'react-native-datepicker'

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

export default class AddTripComponent extends React.Component {


    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            tripName: "",
            startDate: '',
            endDate: '',
            //tripDates, Icon, Other form inputs
        };

    }

    render() {
        console.log("addTrip state is:", this.state);
        return (
            <View style={{backgroundColor:'transparent', flex:1}}>
                <FormLabel containerStyle={styles.labelContainerStyle}
                           labelStyle={styles.labelStyle}>NAME YOUR TRIP</FormLabel>
                <FormInput containerStyle={styles.inputContainerStyle}
                           inputStyle={styles.inputStyle}
                           onChangeText={(text) => this.setState({tripName:text})}/>
                <FormLabel containerStyle={styles.labelContainerStyle}
                           labelStyle={styles.labelStyle}>SELECT YOUR TRIP DATES</FormLabel>

                <View style={{
                    flexDirection: 'row',
                    flex:0,
                    height: 80,
                    flexWrap: 'wrap',
                }}>
                    <DatePicker
                    style={[styles.dateContainer,{marginLeft: 30,marginRight: 15}]}
                    date={this.state.startDate}
                    mode="date"
                    showIcon={false}
                    placeholder="Start Date"
                    format="MM-DD-YYYY"
                    minDate="2017-01-01"
                    maxDate="2019-01-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{dateInput: styles.dateInput}}
                    onDateChange={(date) => {this.setState({startDate: date})}}
                />
                    <DatePicker
                        style={[styles.dateContainer,{marginLeft: 15,marginRight: 30}]}
                        date={this.state.endDate}
                        mode="date"
                        showIcon={false}
                        placeholder="End Date"
                        format="MM-DD-YYYY"
                        minDate="2017-01-01"
                        maxDate="2019-01-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{dateInput: styles.dateInput}}
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

        let thisTrip = triprTripController.createNewTripObject(this.state.tripName, this.state.startDate, this.state.endDate, {});
        console.log("created trip: ", thisTrip);
        triprTripController.addTrip(thisTrip, ()=>{this.props.setParentState({screen: "list"})});

    }

}