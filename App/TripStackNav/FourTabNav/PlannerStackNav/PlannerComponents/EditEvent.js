import React, {Componenent} from 'react';
import {Image, Text, TouchableOpacity, View, TextInput, StyleSheet, Dimensions} from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements'
import {eventController} from "../PlannerStackNavConfig";
import DatePicker from 'react-native-datepicker';

export default class EditEventView extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            name: this.props.navigation.state.params.name,
            start: this.props.navigation.state.params.start,
            end: this.props.navigation.state.params.end,
            address: this.props.navigation.state.params.address,
			id: this.props.navigation.state.params.id
        };
    }


    render() {
        return (
			<View>
				<FormLabel>Event Name:</FormLabel>
				<FormInput onChangeText={(text) => this.setState({name:text})} defaultValue = {this.state.name}/>
				<View style={{flexDirection: 'row'}}>
					<View>
						<DatePicker
							style={[{marginLeft: 30,marginRight: 15}]}
							date={this.state.start}
							mode="time"
							showIcon={false}
							placeholder="Start Time"
							is24Hour={true}
							confirmBtnText="Confirm"
							cancelBtnText="Cancel"
							onDateChange={(date) => {this.setState({start: date})}}
						/>
					</View>
					<View>
						<DatePicker
							style={[{marginLeft: 30,marginRight: 15}]}
							date={this.state.end}
							mode="time"
							showIcon={false}
							placeholder="End Time"
							is24Hour={true}
							confirmBtnText="Confirm"
							cancelBtnText="Cancel"
							onDateChange={(date) => {this.setState({end: date})}}
						/>
					</View>
				</View>
				<FormLabel>Address:</FormLabel>
				<FormInput onChangeText={(text) => this.setState({address: text})} defaultValue = {this.state.address}/>
				<Button buttonStyle={{backgroundColor:"#15bdd9"}} title="Edit Event" onPress={()=>{this.submit()}}/>
			</View>
        );
    }

    async submit() {
        console.log(this.state.start);
        console.log(this.state.end);
        await eventController.editEvent(this.props.navigation.state.params.currentTripID,
            this.props.navigation.state.params.cityName,
            this.props.navigation.state.params.day,
            this.state.name,
            this.state.start,
            this.state.end,
            this.state.address,
			this.state.id,
			this.props.navigation.state.params.refresh);
        this.props.navigation.state.params.refresh();
        this.props.navigation.goBack();
    }
}