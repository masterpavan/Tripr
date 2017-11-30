import React, {Componenent} from 'react';
import {Image, Text, TouchableOpacity, View, TextInput, StyleSheet, Dimensions} from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements'


export default class AddEvent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			eventName: "",
			startTime: "",
			endTime: "",
			address: ""
		};
	}


	render() {
		return (
			<View>
                <FormLabel>Event Name:</FormLabel>
                <FormInput onChangeText={(text) => this.setState({eventName:text})}/>
                <View style={{flexDirection: 'row'}}>
                	<View>
	                	<FormLabel containerStyle= {styles.dateLabel}>Start Time:</FormLabel>
	                	<FormInput containerStyle= {styles.dateInput} onChangeText={(text) => this.setState({startTime:text})}/>
	                </View>
	                <View>
                		<FormLabel containerStyle= {styles.dateLabel}>End Time:</FormLabel>
                		<FormInput containerStyle= {styles.dateInput} onChangeText={(text) => this.setState({endTime:text})} />                
                	</View>
                </View>    
                <FormLabel>Address:</FormLabel>
                <FormInput onChangeText={(text) => this.setState({address: text})} /> 
                <Button buttonStyle={{backgroundColor:"#15bdd9"}} title="Add Event" onPress={()=>{this.submit()}}/>
            </View>
		);
	}

	submit() {
        let event = {
        	eventName: this.state.eventName,
        	startTime: this.state.startTime,
        	endTime: this.state.endTime,
        	address: this.state.address
        }
        //this.props.navigation.state.params.addEvent(this.state.eventName, this.state.startTime, this.state.endTime, 50)
        //this.props.navigation.state.params.refresh();
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