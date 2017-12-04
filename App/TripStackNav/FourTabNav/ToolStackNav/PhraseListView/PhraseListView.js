
import React, {Component} from "react";
import {Picker, ScrollView, Text, View} from 'react-native';
import ButtonRectangleShort from "../ToolTileView/ButtonRectangleShort";
import styles from "../../../../../assets/styles/ChooseCityPlannerStyles";
import {FormLabel} from "react-native-elements";

export default class PhraseListView extends React.Component {
    static navigationOptions = {
        title: 'Phrasebook'
    };
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: "Italian"
            //tripDates, Icon, Other form inputs
        };

    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <FormLabel>Select Language</FormLabel>
                <Picker
                    selectedValue={this.state.selectedLanguage}
                    onValueChange={(itemValue) => {
                        this.setState({selectedLanguage: itemValue})
                    }}>
                    <Picker.Item label="Italian" value="Italian" />
                    <Picker.Item label="Spanish" value="Spanish" />
                    <Picker.Item label="French" value="French" />
                    <Picker.Item label="German" value="German" />
                </Picker>

                <ScrollView
                    showsVerticalScrollIndicator={true} bounces={false} style={styles.container}>
                    <View style={styles.buttonsContainer}>
                        <ButtonRectangleShort onPress={() => this.props.navigation.navigate('GreetingsListView' + this.state.selectedLanguage)} style={styles.componentButton} text='BASICS' />
                        <ButtonRectangleShort onPress={() => this.props.navigation.navigate('TravelListView' + this.state.selectedLanguage)} style={styles.componentButton} text='TRAVEL' />
                        <ButtonRectangleShort onPress={() => this.props.navigation.navigate('FoodListView' + this.state.selectedLanguage)} style={styles.componentButton} text='FOOD AND DRINK' />
                        <ButtonRectangleShort onPress={() => this.props.navigation.navigate('ShoppingListView' + this.state.selectedLanguage)} style={styles.componentButton} text='SHOPPING' />
                        <ButtonRectangleShort onPress={() => this.props.navigation.navigate('EmergencyListView' + this.state.selectedLanguage)} style={styles.componentButton} text='EMERGENCY' />
                    </View>
                </ScrollView>
            </View>
        )
    }
}
