import React, {Component} from "react";
import {Button, Text, View, AsyncStorage } from "react-native";
import styles from "../../../assets/styles/ChooseCityPlannerStyles";
import ButtonRectangle from "../../../assets/elements/ButtonRectangle";
import ButtonSquare from "../../../assets/elements/ButtonSquare";
import {FormLabel} from "react-native-elements";
import formStyles from "../../../assets/styles/FormStyles";

export default class CityListComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log("CityList props are",props);
    }

    image(index) {
        let images = [
            require('../../../assets/images/squares/square1.png'),
            require('../../../assets/images/squares/square2.png'),
            require('../../../assets/images/squares/square3.png'),
            require('../../../assets/images/squares/square4.png'),
            require('../../../assets/images/squares/square5.png'),
            require('../../../assets/images/squares/square6.png'),
            require('../../../assets/images/squares/square7.png'),
            require('../../../assets/images/squares/square8.png'),
            require('../../../assets/images/squares/square9.png'),
        ]

        return images[index%9];

    }

    navToFourTabView(cityID) {
        //on navigate, update the current trip ID for use later in the app.
        let screenState = {
            currentTripID: this.props.currentTripID,
            currentCityID: cityID, currentPOICategory: null, currentPOIID: null};
        AsyncStorage.setItem("screenState", JSON.stringify(screenState));

        //then actually navigate
        this.props.navigate('FourTabNav', {currentTripID: this.props.currentTripID, cityName: this.props.list[cityID]})


        //download stuff here
    }

    generateButtons() {
        if(Object.keys(this.props.list).length !== 0) {
            return Object.keys(this.props.list).map((element,index) => {
                return (
                    <ButtonSquare
                        onPress={() => this.navToFourTabView(element)}
                        style={styles.componentButton}
                        image={this.image(index)}
                        text = {this.props.list[element].toUpperCase()}
                    />
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
            <View>
            <View>
                <FormLabel containerStyle={formStyles.labelContainerStyle}
                           labelStyle={formStyles.labelStyle}>CITIES IN YOUR TRIP</FormLabel>
            </View>
            <View style={[styles.buttonsContainer,{backgroundColor:'#eee'}]}>
                {this.generateButtons()}
            </View>
            </View>
        )
    }

}