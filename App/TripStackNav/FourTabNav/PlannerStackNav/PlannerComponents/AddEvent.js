import React, {Componenent} from 'react';
import {Image, Text, TouchableOpacity, View, TextInput, StyleSheet, Dimensions} from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements'
import {eventController} from "../PlannerStackNavConfig";


export default class AddEvent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			start: "",
			end: "",
			address: ""
		};
	}


	render() {
		return (
			<View>
                <FormLabel>Event Name:</FormLabel>
                <FormInput onChangeText={(text) => this.setState({name:text})}/>
                <View style={{flexDirection: 'row'}}>
                	<View>
	                	<FormLabel containerStyle= {styles.dateLabel}>Start Time:</FormLabel>
	                	<FormInput containerStyle= {styles.dateInput} onChangeText={(text) => this.setState({start:text})}/>
	                </View>
	                <View>
                		<FormLabel containerStyle= {styles.dateLabel}>End Time:</FormLabel>
                		<FormInput containerStyle= {styles.dateInput} onChangeText={(text) => this.setState({end:text})} />
                	</View>
                </View>    
                <FormLabel>Address:</FormLabel>
                <FormInput onChangeText={(text) => this.setState({address: text})} /> 
                <Button buttonStyle={{backgroundColor:"#15bdd9"}} title="Add Event" onPress={()=>{this.submit()}}/>
            </View>
		);
	}

	async submit() {
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