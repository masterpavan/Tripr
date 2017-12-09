import React from 'react';
import {View} from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements'
import {eventController} from "../PlannerStackNavConfig";
import DatePicker from 'react-native-datepicker';
import formStyles from "../../../../../assets/styles/FormStyles";
import styles from "../PlannerStyleSheet";

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
			<View style={styles.formBackgroundView}>
				<FormLabel containerStyle={formStyles.labelContainerStyle}
						   labelStyle={formStyles.labelStyle}>
					EVENT NAME
				</FormLabel>
				<FormInput containerStyle={formStyles.inputContainerStyle}
						   inputStyle={formStyles.inputStyle}
						   onChangeText={(text) => this.setState({name:text})}
						   defaultValue={this.state.name}
				/>
				<FormLabel containerStyle={formStyles.labelContainerStyle}
						   labelStyle={formStyles.labelStyle}>ADDRESS</FormLabel>
				<FormInput containerStyle={formStyles.inputContainerStyle}
						   inputStyle={formStyles.inputStyle}
						   onChangeText={(text) => this.setState({address: text})}
						   defaultValue={this.state.address}
				/>
				<FormLabel containerStyle={formStyles.labelContainerStyle}
						   labelStyle={formStyles.labelStyle}>EVENT TIMES</FormLabel>
				<View style={styles.timeChooser}>
					<DatePicker
						style={styles.dateContainer}
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
						style={styles.dateContainer}
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
				<View style={styles.editOrCancelButtonView}>
					<Button
						containerViewStyle={styles.editOrCancelButtonContainer}
						buttonStyle={styles.editButtonStyle} title="Edit Event" onPress={()=>{this.submit()}}/>
					<Button
						containerViewStyle={styles.editOrCancelButtonContainer}
						buttonStyle={styles.cancelButtonStyle}
						title="Cancel" onPress={()=>{this.props.navigation.goBack()}}/>
				</View>
			</View>
        );
    }

    async submit() {
        console.log(this.state.start);
        console.log(this.state.end);
        await eventController.editEvent(
            this.props.navigation.state.params.currentTripID,
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