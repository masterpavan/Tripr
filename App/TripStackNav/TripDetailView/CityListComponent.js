import React, {Component} from "react";
import {Button, Text, View, AsyncStorage } from "react-native";
import styles from "../../../assets/styles/ChooseCityPlannerStyles";
import ButtonRectangle from "../../../assets/elements/ButtonRectangle";
import ButtonSquare from "../../../assets/elements/ButtonSquare";


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
        this.props.navigate('FourTabNav', {currentTripID: this.props.currentTripID ,cityName: this.props.list[cityID]})


        //download stuff here
    }

    generateButtons() {
        if(Object.keys(this.props.list).length !== 0) {
            return Object.keys(this.props.list).map((element,index) => {
                return (
                    <View style={{backgroundColor:'#00ff00'}} key={index}>
                        <ButtonSquare
                            onPress={() => this.navToFourTabView(element)}
                            style={styles.componentButton}
                            image={require('../../../assets/images/rectangles/rectangle11.png')}
                            /*text={this.state.currentTrips[element].name}*/
                            text = {this.props.list[element].toUpperCase()}
                        />
                    </View>
                )
            })
        } else {
            return (
                <View style={styles.infoTextContainer}>
                    <Text style={styles.infoText}>Your trip doesn't currently have any cities!</Text>
                    <Text style={styles.infoText}>Click on the plus button above to add a city to your Trip.</Text>
                </View>

            )
        }
    }



    render() {

        return (
            <View style={[styles.buttonsContainer,{backgroundColor:'#f00000'}]}>
                {this.generateButtons()}
            </View>
        )
    }

}