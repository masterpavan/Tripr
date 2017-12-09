import React from "react";
import {Text, View} from "react-native";
import styles from "../../../assets/styles/ChooseCityPlannerStyles";
import ButtonSquare from "../../../assets/elements/ButtonSquare";
import {FormLabel} from "react-native-elements";
import formStyles from "../../../assets/styles/FormStyles";
import {cityImages} from "../../../assets/services/cityImager"
import TriprStore from "../../../assets/services/TriprStore";

export default class CityListComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log("CityList props are",props);
    }

    async navToFourTabView(cityID) {
        //display the loading icon
        this.props.setParentState({isLoading:true});

        //initialize the 4 tab screeen
        let loadingState = await TriprStore.initializeCurrentCityPackage(this.props.list[cityID]);

        //remove the loading icon
        this.props.setParentState(loadingState);

        //then actually navigate iff not offline
        if(!loadingState.offlineMessage) {
            this.props.navigate('FourTabNav', {
                currentTripID: this.props.currentTripID,
                cityName: this.props.list[cityID]
            })
        }
    }

    generateButtons() {
        if(Object.keys(this.props.list).length !== 0) {
            return Object.keys(this.props.list).map((element,index) => {
                console.log(`List element is: ${element}, List index is: ${index}, list is:`,this.props.list);
                return (
                    <ButtonSquare
                        onPress={() => this.navToFourTabView(element)}
                        style={styles.componentButton}
                        image={cityImages[this.props.list[element]]}
                        text = {this.props.list[element].replace(/_/g,' ').toUpperCase()}
                    />
                )
            })
        } else {
            return (
                <View style={styles.infoTextContainer}>
                    <Text style={styles.infoText}>Your trip doesn't currently have any cities!</Text>
                    <Text style={styles.infoText}>Click on the + button above to add a city to your Trip.</Text>
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