
import React, {Component} from "react";
import {Button, Image, ScrollView, Text, View, AsyncStorage} from 'react-native';
import ButtonRectangle from './ButtonRectangle'

import styles from './Styles/ChooseCityPlannerStyles'

export default class TripListView extends React.Component {

    componentDidMount() {
        AsyncStorage.setItem("currentTrips", {
            tripToItaly: {
                name: "Trip to Italy"
            },
            tripToEngland: {
                name: "Trip to England"
            },
            tripToRussia: {
                name: "Trip to Russia"
            }
        });
        AsyncStorage.getItem("currentTrips").then((value) => {
            this.setState({"currentTrips": value});
        }).done();
    };

    static navigationOptions = {
        title: 'TripList'
    };

    generateButton() {
        this.state.currentTrips.forEach(element => {
            return (
                <ButtonRectangle
                    onPress={() => this.props.navigation.navigate('TripDetailView')}
                    style={styles.componentButton}
                    image={require('./icon_food.png')}
                    text={element.name}
                />
            )
        })
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Image source={require('./navyblue.png')} style={styles.backgroundImage} resizeMode='stretch' />
                <Text style={styles.sectionText}>
                    Discover
                </Text>
                <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
                    <View style={styles.buttonsContainer}>
                        {this.generateButton()}
                    </View>
                </ScrollView>
            </View>
            /*<View>
                <Text>Trip To Italy</Text>
                <Button onPress={() => this.props.navigation.navigate('TripDetailView')} title="View Cities" />
                <Text>Trip to England</Text>
                <Text>Trip to America</Text>
                <Text>Trip to Russia</Text>
            </View>*/
        )
    }
}