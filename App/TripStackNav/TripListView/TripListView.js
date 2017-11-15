
import React, {Component} from "react";
import {Button, Image, ScrollView, Text, View, AsyncStorage} from 'react-native';
import ButtonRectangle from './ButtonRectangle'

import styles from './Styles/ChooseCityPlannerStyles'

export default class TripListView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {currentTrips: {}}
    }

    componentDidMount() {
        AsyncStorage.setItem("currentTrips", JSON.stringify({
            tripToItaly: {
                name: "Trip to Italy"
            },
        }));
        AsyncStorage.getItem("currentTrips").then((value) => {
            this.setState({currentTrips: JSON.parse(value)});
            console.log("We set the state!");
        }).done();
    };

    static navigationOptions = {
        title: 'TripList'
    };

    generateButton() {
        return Object.keys(this.state.currentTrips).map(element => {
            return (
                <View style={styles.buttonsContainer} key = {this.state.currentTrips[element].name} >
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

    render() {
        return (
            <View style={styles.mainContainer}>
                <Image source={require('./navyblue.png')} style={styles.backgroundImage} resizeMode='stretch' />
                <View>
                    <Button
                        title="+"
                        onPress={() => {
                            var oldState = this.state.currentTrips;
                            oldState[Math.random()] = {name: ""+Math.random()};
                            this.setState({currentTrips: oldState});
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