import React, {Componenent} from 'react';
import {Image, Text, TouchableOpacity, View, TextInput, StyleSheet, Dimensions} from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements'
import {eventController} from "../PlannerStackNavConfig";
import DatePicker from 'react-native-datepicker';
import formStyles from "../../../../../assets/styles/FormStyles";
import Metrics from "../../../../../assets/styles/Themes/Metrics";



export default class AddEvent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			start: "00:00",
			end: "00:00",
			address: ""
		};
	}


	render() {
		return (
            <View style={{backgroundColor:'transparent', flex:1}}>
                <FormLabel containerStyle={formStyles.labelContainerStyle}
                           labelStyle={formStyles.labelStyle}>
                    Event Name:
                </FormLabel>
                <FormInput containerStyle={formStyles.inputContainerStyle}
                           inputStyle={formStyles.inputStyle}
                           onChangeText={(text) => this.setState({name:text})}
                />
                <FormLabel containerStyle={formStyles.labelContainerStyle}
                           labelStyle={formStyles.labelStyle}>Address:</FormLabel>
                <FormInput containerStyle={formStyles.inputContainerStyle}
                           inputStyle={formStyles.inputStyle}
                           onChangeText={(text) => this.setState({address: text})} />
                <FormLabel containerStyle={formStyles.labelContainerStyle}
                           labelStyle={formStyles.labelStyle}>Event Times:</FormLabel>
                <View style={{
                    flexDirection: 'row',
                    flex: 0,
                    height: 80,
                    flexWrap: 'wrap'}}>
                        <DatePicker
                            style={[formStyles.dateContainer,{marginLeft: 30,marginRight: 15}]}
                            date={this.state.start}
                            mode="time"
                            showIcon={false}
                            placeholder="Start Time"
                            is24Hour={true}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{dateInput: formStyles.dateInput}}
                            onDateChange={(date) => {this.setState({start: date})}}
                        />
                        <DatePicker
                            style={[formStyles.dateContainer,{marginLeft: 30,marginRight: 15}]}
                            date={this.state.end}
                            mode="time"
                            showIcon={false}
                            placeholder="End Time"
                            is24Hour={true}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{dateInput: formStyles.dateInput}}
                            onDateChange={(date) => {this.setState({end: date})}}
                        />
                </View>
                <View style={{
                    flexDirection: 'row',
                    flex: 1,
                    flexWrap: 'wrap'
                }}>
                    <Button
                        containerViewStyle={{width: (Metrics.screenWidth/2)-15, marginLeft:10, marginRight:0 }}
                        buttonStyle={{backgroundColor:"#f58d4e",marginLeft:0}} title="Add Event" onPress={()=>{this.submit()}}/>
                    <Button
                        containerViewStyle={{width: (Metrics.screenWidth/2)-15, marginLeft:10, marginRight:0}}
                        buttonStyle={{backgroundColor:"#494949"}}
                        title="Cancel" onPress={()=>{this.props.navigation.goBack()}}/>
                </View>
            </View>
		);
	}

	async submit() {
	    console.log(this.state.start);
	    console.log(this.state.end);
        await eventController.addEvent(this.props.navigation.state.params.currentTripID,
            this.props.navigation.state.params.cityName,
            this.props.navigation.state.params.day,
            this.state.name,
            this.state.start,
            this.state.end,
            this.state.address);
        this.props.navigation.state.params.refresh();
        this.props.navigation.goBack();
	}
}

const styles = StyleSheet.create({
  dateLabel: {
  	width: Dimensions.get('window').width/2.5
  },
  dateInput: {
    width: Dimensions.get('window').width/2.5,
    borderWidth:2,
    borderColor: 'lightgrey'

  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: '#eee'
  }
});