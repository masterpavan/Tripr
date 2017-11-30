import React, {Component} from "react";
import {Button, Text, View, AsyncStorage } from "react-native";
import styles from "../../../assets/styles/ChooseCityPlannerStyles";
import ButtonRectangle from "../../../assets/elements/ButtonRectangle";


export default class TripListComponent extends React.Component {

    constructor(props) {
       super(props);
       console.log(props);
    }

    navToTripDetailView(tripID) {
        this.props.navigate('TripDetailView', {currentTripID: tripID, name: this.props.list[tripID].name})
    }

    generateButtons() {
        if(Object.keys(this.props.list).length !== 0) {
            return Object.keys(this.props.list).reverse().map((tripID) => {
                return (
                    <View style={styles.buttonsContainer} key={this.props.list[tripID]}>
                        <ButtonRectangle
                            onPress={() => this.navToTripDetailView(tripID)}
                            style={styles.componentButton}
                            image={require('../../../assets/images/icon_food.png')}
                            /*text={this.state.currentTrips[element].name}*/
                            text = {this.props.list[tripID].name}
                        />
                    </View>
                )
            })
        } else {
            return (
                <View style={styles.infoTextContainer}>
                    <Text style={styles.infoText}>You currently don't have any trips!</Text>
                    <Text style={styles.infoText}>Click on the plus button above to create a new Trip.</Text>
                </View>

            )
        }
    }

    render() {
        return (
            <View>
                {this.generateButtons()}
            </View>
        )
    }

}