import React, {Componenent} from 'react';
import {Text, TextInput, View} from 'react-native';

export default class EditEventView extends React.Component {
	render() {
		return (
			<View>
				<Text> Current Address: 9450 Gilman Drive </Text>
				<Text> New Address: </Text>
				<TextInput
	            	style={{height: 40, borderColor: 'gray', borderWidth: 1}}
	            />
			</View>
		);
	}
}