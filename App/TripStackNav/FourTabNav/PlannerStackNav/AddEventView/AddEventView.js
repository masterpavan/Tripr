import React, {Componenent} from 'react';
import {Image, Text, TouchableOpacity, View, TextInput} from 'react-native';

export default class AddEventView extends React.Component {
	render() {
		return (
			<View>
				<Text> Add Event View </Text>
	            <Text> Name </Text>
	            <TextInput 
	            	style={{height: 40, borderColor: 'gray', borderWidth: 1}}
	            />
	            <Text> Address </Text>
	            <TextInput
	            	style={{height: 40, borderColor: 'gray', borderWidth: 1}}
	            />
            </View>
		);
	}
}