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

    randomImage() {
        let images = [
                require('../../../assets/images/rectangles/rectangle1.png'),
                require('../../../assets/images/rectangles/rectangle2.png'),
                require('../../../assets/images/rectangles/rectangle3.png'),
                require('../../../assets/images/rectangles/rectangle4.png'),
                require('../../../assets/images/rectangles/rectangle5.png'),
                require('../../../assets/images/rectangles/rectangle6.png'),
                require('../../../assets/images/rectangles/rectangle7.png'),
                require('../../../assets/images/rectangles/rectangle8.png'),
                require('../../../assets/images/rectangles/rectangle9.png'),
                require('../../../assets/images/rectangles/rectangle10.png'),
                require('../../../assets/images/rectangles/rectangle11.png'),
            ]

        return images[Math.floor(Math.random()*10)];

    }

    generateButtons() {
        if(Object.keys(this.props.list).length !== 0) {
            return Object.keys(this.props.list).reverse().map((tripID) => {
                //let image = require(`../../../assets/images/rectangles/rectangle${(Math.floor(Math.random()*10)+1)}.png`)
                return (
                    <View style={styles.buttonsContainer} key={this.props.list[tripID]}>
                        <ButtonRectangle
                            onPress={() => this.navToTripDetailView(tripID)}
                            style={styles.componentButton}
                            image={this.randomImage()}
                            /*text={this.state.currentTrips[element].name}*/
                            text = {this.props.list[tripID].name.toUpperCase()}
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