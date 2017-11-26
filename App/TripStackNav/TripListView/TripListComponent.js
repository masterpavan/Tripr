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
        //on navigate, update the current trip ID for use later in the app.
        let screenState = {
            currentTripID: tripID,
            currentCityID: null, currentPOICategory: null, currentPOIID: null};
        AsyncStorage.setItem("screenState", JSON.stringify(screenState));

        //then actually navigate
        this.props.listView.navigate('TripDetailView', {currentTripID: tripID, name: this.props.list[tripID].name})
    }

    generateButtons() {
        if(Object.keys(this.props.list).length !== 0) {
            return Object.keys(this.props.list).reverse().map((element) => {
                return (
                    <View style={styles.buttonsContainer} key={this.props.list[element].name}>
                        <ButtonRectangle
                            onPress={() => this.navToTripDetailView(element)}
                            style={styles.componentButton}
                            image={require('../../../assets/images/icon_food.png')}
                            /*text={this.state.currentTrips[element].name}*/
                            text = {this.props.list[element].name}
                        />
                    </View>
                )
            })
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