
import React, {Component} from "react";
import {Button, Image, ScrollView, Text, View, AsyncStorage} from 'react-native';
import ButtonRectangle from './ButtonRectangle'

import styles from './Styles/ChooseCityPlannerStyles'

export default class TripListView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {currentTrips: {} }
    }

    componentDidMount() {
        AsyncStorage.setItem("currentTrips", JSON.stringify({}));
    };

    static navigationOptions = {
        title: 'TripList'
    };

    generateButton() {
        if(Object.keys(this.state.currentTrips).length !== 0) {
            return Object.keys(this.state.currentTrips).reverse().map(element => {
                return (
                    <View style={styles.buttonsContainer} key={this.state.currentTrips[element].name}>
                        <ButtonRectangle
                            onPress={() => this.props.navigation.navigate('TripDetailView')}
                            style={styles.componentButton}
                            image={require('./icon_food.png')}
                            text={this.state.currentTrips[element].name}
                        />
                    </View>
                )
            })
        }
    }

    render() {
        AsyncStorage.getItem("currentTrips").then((value) => {
            this.setState({currentTrips: JSON.parse(value)});
            console.log("We set the state!");
        }).done();

        return (
            <View style={styles.mainContainer}>
                <View>
                    <Button
                        title="+"
                        onPress={() => {
                            this.props.navigation.navigate('AddTripView');
                        }}
                    />
                </View>
                <ScrollView showsVerticalScrollIndicator={false} bounces={true} style={styles.container}>
                    {this.generateButton()}
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