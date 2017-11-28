import React, {Component} from "react";
import {Button, Text, View, AsyncStorage } from "react-native";
import styles from "../../../assets/styles/ChooseCityPlannerStyles";
import ButtonRectangle from "../../../assets/elements/ButtonRectangle";


export default class CityListComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log("CityList props are",props);
    }

    navToFourTabView(cityID) {
        //on navigate, update the current trip ID for use later in the app.
        let screenState = {
            currentTripID: this.props.currentTripID,
            currentCityID: cityID, currentPOICategory: null, currentPOIID: null};
        AsyncStorage.setItem("screenState", JSON.stringify(screenState));

        //then actually navigate
        this.props.navigate('FourTabNav', {cityName: this.props.list[cityID]})

        //download stuff here
    }

    generateButtons() {
        if(Object.keys(this.props.list).length !== 0) {
            return Object.keys(this.props.list).map((element,index) => {
                return (
                    <View style={styles.buttonsContainer} key={index}>
                        <ButtonRectangle
                            onPress={() => this.navToFourTabView(element)}
                            style={styles.componentButton}
                            image={require('../../../assets/images/icon_food.png')}
                            /*text={this.state.currentTrips[element].name}*/
                            text = {this.props.list[element]}
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