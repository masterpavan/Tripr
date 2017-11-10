
import React, {Component} from "react";
import {Button, Image, ScrollView, Text, View} from 'react-native';
import ButtonRectangle from './ButtonRectangle'

import styles from './Styles/ChooseCityPlannerStyles'

export default class TripListView extends React.Component {



    static navigationOptions = {
        title: 'TripList'
    };
    render() {

        return (
            <View style={styles.mainContainer}>
                <Image source={require('./navyblue.png')} style={styles.backgroundImage} resizeMode='stretch' />
                <Text style={styles.sectionText}>
                    Discover
                </Text>

                <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
                    <View style={styles.buttonsContainer}>
                        <ButtonRectangle onPress={() => this.props.navigation.navigate('TripDetailView')} style={styles.componentButton} image={require('./icon_food.png')} text='Trip To Italy' />
                    </View>
                    <View style={styles.buttonsContainer}>
                        <ButtonRectangle onPress={() => this.props.navigation.navigate('TripDetailView')} style={styles.usageButton} image={require('./icon_food.png')} text='Trip to England' />
                    </View>
                    <View style={styles.buttonsContainer}>
                        <ButtonRectangle onPress={() => this.props.navigation.navigate('TripDetailView')} style={styles.apiButton} image={require('./icon_food.png')} text='Trip to America' />
                    </View>
                    <View style={styles.buttonsContainer}>
                        <ButtonRectangle onPress={() => this.props.navigation.navigate('TripDetailView')} style={styles.deviceButton} image={require('./icon_food.png')} text='Trip to Russia' />
                    </View>
                    <View style={styles.buttonsContainer}>
                        <ButtonRectangle onPress={() => this.props.navigation.navigate('TripDetailView')} style={styles.deviceButton} image={require('./icon_food.png')} text='Trip to Russia' />
                    </View>
                    <View style={styles.buttonsContainer}>
                        <ButtonRectangle onPress={() => this.props.navigation.navigate('TripDetailView')} style={styles.deviceButton} image={require('./icon_food.png')} text='Trip to Russia' />
                    </View>
                    <View style={styles.buttonsContainer}>
                        <ButtonRectangle onPress={() => this.props.navigation.navigate('TripDetailView')} style={styles.deviceButton} image={require('./icon_food.png')} text='Trip to Russia' />
                    </View>
                    <View style={styles.buttonsContainer}>
                        <ButtonRectangle onPress={() => this.props.navigation.navigate('TripDetailView')} style={styles.deviceButton} image={require('./icon_food.png')} text='Trip to Russia' />
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